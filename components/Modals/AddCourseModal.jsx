import React, { useState, useEffect } from "react";
import SammyModal from "../General/SammyModal";
import axios from "axios";
import toast from 'react-hot-toast';
import { useAuthContext } from "../../context/AuthContext";
import { useDataContext } from "../../context/DataContext";
import Loading from "../General/Loading";
import { MdOutlineCameraAlt } from "react-icons/md";

const AddCourseModal = ({ isOpen, onClose, data, isUpdate }) => {
  const { token, role } = useAuthContext();
  const { postExternalRequestFeedback, postRequestFeedback } = useDataContext();
  const [loading, setLoading] = useState(false);
  const initialForm = {
    image: "",
    name: ""
  };
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(null);

  function handleFormChange(e) {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const validate = () => {
    if (
      form.image != "" &&
      form.name != ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleImageUpload = async (e) => {
    let imgObj = e.target.files[0];
    const validMimeTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'];
    const validExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

    // Log the selected file's details
    console.log(`Selected file: ${imgObj.name}`);
    console.log(`MIME type: ${imgObj.type}`);

    // Validate file size
    if (imgObj.size > 11000000) {
      return toast.error("Maximum file size is 1MB");
    }

    // Validate MIME type
    if (!validMimeTypes.includes(imgObj.type)) {
      toast.error('Invalid MIME type. Please upload a valid video file (jpg, jpeg, png, or webp).');
      return;
    }

    // Validate file extension
    const fileExtension = imgObj.name.substring(imgObj.name.lastIndexOf('.')).toLowerCase();
    if (!validExtensions.includes(fileExtension)) {
      toast.error('Invalid file extension. Please upload a valid video file (jpeg, png, or webp).');
      return;
    }

    const formdata = new FormData();
    formdata.append("file", imgObj);
    formdata.append("upload_preset", "ml_default");
    toast.loading("uploading image...");
    const response = await postExternalRequestFeedback("https://api.cloudinary.com/v1_1/dnj7mymap/image/upload", formdata);
    toast.dismiss();
    if (response) {
      setForm((prevForm) => ({
        ...prevForm, image: response?.url
      }));
      toast.dismiss();
      toast.success("Upload successful");
    } else {
      toast.dismiss();
      toast.error("Upload failed");
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isFilled = validate();

    if (!isFilled) {
      toast.dismiss();
      toast.error("Please Fill All Fields", { style: { width: '250px' } });
      return;
    }
    else {
      setLoading(true);
      try {
        const response = await postRequestFeedback(`create-course-category`, {
          ...form,
        });
        setLoading(false);
        toast.dismiss();
        if (response.error == false) {
          toast.success(response.message);
          setForm(initialForm);
          onClose();
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        console.error("An error occurred:", error.response ? error.response.data : error);
        // Handle the error appropriately
        toast.dismiss();
        toast.error(error.response.message, { style: { width: '250px' } });
      }
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <SammyModal
        isOpen={isOpen}
        onClose={onClose}
        clickBackgroundToClose={true}
        modalClass={"lg:w-[500px] w-screen"}
      >
        <div>
          <h2 className="font-extrabold text-lg mb-2">Add Course</h2>
          <p className="mb-2 text-sm text-gray-400">Fill in course info</p>

          <div className="pt-4 px-2 max-h-[400px] overflow-y-auto space-y-4">
            <div className="h-[150px] w-full rounded border relative group">
              <img
                src={form?.image ? `${form.image}` : "/placeholder-img.webp"}
                className="h-full w-full object-cover"
                alt=""
              />
              <label
                htmlFor="image"
                className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 group-hover:flex group-hover:flex-col justify-center items-center text-white  hidden"
              >
                <MdOutlineCameraAlt />
                Add image
              </label>

              <input
                type="file"
                className="p-2 hidden rounded border border-gray-300 w-full"
                name="image"
                id="image"
                onChange={handleImageUpload}
              />
            </div>
            <div>
              <p className="text-gray-600 mb-2 text-sm">Name</p>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleFormChange}
                className="border rounded-lg py-2 px-2 w-full text-sm"
              />
            </div>

            {/* submit button */}

          </div>
          <div className="flex justify-end">
            <a
              class="shadow-2xl mt-3 inline-flex items-center gap-2 rounded-lg border border-primary bg-primary px-8 py-3 text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary"
              onClick={handleSubmit}
            >
              <span class="text-sm font-medium">Submit</span>

              <svg
                class="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </SammyModal>
    </>
  );
};

export default AddCourseModal;

import React, { useState, useEffect } from "react";
import SammyModal from "../General/SammyModal";
import axios from "axios";
import toast from 'react-hot-toast';
import { useAuthContext } from "../../context/AuthContext";
import { useDataContext } from "../../context/DataContext";
import Loading from "../General/Loading";
import { MdOutlineCameraAlt } from "react-icons/md";
import Editor from 'react-simple-wysiwyg';

const AddSubCourseModal = ({ isOpen, onClose, data, isUpdate }) => {
  const { token, role } = useAuthContext();
  const { postExternalRequestFeedback, postRequestFeedback, getRequest } = useDataContext();
  const { VITE_FULL_URL, VITE_IMAGE_URL } = import.meta.env;
  const [loading, setLoading] = useState(false);
  const [courseData, setCourseData] = useState(null);
  const initialForm = {
    image: "",
    name: "",
    course_category: "",
    first_run_start_date: "",
    first_run_end_date: "",
    first_run_location: "",
    second_run_start_date: "",
    second_run_end_date: "",
    second_run_location: "",
    workshop_fee: "",
    online_course_fee: "",
    online_course_channel: "",
    overview: ""
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
      form.name != "" &&
      form.course_category != "" &&
      form.first_run_start_date != "" &&
      form.first_run_end_date != "" &&
      form.first_run_location != "" &&
      form.second_run_start_date != "" &&
      form.second_run_end_date != "" &&
      form.second_run_location != "" &&
      form.workshop_fee != "" &&
      form.online_course_fee != "" &&
      form.online_course_channel != "" &&
      form.overview != ""
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

  const getData = async () => {
    setLoading(true);
    const response = await getRequest(`get-course-category`);

    if (response.message === "success") {
      const result = response.data;
      result.length > 0 && setCourseData(result);
    }
    else {
      toast.error("Something went wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(form);
    const isFilled = validate();

    if (!isFilled) {
      toast.dismiss();
      toast.error("Please Fill All Fields", { style: { width: '250px' } });
      return;
    }
    else {
      setLoading(true);
      try {
        const response = await postRequestFeedback(`create-sub-category-course`, {
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
        modalClass={"lg:w-[800px] w-screen"}
      >
        <div>
          <h2 className="font-extrabold text-lg mb-2">Add Subcourse</h2>
          <p className="mb-2 text-sm text-gray-400">Fill in subcourse info</p>

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
            <div className="block md:grid grid-cols-2 gap-2">
              <div className="my-2">
                <p className="text-gray-600 mb-2 text-sm">Name</p>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  className="border rounded-lg py-2 px-2 w-full text-sm"
                />
              </div>
              <div className="my-2">
                <p className="text-gray-600 mb-2 text-sm">Course Category</p>
                <select name="course_category" value={form.course_category} onChange={handleFormChange} className="border rounded-lg py-2 px-2 w-full">
                <option disabled>Select Category</option>
                  {
                    courseData && courseData.map(i => (
                      <option key={i.id}>{i.name}</option>
                    ))
                  }
                </select>
              </div>
              <div className="my-2">
                <p className="text-gray-600 mb-2 text-sm">First Run Start Date</p>
                <input
                  type="date"
                  name="first_run_start_date"
                  value={form.first_run_start_date}
                  onChange={handleFormChange}
                  className="border rounded-lg py-2 px-2 w-full text-sm"
                />
              </div>
              <div className="my-2">
                <p className="text-gray-600 mb-2 text-sm">First Run End Date</p>
                <input
                  type="date"
                  name="first_run_end_date"
                  value={form.first_run_end_date}
                  onChange={handleFormChange}
                  className="border rounded-lg py-2 px-2 w-full text-sm"
                />
              </div>
              <div className="my-2">
                <p className="text-gray-600 mb-2 text-sm">First Run Location</p>
                <input
                  type="text"
                  name="first_run_location"
                  value={form.first_run_location}
                  onChange={handleFormChange}
                  className="border rounded-lg py-2 px-2 w-full text-sm"
                />
              </div>
              <div className="my-2">
                <p className="text-gray-600 mb-2 text-sm">Second Run Start Date</p>
                <input
                  type="date"
                  name="second_run_start_date"
                  value={form.second_run_start_date}
                  onChange={handleFormChange}
                  className="border rounded-lg py-2 px-2 w-full text-sm"
                />
              </div>
              <div className="my-2">
                <p className="text-gray-600 mb-2 text-sm">Second Run End Date</p>
                <input
                  type="date"
                  name="second_run_end_date"
                  value={form.second_run_end_date}
                  onChange={handleFormChange}
                  className="border rounded-lg py-2 px-2 w-full text-sm"
                />
              </div>
              <div className="my-2">
                <p className="text-gray-600 mb-2 text-sm">Second Run Location</p>
                <input
                  type="text"
                  name="second_run_location"
                  value={form.second_run_location}
                  onChange={handleFormChange}
                  className="border rounded-lg py-2 px-2 w-full text-sm"
                />
              </div>
              <div className="my-2">
                <p className="text-gray-600 mb-2 text-sm">Workshop Fee</p>
                <input
                  type="number"
                  name="workshop_fee"
                  value={form.workshop_fee}
                  onChange={handleFormChange}
                  className="border rounded-lg py-2 px-2 w-full text-sm"
                />
              </div>
              <div className="my-2">
                <p className="text-gray-600 mb-2 text-sm">Online Course Fee</p>
                <input
                  type="number"
                  name="online_course_fee"
                  value={form.online_course_fee}
                  onChange={handleFormChange}
                  className="border rounded-lg py-2 px-2 w-full text-sm"
                />
              </div>
              <div className="my-2 col-span-2">
                <p className="text-gray-600 mb-2 text-sm">Online Course Channel</p>
                <input
                  type="text"
                  name="online_course_channel"
                  value={form.online_course_channel}
                  onChange={handleFormChange}
                  className="border rounded-lg py-2 px-2 w-full text-sm"
                />
              </div>
            </div> 

            <div>
              <p className="text-gray-600 mb-2 text-sm">Overview</p>
              <Editor containerProps={{ style: { height: '1000px' } }} name="overview" value={form.overview} onChange={handleFormChange} />
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

export default AddSubCourseModal;
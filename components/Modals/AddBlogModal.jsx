import React, { useState } from "react";
import SammyModal from "../General/SammyModal";
import toast from 'react-hot-toast';
import { useDataContext } from "../../context/DataContext";
import Loading from "../General/Loading";
import { MdOutlineCameraAlt } from "react-icons/md";

const AddBlogModal = ({ isOpen, onClose }) => {
  const { postRequestFeedback, postExternalRequestFeedback } = useDataContext();
  const [loading, setLoading] = useState(false);

  const initialForm = {
    blog_name: "",
    blog_image: "",
    blog_description: ""
  };
  
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const validate = () => {
    return form.blog_image && form.blog_name && form.blog_description;
  };

  const handleImageUpload = async (e) => {
    let imgObj = e.target.files[0];
    const validMimeTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'];

    if (imgObj.size > 11000000) {
      return toast.error("Maximum file size is 1MB");
    }

    if (!validMimeTypes.includes(imgObj.type)) {
      toast.error('Invalid MIME type. Please upload a valid image file.');
      return;
    }

    const formdata = new FormData();
    formdata.append("file", imgObj);
    formdata.append("upload_preset", "ml_default");
    toast.loading("Uploading image...");
    
    const response = await postExternalRequestFeedback("https://api.cloudinary.com/v1_1/dnj7mymap/image/upload", formdata);
    toast.dismiss();

    if (response) {
      setForm((prevForm) => ({
        ...prevForm,
        blog_image: response.url
      }));
      toast.success("Upload successful");
    } else {
      toast.error("Upload failed");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!validate()) {
      toast.error("Please fill all fields");
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await postRequestFeedback(`create-blog`, form);
      setLoading(false);
  
      if (response.message === 'Blog created successfully') {
        toast.success(response.message);
        setForm(initialForm); 
        onClose();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  
    setLoading(false);
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
          <h2 className="font-extrabold text-lg mb-2">Add Blog</h2>
          <p className="mb-2 text-sm text-gray-400">Fill in blog details</p>
          <div className="pt-4 px-2 max-h-[400px] overflow-y-auto space-y-4">
            <div className="h-[150px] w-full rounded border relative group">
              <img
                src={form?.blog_image ? `${form.blog_image}` : "/placeholder-img.webp"}
                className="h-full w-full object-cover"
                alt=""
              />
              <label
                htmlFor="blog_image"
                className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 cursor-pointer"
              >
                <MdOutlineCameraAlt className="text-2xl mb-2" />
                Add image
              </label>
              <input
                type="file"
                id="blog_image"
                className="hidden"
                name="blog_image"
                onChange={handleImageUpload}
              />
            </div>
            <div>
              <p className="text-gray-600 mb-2 text-sm">Title</p>
              <input
                type="text"
                name="blog_name"
                value={form.blog_name}
                onChange={handleFormChange}
                className="border rounded-lg py-2 px-2 w-full text-sm"
              />
            </div>
            <div>
              <p className="text-gray-600 mb-2 text-sm">Content</p>
              <textarea
                name="blog_description"
                value={form.blog_description}
                onChange={handleFormChange}
                className="border rounded-lg py-2 px-2 w-full text-sm h-32"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="shadow-2xl mt-3 inline-flex items-center gap-2 rounded-lg border border-primary bg-primary px-8 py-3 text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary"
              onClick={handleSubmit}
            >
              <span className="text-sm font-medium">Submit</span>
            </button>
          </div>
        </div>
      </SammyModal>
    </>
  );
};

export default AddBlogModal;

import React, { useState } from "react";
import SammyModal from "../Modals/SammyModal";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../../General/Loading";
import { MdOutlineCameraAlt } from "react-icons/md";

const AddProductModal = ({ isOpen, onClose, data, isUpdate }) => {
  const initialForm = {
    title: "",
    description: "",
    price: "",
    rating: "",
    color: "",
    images: ""
  };

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const validate = () => {
    return form.title && form.price && form.rating;
  };

  const handleImageUpload = async (e) => {
    let imgObj = e.target.files[0];

    if (imgObj.size > 11000000) {
      return toast.error("Maximum file size is 1MB");
    }

    const formData = new FormData();
    formData.append("file", imgObj);
    formData.append("upload_preset", "ml_default");

    toast.loading("Uploading image...");
    try {
      const response = await axios.post("https://api.cloudinary.com/v1_1/dnj7mymap/image/upload", formData);
      setForm((prevForm) => ({
        ...prevForm,
        images: response.data.url
      }));
      toast.success("Upload successful");
    } catch (error) {
      toast.error("Upload failed");
    } finally {
      toast.dismiss();
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validate()) {
      return toast.error("Please fill in all required fields.");
    }
  
    setLoading(true);  
  
    try {
      if (isUpdate) {
        await axios.put(`${import.meta.env.VITE_SERVER_URL}/products/${data.id}`, form);
        toast.success("Product updated successfully!");
      } else {
        await axios.post(`${import.meta.env.VITE_SERVER_URL}/products-store`, form);
        toast.success("Product created successfully!");
      }
  
      setForm(initialForm);
      onClose();  
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
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
          <h2 className="font-extrabold text-lg mb-2">
            {isUpdate ? "Update Product" : "Add Product"}
          </h2>
          <p className="mb-2 text-sm text-gray-400">
            Fill in product information
          </p>

          <div className="pt-4 px-2 max-h-[400px] overflow-y-auto space-y-4">
            <div className="h-[150px] w-full rounded border relative group">
              <img
                src={form?.images ? `${form.images}` : "/placeholder-img.webp"}
                className="h-full w-full object-cover"
                alt=""
              />
              <label
                htmlFor="images"
                className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 group-hover:flex group-hover:flex-col justify-center items-center text-white hidden"
              >
                <MdOutlineCameraAlt />
                Add image
              </label>
              <input
                type="file"
                className="p-2 hidden rounded border border-gray-300 w-full"
                name="images"
                id="images"
                onChange={handleImageUpload}
              />
            </div>

            <div className="my-2">
              <p className="text-gray-600 mb-2 text-sm">Title</p>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleFormChange}
                className="border rounded-lg py-2 px-2 w-full text-sm"
              />
            </div>

            <div className="my-2">
              <p className="text-gray-600 mb-2 text-sm">Description</p>
              <textarea
                name="description"
                value={form.description}
                onChange={handleFormChange}
                className="border rounded-lg py-2 px-2 w-full text-sm"
              />
            </div>

            <div className="my-2">
              <p className="text-gray-600 mb-2 text-sm">Price</p>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleFormChange}
                className="border rounded-lg py-2 px-2 w-full text-sm"
              />
            </div>

            <div className="my-2">
              <p className="text-gray-600 mb-2 text-sm">Rating</p>
              <input
                type="number"
                name="rating"
                value={form.rating}
                onChange={handleFormChange}
                className="border rounded-lg py-2 px-2 w-full text-sm"
              />
            </div>

            <div className="my-2">
              <p className="text-gray-600 mb-2 text-sm">Color</p>
              <input
                type="text"
                name="color"
                value={form.color}
                onChange={handleFormChange}
                className="border rounded-lg py-2 px-2 w-full text-sm"
              />
            </div>
          </div>

          <div className="text-right mt-4">
            <button
              className="bg-primary text-white py-2 px-4 rounded-lg"
              onClick={handleSubmit}
            >
              {isUpdate ? "Update Product" : "Create Product"}
            </button>
          </div>
        </div>
      </SammyModal>
    </>
  );
};

export default AddProductModal;

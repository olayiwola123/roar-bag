import React, { useEffect, useState } from 'react';
import SideMenu from '../components/Dashboard/SideMenu';
import Header from '../components/Dashboard/Header';
import { FaPlusCircle, FaRegFileAlt } from 'react-icons/fa';
import AddProductModal from '../components/Modals/AddProductModal'; 
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";
import no_data from "../assets/hero/hero.jpg";
import EmptyComponent from '../components/EmptyConponent';
import toast from 'react-hot-toast';
import DataTable from 'react-data-table-component';

export default function Products() {

  const [modal, setModal] = useState(false);
  const handleOpenModal = () => setModal(true);
  const handleCloseModal = () => setModal(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/products`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const result = await response.json();
      if (result.length > 0) {
        setData(result);
      } else {
        setData(null);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Product Name",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
  ];

  return (
    <>
      <AddProductModal isOpen={modal} onClose={handleCloseModal} />
      <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
        <div className="flex-shrink-0 lg:sticky lg:top-0 lg:h-screen lg:block">
          <SideMenu />
        </div>

        <div className="flex flex-col gap-10 flex-grow overflow-y-auto">
          <div className="sticky top-0 z-50 bg-white shadow-md">
            <Header tab="Products" />
          </div>

          <div className="px-10 my-2">
            <h3 className="font-semibold text-sm flex items-center gap-2 text-primary mb-4">
              Product Management <FaRegFileAlt />
            </h3>

            <div className='mt-8 mb-5'>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  id="Search"
                  placeholder="Search products..."
                  className="flex-grow rounded-2xl border border-gray-200 py-2.5 px-4 sm:text-sm"
                  style={{ maxWidth: 'calc(100% - 100px)' }}
                />
                <button type="button" className="rounded bg-secondary px-8 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring active:bg-indigo-500">
                  Filter
                </button>
              </div>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <button
                onClick={handleOpenModal}
                className="inline-flex items-center gap-2 rounded border border-primary bg-primary px-8 py-3 text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary"
              >
                <span className="text-sm font-medium"> Add Product </span>
                <FaPlusCircle />
              </button>
            </div>

            <div className="p-3 border rounded-lg">
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <Lottie
                    animationData={loadingAnimation}
                    loop={true}
                    className="w-[200px]"
                  />
                </div>
              ) : (
                <div>
                  {data ? (
                    <DataTable columns={columns} data={data} />
                  ) : (
                    <EmptyComponent description="No Products" image={no_data} />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

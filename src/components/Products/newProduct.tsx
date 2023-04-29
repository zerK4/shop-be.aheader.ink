import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { productVariant } from '@/lib/motionVariants/productVariants';
import globalStore from '@/store/globalStore';
import { checkComplete } from '@/utils/utils';
import axios from 'axios';

function NewProduct() {
  const { newProductActive } = globalStore();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    categories: '',
    // images: [],
    attributes: '',
  });

  const createProduct = async () => {
    globalStore.setState({ loading: true });
    if (!checkComplete(product)) {
      return console.log('complete all');
    }
    try {
      const { data } = await axios({
        method: 'POST',
        url: '/api/products',
        data: product,
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      variants={productVariant}
      animate={newProductActive ? 'visible' : 'hidden'}
      className="absolute right-0 bg-white shadow-md shadow-gray-300 h-fit max-w-[20rem] md:max-w-[40rem] border border-gray-200"
    >
      {newProductActive && (
        <div className="">
          <div className="flex items-center justify-between py-2 pb-3 border-b-2 px-2">
            <h2 className="text-xl text-gray-400 select-none">New Product</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={createProduct}
                className="p-2 text-gray-400 hover:text-gray-600 ease-in-out duration-300"
              >
                Save
              </button>
              <span className="border-r h-4 border-gray-300" />
              <button className="p-2 text-gray-400 hover:text-gray-600 ease-in-out duration-300">
                Discard
              </button>
              <span className="border-r h-4 border-gray-300" />
              <button className="p-2 text-gray-400 hover:text-gray-600 ease-in-out duration-300">
                Draft
              </button>
            </div>
          </div>
          <form className="p-2 flex flex-col gap-4 w-full">
            <div className="flex items-center relative">
              <input
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
                type="text"
                placeholder="Name"
                className="p-2 bg-transparent border-none rounded-sm outline-none w-full"
              />
              <span className="absolute bottom-0 h-4 border-r-2 border-gray-300 right-0" />
              <span className="absolute bottom-0 w-4 border-b-2 border-gray-300 right-0" />
            </div>
            <div className="flex items-center relative">
              <input
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
                type="text"
                placeholder="Price"
                className="p-2 bg-transparent border-none rounded-sm outline-none w-full"
              />
              <span className="absolute bottom-0 h-4 border-r-2 border-gray-300 right-0" />
              <span className="absolute bottom-0 w-4 border-b-2 border-gray-300 right-0" />
            </div>
            <div className="relative flex w-full">
              <span className="absolute top-0 h-4 border-r-2 border-gray-300 left-0" />
              <span className="absolute top-0 w-4 border-b-2 border-gray-300 left-0" />
              <textarea
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
                placeholder="Description"
                className="p-2 bg-transparent h-40 border-none rounded-sm outline-none relative z-10 resize-none w-full"
              />
              <span className="absolute bottom-0 h-4 border-r-2 border-gray-300 right-0" />
              <span className="absolute bottom-0 w-4 border-b-2 border-gray-300 right-0" />
            </div>
            <div className="flex items-center relative">
              <input
                onChange={(e) =>
                  setProduct({ ...product, categories: e.target.value })
                }
                type="text"
                placeholder="Categories, comma separated"
                className="p-2 bg-transparent border-none rounded-sm outline-none w-full"
              />
              <span className="absolute bottom-0 h-4 border-r-2 border-gray-300 right-0" />
              <span className="absolute bottom-0 w-4 border-b-2 border-gray-300 right-0" />
            </div>
            <div className="flex items-center relative">
              <input
                onChange={(e) =>
                  setProduct({ ...product, attributes: e.target.value })
                }
                type="text"
                placeholder="attributes: color=red, size=xl, etc. comma separated"
                className="p-2 bg-transparent border-none rounded-sm outline-none w-full"
              />
              <span className="absolute bottom-0 h-4 border-r-2 border-gray-300 right-0" />
              <span className="absolute bottom-0 w-4 border-b-2 border-gray-300 right-0" />
            </div>

            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 "
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </form>
        </div>
      )}
    </motion.div>
  );
}

export default NewProduct;

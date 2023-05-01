import { TextField } from '@mui/material';
import React, { useState } from 'react';
import DefaultButton from '../Buttons/DefaultButton';
import { motion } from 'framer-motion';
import globalStore from '@/store/globalStore';
import {
  createCategoryPopupVariant,
  createCategoryVariant,
} from '@/lib/motionVariants/productVariants';
import { checkComplete } from '@/utils/utils';
import axios from 'axios';

function CreateCategoryComponent() {
  const { createCategoryActive, loading } = globalStore();
  const [category, setCategory] = useState({
    name: '',
    description: '',
  });

  const createCategory = async () => {
    globalStore.setState({
      loading: true,
    });
    if (!checkComplete(category)) {
      return null;
    }
    try {
      const { data } = await axios({
        method: 'POST',
        url: '/api/category',
        data: category,
      });
      console.log(data);
      globalStore.setState({
        loading: false,
        apiResponse: {
          message: data.message,
          data: data.data,
          status: data.status,
        },
      });
    } catch (err: any) {
      globalStore.setState({
        loading: false,
        apiResponse: {
          message: err.response.data.message,
          data: null,
          status: err.status,
        },
      });
    }
  };

  return (
    <motion.div
      onClick={() => globalStore.setState({ createCategoryActive: false })}
      variants={createCategoryVariant}
      animate={createCategoryActive ? 'visible' : 'hidden'}
      className=" absolute w-screen h-screen backdrop-blur-md flex items-center justify-center z-40"
    >
      <motion.div
        variants={createCategoryPopupVariant}
        animate={createCategoryActive ? 'visible' : 'hidden'}
        onClick={(e) => e.stopPropagation()}
        className="w-full m-4 md:w-1/2 bg-white rounded-md border border-gray-300 shadow-md"
      >
        <div className="flex justify-between p-4 border-b border-gray-300 items-center">
          <h2 className="text-xl font-medium">New category</h2>
          <div>
            <DefaultButton
              title="Save"
              variant={'contained'}
              action={() => createCategory()}
              loading={true}
            />
          </div>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <TextField
            id="outlined-basic"
            label="Category name"
            variant="outlined"
            className="w-full"
            value={category.name}
            onChange={(e) => setCategory({ ...category, name: e.target.value })}
          />
          <TextField
            id="outlined-basic"
            label="Category description"
            variant="outlined"
            className="w-full"
            value={category.description}
            onChange={(e) =>
              setCategory({ ...category, description: e.target.value })
            }
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default CreateCategoryComponent;

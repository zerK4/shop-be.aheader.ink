import React from 'react';
import DefaultButton from '../Buttons/DefaultButton';
import CheckboxCategoryComponent from '../Checkboxes/CheckboxCategoryComponent';
import globalStore from '@/store/globalStore';

const ProductCategoriesContainerComponent = () => {
  return (
    <div className="bg-white border border-gray-300 shadow-md rounded-xl">
      <div className="flex justify-between items-center  p-4 border-b border-gray-300">
        <h2 className="font-medium text-xl">Categories</h2>
        <div className="">
          <DefaultButton
            title="Add category"
            variant={'contained'}
            action={() => {
              globalStore.setState({ createCategoryActive: true });
            }}
          />
        </div>
      </div>
      <CheckboxCategoryComponent />
    </div>
  );
};

export default ProductCategoriesContainerComponent;

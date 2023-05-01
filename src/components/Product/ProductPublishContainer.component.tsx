import React from 'react';
import DefaultButton from '../Buttons/DefaultButton';
import { Switch } from '@mui/material';
import productStore from '@/store/productStore';

export interface PublishInterface {
  publish: any;
}

const ProductPublishContainer: React.FC<PublishInterface> = (props) => {
  const { publish } = props;
  const { product } = productStore();

  const handleCheck = (e: any) => {
    productStore.setState((state) => ({
      product: {
        ...state.product,
        published: e.target.checked,
      },
    }));
  };

  // TODO: fix unhandled event.

  return (
    <div className="bg-white h-fit border border-gray-300 rounded-xl shadow-md w-full">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="font-medium text-xl">Publish</h2>
        <Switch
          checked={product?.published}
          onChange={(e) => handleCheck(e)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
      <div className="p-4 bg-gray-100 border-b border-gray-200 shadow-inner">
        <div className="flex w-1/2 justify-between items-center">
          <h3>Status</h3>
          <p>Draft</p>
        </div>
        <div className="flex w-1/2 justify-between items-center">
          <h3>Visibility</h3>
          <p>Hidden</p>
        </div>
      </div>
      <div className="p-3 w-full flex justify-between gap-4">
        <DefaultButton title="Preview" variant={'outlined'} action={() => {}} />
        <DefaultButton
          title="Save draft"
          variant={'outlined'}
          action={() => {}}
        />
        <DefaultButton
          title="Publish"
          variant={'contained'}
          action={() => publish()}
        />
      </div>
    </div>
  );
};

export default ProductPublishContainer;

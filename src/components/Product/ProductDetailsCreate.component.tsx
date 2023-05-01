import { TextField } from '@mui/material';
import React from 'react';
import Textarea from '@mui/joy/Textarea';
import productStore from '@/store/productStore';

export interface FieldComponentInterface {
  active?: boolean;
  placeholder?: string;
  value?: any;
  setter?: any;
}

export interface ProductDetailsInterface {
  active?: boolean;
  placeholder?: string;
  value?: any;
  setter?: any;
}

const ProductDetailsComponent: React.FC<ProductDetailsInterface> = (props) => {
  const { product } = productStore();
  const { active = false, placeholder = '' } = props;
  return (
    <div className="bg-white shadow-md border border-gray-300 p-4 rounded-xl w-full flex flex-col gap-2">
      <TextField
        value={product?.name}
        onChange={(e) =>
          productStore.setState((state) => ({
            product: {
              ...state.product,
              name: e.target.value,
            },
          }))
        }
        id="filled-basic"
        label={placeholder}
        className="w-full"
      />
      <Textarea
        className="rounded-md border"
        placeholder="Type in here…"
        value={product?.description}
        onChange={(e) =>
          productStore.setState((state) => ({
            product: {
              ...state.product,
              description: e.target.value,
            },
          }))
        }
        minRows={2}
        maxRows={4}
        sx={{ minWidth: 300 }}
      />
    </div>
  );
};

export const renderProductDetailsCreateComponent: React.FC<
  ProductDetailsInterface
> = (props) => {
  const { active = false, placeholder = '' } = props;

  return <ProductDetailsComponent active={active} placeholder={placeholder} />;
};

export default ProductDetailsComponent;

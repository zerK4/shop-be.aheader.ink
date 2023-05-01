import React from 'react';
import DefaultButton from '../Buttons/DefaultButton';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import _ from 'lodash';
import productStore from '@/store/productStore';

export interface ProductAdditionalInformationInterface {
  variant?: any;
  title?: string;
  setter?: any;
  value?: any;
}

const ProductAdditionalInformationComponent: React.FC<
  ProductAdditionalInformationInterface
> = (props) => {
  const { product } = productStore();
  const { variant = '', title = '', setter = null, value = null } = props;

  const taxStatus = [
    {
      value: 'NO-TAX',
      label: 'No tax applied',
    },
    {
      value: 'NORMAL',
      label: 'Normal tax applied',
    },
  ];

  return (
    <div className="border border-gray-300 bg-white rounded-xl shadow-md">
      <h2 className="p-4 font-medium">Additional informations</h2>
      <div className="p-4 bg-gray-200 border-y border-gray-300 flex gap-2 shadow-inner">
        <DefaultButton variant={variant} title="General" action={() => {}} />
        <DefaultButton variant={variant} title="Inventory" action={() => {}} />
        <DefaultButton variant={variant} title="Shipping" action={() => {}} />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex gap-4">
          <TextField
            id="filled-basic"
            label="Regular price"
            className="w-full"
            value={product?.price}
            onChange={(e) =>
              productStore.setState((state) => ({
                product: {
                  ...state.product,
                  price: e.target.value,
                },
              }))
            }
          />
          <TextField
            value={product?.salePrice}
            onChange={(e) =>
              productStore.setState((state) => ({
                product: {
                  ...state.product,
                  salePrice: e.target.value,
                },
              }))
            }
            id="filled-basic"
            label="Sale price"
            className="w-full"
          />
        </div>
        <div className="flex gap-4">
          <TextField
            id="outlined-select-currency"
            select
            label="Tax status"
            defaultValue="NO-TAX"
            className="w-full"
            onChange={(e) =>
              productStore.setState((state) => ({
                product: {
                  ...state.product,
                  tax: e.target.value,
                },
              }))
            }
          >
            {_.map(taxStatus, (option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="filled-basic"
            label="Tax percentage"
            className="w-full"
            value={product?.taxPercent}
            onChange={(e) =>
              productStore.setState((state) => ({
                product: {
                  ...state.product,
                  taxPercent: e.target.value,
                },
              }))
            }
            disabled={product?.tax === 'NO-TAX' ? true : false}
          />
        </div>
      </div>
    </div>
  );
};

export const renderProductAdditionalInformation: React.FC<
  ProductAdditionalInformationInterface
> = (props) => {
  const { variant = '', title = '', setter = null, value = null } = props;
  return (
    <ProductAdditionalInformationComponent
      variant={variant}
      title={title}
      setter={setter}
      value={value}
    />
  );
};

export default ProductAdditionalInformationComponent;

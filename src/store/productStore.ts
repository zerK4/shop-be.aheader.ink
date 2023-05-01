import { Product } from '@/types/default';
import axios from 'axios';
import { create } from 'zustand';
import globalStore from './globalStore';

export interface ProductStoreInterface {
  product?: Product;
  createProduct?:  () => Promise<void>
}

export const productStore = create<ProductStoreInterface>((set) => ({
  product: {
    name: '',
    metaTitle: '',
    metaDescription: '',
    description: '',
    price: '',
    salePrice: '',
    tax: '',
    taxPercent: '',
    published: false,
    visible: false
  },
  createProduct: async () => {
    globalStore.setState({ loading: true })
    try {
        const {data} = await axios({
            method: 'POST',
            url: "/api/products",
            data: productStore.getState().product
        })
        console.log(data);
        
        globalStore.setState({
            loading: false,
            apiResponse: {
                data: data.data,
                message:data.message,
                status: data.status
            }
        })
    } catch (err: any) {
        process.env.NODE_ENV !== 'production' ? console.error(err) : null
        globalStore.setState({
            loading: false,
            apiResponse: {
                data: err,
                message: err.response.data.message,
                status: err.status
            }
        })
    }
  }
}));

export default productStore;

import { renderPageHeader } from '@/components/PageHeader/PageHeader.component';
import TableComponent from '@/components/Table/Table.component';
import MainLayout from '@/layout/main.layout';
import globalStore from '@/store/globalStore';
import { CoreConfigData } from '@/types/default';
import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

function Products({ data }: CoreConfigData) {
  const { newProductActive } = globalStore();
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const { data } = await axios({
      method: 'GET',
      url: `/api/products`,
    });
    console.log(data, 'asdubatyu');
    setProducts(data.data);
  };

  useEffect(() => {
    globalStore.setState({ currentPage: data });
    getData();
  }, [data]);
  return (
    <div>
      {renderPageHeader({
        pageTitle: 'Products',
        defaultButton: {
          action: () =>
            globalStore.setState({ newProductActive: !newProductActive }),
          title: 'Add product',
          active: true,
          icon: <AiOutlinePlus />,
        },
      })}
      <div>
        <TableComponent products={products} />
      </div>
    </div>
  );
}

Products.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Products;

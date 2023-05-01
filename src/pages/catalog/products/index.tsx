import { renderPageHeader } from '@/components/PageHeader/PageHeader.component';
import TableComponent from '@/components/Table/Table.component';
import MainLayout from '@/layout/main.layout';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

function Products({ data }: any) {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <div className="flex flex-col gap-2">
      {renderPageHeader({
        pageTitle: 'Products',
        defaultButton: {
          action: () => router.push('/catalog/products/create'),
          title: 'Add product',
          active: true,
          icon: <AiOutlinePlus />,
        },
      })}
      <div className="bg-white rounded-md border border-gray-300 shadow-md">
        <TableComponent products={products} />
      </div>
    </div>
  );
}

Products.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async () => {
  const { data } = await axios({
    method: 'GET',
    url: `${process.env.BASE_URL}/api/products`,
  });

  return {
    props: {
      data: data.data,
    },
  };
};

export default Products;

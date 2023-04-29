import { renderPageHeader } from '@/components/PageHeader/PageHeader.component';
import MainLayout from '@/layout/main.layout';
import globalStore from '@/store/globalStore';
import { CoreConfigData } from '@/types/default';
import axios from 'axios';
import React, { ReactElement, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

function Products({ data }: CoreConfigData) {
  const { newProductActive } = globalStore();

  const getData = async () => {
    const { data } = await axios({
      method: 'GET',
      url: `/api/products`,
    });
    console.log(data, 'asdubatyu');
  };

  useEffect(() => {
    globalStore.setState({ currentPage: data });
    getData();
  }, [data]);
  return (
    <div>
      {renderPageHeader({
        defaultButton: {
          action: () =>
            globalStore.setState({ newProductActive: !newProductActive }),
          title: 'Add product',
          active: true,
          icon: <AiOutlinePlus />,
        },
      })}
    </div>
  );
}

Products.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async ({ req, query, resolvedUrl }: any) => {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers['x-forwarded-host'] || req.headers['host'];

  const { data } = await axios({
    method: 'GET',
    url: `${process.env.BASE_URL}/api/coreConfig?url=${resolvedUrl}&protocol=${protocol}&host=${host}`,
  });

  return {
    props: {
      data: data.data,
    },
  };
};

export default Products;

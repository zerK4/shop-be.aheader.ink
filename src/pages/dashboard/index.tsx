import { renderPageHeader } from '@/components/PageHeader/PageHeader.component';
import MainLayout from '@/layout/main.layout';
import globalStore from '@/store/globalStore';
import { CoreConfigData } from '@/types/default';
import axios from 'axios';
import React, { ReactElement, useEffect } from 'react';

function Dashobard({ data }: CoreConfigData) {
  useEffect(() => {
    globalStore.setState({ currentPage: data });
  }, [data]);

  return (
    <div>
      {renderPageHeader({
        hasTimePeriod: false,
        exportButton: {
          active: false,
        },
      })}
    </div>
  );
}

Dashobard.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async ({ req, query, resolvedUrl }: any) => {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers['x-forwarded-host'] || req.headers['host'];

  const { data } = await axios({
    method: 'GET',
    url: `http://localhost:3000/api/coreConfig?url=${resolvedUrl}&protocol=${protocol}&host=${host}`,
  });

  return {
    props: {
      data: data.data,
    },
  };
};

export default Dashobard;
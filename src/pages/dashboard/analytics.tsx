import { ReactElement, useEffect } from 'react';
import MainLayout from '@/layout/main.layout';
import axios from 'axios';
import globalStore from '@/store/globalStore';
import { CoreConfigData } from '@/types/default';
import { renderPageHeader } from '@/components/PageHeader/PageHeader.component';

const Analytics = ({ data }: CoreConfigData) => {
  console.log(data);
  const { currentPage } = globalStore();

  useEffect(() => {
    globalStore.setState({ currentPage: data });
  }, [data]);

  return (
    <div>
      {renderPageHeader({
        exportButton: {
          active: true,
          action: () => {},
          title: 'Export as CSV',
        },
        hasTimePeriod: true,
      })}
    </div>
  );
};

Analytics.getLayout = function getLayout(page: ReactElement) {
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

export default Analytics;

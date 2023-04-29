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
        pageTitle: 'Analytics',
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

export default Analytics;

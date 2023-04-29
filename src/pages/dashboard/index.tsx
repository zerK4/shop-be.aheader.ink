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
        pageTitle: 'Dashboard',
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

export default Dashobard;

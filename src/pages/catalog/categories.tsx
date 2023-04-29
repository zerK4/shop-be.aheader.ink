import { renderPageHeader } from '@/components/PageHeader/PageHeader.component';
import MainLayout from '@/layout/main.layout';
import globalStore from '@/store/globalStore';
import { CoreConfigData } from '@/types/default';
import axios from 'axios';
import React, { ReactElement, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

function Categories({ data }: CoreConfigData) {
  useEffect(() => {
    globalStore.setState({ currentPage: data });
  }, [data]);
  return (
    <div>
      {renderPageHeader({
        pageTitle: 'Categories',
        defaultButton: {
          action: () => {},
          title: 'Add category',
          active: true,
          icon: <AiOutlinePlus />,
        },
      })}
    </div>
  );
}

Categories.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Categories;

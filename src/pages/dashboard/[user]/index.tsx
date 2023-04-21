import MainLayout from '@/layout/main.layout';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React, { ReactElement } from 'react';

function Dashboard() {
  return <div>Dashboard</div>;
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps(ctx) {
    const { query } = ctx;

    return {
      props: {
        query: query.user,
      },
    };
  },
});

export default Dashboard;

import MainLayout from '@/layout/main.layout';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React, { ReactElement } from 'react';

function Tickets() {
  return <div>Tickets</div>;
}

Tickets.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps(ctx) {
    return {
      props: {
        query: '',
      },
    };
  },
});

export default Tickets;

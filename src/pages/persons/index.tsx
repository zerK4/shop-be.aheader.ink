import MainLayout from '@/layout/main.layout';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React, { ReactElement } from 'react';

function Persons() {
  return <div>Persons</div>;
}

Persons.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export const getServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps() {
    return {
      props: {
        query: '',
      },
    };
  },
});

export default Persons;

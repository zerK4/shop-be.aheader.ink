import MainLayout from '@/layout/main.layout';
import { useUser } from '@auth0/nextjs-auth0/client';
import React, { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

function Profile({ query }: any) {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user?.sid !== query) {
      router.push('/');
    }
  }, [user, query]);

  return <div>{user?.name}</div>;
}

Profile.getLayout = function getLayout(page: ReactElement) {
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

export default Profile;

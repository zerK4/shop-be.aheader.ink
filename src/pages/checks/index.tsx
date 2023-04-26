import globalStore from '@/store/globalStore';
import { getSession } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function Checks({ session, hasEmail }: any) {
  console.log(session, ';asdad');
  const { addToLocalStorage, removeFromLocalStorage } = globalStore();
  const router = useRouter();

  useEffect(() => {
    !hasEmail
      ? addToLocalStorage('noEmail', true)
      : removeFromLocalStorage('noEmail');

    router.push('/').then(r => console.log('Hit'));
  }, [session, hasEmail]);

  return (
    <div className="bg-black min-h-screen min-w-screen flex items-center justify-center">
      <div className="checkLoader" />
    </div>
  );
}

export const getServerSideProps = async (ctx: any) => {
  const session = await getSession(ctx.req, ctx.res);
  console.log(session?.user, 'asdada');

  return {
    props: {
      session: session?.user,
      hasEmail: session?.user.email,
    },
  };
};

export default Checks;

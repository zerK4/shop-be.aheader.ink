import MainLayout from '@/layout/main.layout';
import { ReactElement } from 'react';

const Home = () => {
  return <div className={''}>asdasdsad </div>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;

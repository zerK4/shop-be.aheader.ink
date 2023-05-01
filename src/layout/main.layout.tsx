import CreateCategoryComponent from '@/components/Category/CreateCategoryComponent';
import Header from '@/components/Header';
import SidebarLeft from '@/components/SidebarLeft';
import globalStore from '@/store/globalStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainLayout({ children }: any) {
  const disableAll = () => {
    globalStore.setState({
      subSidebarLeftActive: false,
      timePeriodOpen: false,
      projectsDropDownActive: false,
      sidebarLeftActive: false,
    });
  };

  return (
    <div onClick={disableAll} className="relative">
      <div className="flex">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <SidebarLeft />
        <div className={'p-2 w-full flex flex-col gap-2 bg-gray-200'}>
          <Header />
          <main className="w-full">{children}</main>
        </div>
        <CreateCategoryComponent />
      </div>
    </div>
  );
}

export default MainLayout;

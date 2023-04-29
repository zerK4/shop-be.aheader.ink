import Header from '@/components/Header';
import NewProduct from '@/components/Products/newProduct';
import SidebarLeft from '@/components/SidebarLeft';
import globalStore from '@/store/globalStore';

function MainLayout({ children }: any) {
  const disableAll = () => {
    globalStore.setState({
      subSidebarLeftActive: false,
      timePeriodOpen: false,
      projectsDropDownActive: false,
      sidebarLeftActive: false,
      newProductActive: false,
    });
  };

  return (
    <div onClick={disableAll} className="relative">
      <div className="flex gap-2">
        <SidebarLeft />
        <div className={'p-2 w-full'}>
          <Header />
          <main className="w-full">{children}</main>
          <NewProduct />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;

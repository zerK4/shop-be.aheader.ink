import Notify from '@/components/Notifyme/Notifyme';
import SidebarLeft from '@/components/Sidebar/SidebarLeft.component';
import UserHeader from '@/components/UserHeaderComponent/UserHeader.component';
import globalStore from '@/store/globalStore';
import { useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';
import { stringify } from 'querystring';
import { useEffect } from 'react';

function MainLayout({ children }: any) {
  const { user } = useUser();

  useEffect(() => {
    const checkUser = async (sid: any) => {
      const { data } = await axios({
        method: 'POST',
        url: '/api/users/checkUsers',
        data: {
          user: sid,
        },
      });
      console.log(user, 'asdassasasa');
      globalStore.setState({
        apiResponse: {
          message: data.message,
          status: stringify(data.status),
        },
      });
    };
    if (user) {
      checkUser(user?.sub);
    }
  }, [user]);

  const closeAll = () => {
    globalStore.setState({ userPopup: false });
  };

  return (
    <div onClick={() => closeAll()} className="relative overflow-hidden">
      <UserHeader />
      <Notify
        title="Email missing!"
        level="warn"
        message="Just complete that email!"
        shouldInput={true}
      />
      <div className="flex gap-2">
        <SidebarLeft />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;

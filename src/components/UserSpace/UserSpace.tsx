import NotificationComponent from '@/components/UserSpace/Notification.component';
import UserComponent from '@/components/UserSpace/User.component';
import ProjectsComponent from '@/components/UserSpace/Projects.component';

const UserSpace = () => {
  return (
    <div className={'flex gap-2 items-center'}>
      <ProjectsComponent />
      <span className={'h-6 border-r bg-gray-200'} />
      <NotificationComponent />
      <UserComponent />
    </div>
  );
};

export default UserSpace;

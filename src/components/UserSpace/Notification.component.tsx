import { AiOutlineBell } from 'react-icons/ai';
import { useUser } from '@auth0/nextjs-auth0/client';

const NotificationComponent = () => {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <div>
      <button
        className={
          'h-10 w-10 flex items-center justify-center rounded-full text-2xl relative hover:bg-gray-100 ease-in-out duration-300'
        }
      >
        <span
          className={'absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500'}
        />
        <AiOutlineBell />
      </button>
    </div>
  );
};

export default NotificationComponent;

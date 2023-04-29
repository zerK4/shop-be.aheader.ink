import { useUser } from '@auth0/nextjs-auth0/client';
import {getInitials} from "@/utils/utils";

const UserComponent = () => {
  const { user, isLoading } = useUser();
  const userName = user?.name as string;

  const initials = getInitials(userName);

  if (!user) {
    return null;
  }

  return (
    <div>
      <button
        className={
          'h-10 w-10 rounded-full text-xl hover:bg-gray-100 ease-in-out duration-300 relative'
        }
      >
        <span>{initials}</span>
        <span
          className={'w-2 h-2 bg-red-500 rounded-full absolute top-0 right-0'}
        />
      </button>
    </div>
  );
};

export default UserComponent;

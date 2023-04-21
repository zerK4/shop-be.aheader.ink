import globalStore from '@/store/globalStore';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import UserPopupComponent from '../UserPopup/UserPopup.component';

export const userHeaderVariant = {
  hidden: {
    opacity: 1,
    height: '3rem',
    width: '3rem',
    borderRadius: '50px',
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  visible: {
    opacity: 1,
    borderRadius: '10px',
    height: '21rem',
    width: '15rem',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      delay: 0.1,
    },
  },
};

function UserHeader() {
  const { user } = useUser();
  const { userPopup } = globalStore();

  console.log(user);

  if (user) {
    return (
      <div className="flex items-center gap-2 relative h-full right-2">
        <motion.div
          onClick={(e) => {
            e.stopPropagation(),
              globalStore.setState({ userPopup: !userPopup });
          }}
          variants={userHeaderVariant}
          initial="hidden"
          animate={userPopup ? 'visible' : 'hidden'}
          className={`flex rounded-full absolute right-0 sm:top-2 -bottom-[99vh] flex-col gap-2 overflow-hidden ${
            userPopup
              ? 'bg-[#F8F8FF] border border-gray-300 shadow-md'
              : 'cursor-pointer'
          }`}
        >
          <div
            className={`w-full h-fit justify-between flex items-center ${
              userPopup ? 'shadow-md p-2' : ''
            }`}
          >
            <div
              className={`h-[3rem] min-w-[3rem] flex items-center justify-center relative`}
            >
              <Image
                src={user.picture as string}
                alt={user.name as string}
                fill
                sizes="(max-width: 40px) 40px, (max-height: 40px) 40px"
                className="rounded-full border border-gray-700"
              />
            </div>
            <motion.span
              animate={
                userPopup ? { opacity: 1, x: 0 } : { opacity: 0, x: 400 }
              }
              transition={{
                duration: 2,
                type: 'spring',
                stiffness: 100,
              }}
              className={`font-bold text-neutral-700`}
            >
              {user.name}
            </motion.span>
          </div>
          {userPopup && <UserPopupComponent />}
          {userPopup && (
            <span className="text-gray-400 w-full flex items-center justify-center h-10 overflow-hidden shadow-inner">
              zVents
            </span>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <Link href="/api/auth/login">
      <button>Login</button>
    </Link>
  );
}

export default UserHeader;

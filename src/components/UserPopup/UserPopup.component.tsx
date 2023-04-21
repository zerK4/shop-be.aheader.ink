import { useUser } from '@auth0/nextjs-auth0/client';
import { motion } from 'framer-motion';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { FiLogOut } from 'react-icons/fi';

export const userMenuVariants = {
  visible: (i: any) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
  hidden: { opacity: 0, x: 50 },
};

const userMenu = [
  {
    name: 'My profile',
    href: (id: string) => {
      return `/dashboard/${id}/profile` as Url;
    },
  },
  {
    name: 'My events',
    href: '#',
  },
  {
    name: 'My reservations',
    href: '#',
  },
  {
    name: 'Settings',
    href: '#',
  },
  {
    name: 'Logout',
    href: '/api/auth/logout',
  },
];

function UserPopupComponent() {
  const { user } = useUser();

  const hrefValue = (item: any) =>
    typeof item.href === 'function' ? item.href(user?.sid) : item.href;

  return (
    <div className="flex flex-col items-start gap-2">
      {userMenu.map((item, i) => (
        <Link href={hrefValue(item)} key={i} className="w-full">
          <motion.button
            custom={i}
            initial="hidden"
            animate="visible"
            variants={userMenuVariants}
            className="p-2 hover:bg-gray-300 w-full flex justify-between items-center text-neutral-600"
            key={i}
          >
            {item.name}
            {item.name === 'Logout' && <FiLogOut className="text-xl" />}
          </motion.button>
        </Link>
      ))}
    </div>
  );
}

export default UserPopupComponent;

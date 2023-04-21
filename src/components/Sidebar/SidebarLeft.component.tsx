import globalStore from '@/store/globalStore';
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import {
  BsFillCalendarEventFill,
  BsFillTicketPerforatedFill,
} from 'react-icons/bs';
import { RiDashboardFill } from 'react-icons/ri';
import { HiUserGroup } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Url } from 'next/dist/shared/lib/router/router';

export const navLinks = [
  {
    name: 'Home',
    icon: <AiFillHome />,
    link: '/',
    logged: false,
  },
  {
    name: 'Dashboard',
    icon: <RiDashboardFill />,
    link: (id: string) => {
      return `/dashboard/${id}` as Url;
    },
    logged: false,
  },
  {
    name: 'Events',
    icon: <BsFillCalendarEventFill />,
    link: '/events',
    logged: false,
  },
  {
    name: 'Tickets',
    icon: <BsFillTicketPerforatedFill />,
    link: '/tickets',
    logged: true,
  },
  {
    name: 'Persons',
    icon: <HiUserGroup />,
    link: '/persons',
    logged: true,
  },
];

export const activeLinkVariant = {
  hidden: {
    opacity: 0,
    x: 10,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      delay: 0.1,
    },
  },
};

export const activeSidebarVariant = {
  hidden: {
    width: '2rem',
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  visible: {
    width: '15rem',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      delay: 0.1,
    },
  },
};

export const activeSidebarLinkVariant = {
  visible: (i: any) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
  hidden: { opacity: 0, x: -50 },
};

function SidebarLeft() {
  const { activeNavLink, sidebarActive } = globalStore();
  const { user } = useUser();

  const hrefValue = (item: any) =>
    typeof item.link === 'function' ? item.link(user?.sid) : item.link;

  return (
    <motion.div
      variants={activeSidebarVariant}
      animate={sidebarActive ? 'visible' : 'hidden'}
      className={`${
        sidebarActive ? 'absolute md:relative' : 'relative'
      } w-[15rem] bg-[#F8F8FF] h-screen shadow-md shadow-neutral-400`}
    >
      <div className="ow-full flex items-center justify-center h-[5rem] text-xl font-bold shadow-md bg-gray-200">
        {sidebarActive ? 'zVents' : 'Z'}
      </div>
      <div>
        {navLinks.map((link, i) => (
          <Link href={hrefValue(link)} key={i}>
            <button
              onClick={() => globalStore.setState({ activeNavLink: link.name })}
              className={`${sidebarActive ? 'px-10' : 'px-2'} ${
                link.logged && !user ? 'opacity-20 cursor-not-allowed' : ''
              } flex items-center gap-4 py-4 hover:bg-gray-200 ease-in-out duration-300 w-full relative ${
                activeNavLink === link.name ? 'bg-gray-200 shadow-inner' : ''
              }`}
            >
              <span>{link.icon}</span>
              <motion.span
                custom={i}
                variants={activeSidebarLinkVariant}
                animate={sidebarActive ? 'visible' : 'hidden'}
              >
                {link.name}
              </motion.span>
              <motion.span
                variants={activeLinkVariant}
                animate={activeNavLink === link.name ? 'visible' : 'hidden'}
                className={`w-1 h-4 bg-fuchsia-500 absolute ${
                  sidebarActive ? 'right-4' : 'right-0'
                } rounded-md shadow-inner`}
              />
            </button>
          </Link>
        ))}
      </div>
      <button
        onClick={() => globalStore.setState({ sidebarActive: !sidebarActive })}
        className={`${
          sidebarActive ? '' : 'rotate-180'
        } ease-in-out duration-300 absolute -right-4 bottom-12 border p-2 rounded-full bg-black`}
      >
        <AiOutlineArrowLeft className="text-white" />
      </button>
      {sidebarActive && (
        <div className="absolute bottom-0 w-full h-10 flex items-center justify-center shadow-inner text-gray-600 select-none">
          &copy; aheader.ink
        </div>
      )}
    </motion.div>
  );
}

export default SidebarLeft;

import { AiFillHome } from 'react-icons/ai';
import {
  BsFillCalendarEventFill,
  BsFillTicketPerforatedFill,
} from 'react-icons/bs';
import { RiDashboardFill } from 'react-icons/ri';
import { HiUserGroup } from 'react-icons/hi';
import { Url } from 'next/dist/shared/lib/router/router';

export const navLinks = [
  {
    name: 'Home',
    icon: <AiFillHome />,
    link: '/',
    logged: false,
    sidebarLeft: false,
  },
  {
    name: 'Dashboard',
    icon: <RiDashboardFill />,
    link: (id: string) => {
      return `/dashboard/${id}` as Url;
    },
    logged: false,
    sidebarLeft: true,
  },
  {
    name: 'Events',
    icon: <BsFillCalendarEventFill />,
    link: '/events',
    logged: false,
    sidebarLeft: false,
  },
  {
    name: 'Tickets',
    icon: <BsFillTicketPerforatedFill />,
    link: '/tickets',
    logged: true,
    sidebarLeft: false,
  },
  {
    name: 'Persons',
    icon: <HiUserGroup />,
    link: '/persons',
    logged: true,
    sidebarLeft: false,
  },
];

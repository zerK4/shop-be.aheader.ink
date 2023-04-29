import { AiFillHome } from 'react-icons/ai';
import {
  BsFillCalendarEventFill,
  BsFillTicketPerforatedFill,
} from 'react-icons/bs';
import { RiDashboardFill } from 'react-icons/ri';
import { HiUserGroup } from 'react-icons/hi';
import { Url } from 'next/dist/shared/lib/router/router';

export const projectList = [
  {
    name: 'Monin',
    icon: <AiFillHome />,
    link: '/',
    logged: false,
    sidebarLeft: false,
  },
  {
    name: 'Stenders',
    icon: <RiDashboardFill />,
    link: (id: string) => {
      return `/dashboard/${id}` as Url;
    },
    logged: false,
    sidebarLeft: true,
  },
  {
    name: 'Klaviyo',
    icon: <BsFillCalendarEventFill />,
    link: '/events',
    logged: false,
    sidebarLeft: false,
  },
  {
    name: 'xRewards',
    icon: <BsFillTicketPerforatedFill />,
    link: '/tickets',
    logged: true,
    sidebarLeft: false,
  },
  {
    name: 'NCP',
    icon: <HiUserGroup />,
    link: '/persons',
    logged: true,
    sidebarLeft: false,
  },
];

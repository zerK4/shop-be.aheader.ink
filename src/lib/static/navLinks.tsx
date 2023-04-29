import { GrCatalogOption, GrProductHunt } from 'react-icons/gr';
import { RiDashboardFill } from 'react-icons/ri';
import { GiPayMoney } from 'react-icons/gi';
import { IoIosAnalytics, IoIosPeople } from 'react-icons/io';
import { BiCategoryAlt } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';

export const navLinks = [
  {
    name: 'Dashboard',
    icon: <RiDashboardFill />,
    link: '/dashboard',
    subSidebar: false,
  },
  {
    name: 'Analytics',
    icon: <IoIosAnalytics />,
    link: '/dashboard/analytics',
    subSidebar: false,
  },
  {
    name: 'Catalog',
    icon: <GrCatalogOption />,
    link: '#',
    subSidebar: true,
    subLinks: [
      {
        name: 'Products',
        icon: <GrProductHunt />,
        link: '/catalog/products',
      },
      {
        name: 'Categories',
        icon: <BiCategoryAlt />,
        link: '/catalog/categories',
      },
    ],
  },
  {
    name: 'Sales',
    icon: <GiPayMoney />,
    link: '/orders',
    subSidebar: false,
  },
  {
    name: 'Customers',
    icon: <IoIosPeople />,
    link: '/customers',
    subSidebar: false,
  },
  {
    name: 'System',
    icon: <BsGear />,
    link: '#',
    subSidebar: true,
    subLinks: [
      {
        name: 'Store',
        icon: <GrProductHunt />,
        link: '#',
      },
      {
        name: 'Preferences',
        icon: <BiCategoryAlt />,
        link: '#',
      },
      {
        name: 'Pages',
        icon: <BiCategoryAlt />,
        link: '#',
      },
    ],
  },
];

import { motion } from 'framer-motion';
import {
  navLinkVariant,
  sidebarLeftVariant,
} from '@/lib/motionVariants/navigationVariants';
import globalStore from '@/store/globalStore';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { navLinks } from '@/lib/static/navLinks';
import Link from 'next/link';
import SubSidebar from './SubSidebar';

const SidebarLeft = () => {
  const { sidebarLeftActive, subSidebarLeftActive } = globalStore();

  return (
    <motion.div
      variants={sidebarLeftVariant}
      animate={sidebarLeftActive ? 'visible' : 'hidden'}
      className={'p-2 w-20 border-r-2 h-screen relative'}
    >
      <button
        onClick={(e) => {
          e.stopPropagation(),
            globalStore.setState({ sidebarLeftActive: !sidebarLeftActive });
        }}
        className={
          'p-2 z-40 rounded-full border-2 absolute bottom-9 -right-[18px] bg-white border-blue-200 hover:border-blue-400 ease-in-out duration-300'
        }
      >
        <AiOutlineArrowLeft
          className={`${
            sidebarLeftActive ? '' : 'rotate-180'
          } ease-in-out duration-300`}
        />
      </button>
      <div
        className={'flex h-16 items-center justify-center text-lg font-bold'}
      >
        {sidebarLeftActive ? 'aHeader' : 'aH'}
      </div>
      <div className={' border-t-2 pt-4'}>
        <SubSidebar />
        <ul className={'flex flex-col gap-2'}>
          {navLinks.map((link, i) => (
            <Link
              href={link.link as string}
              key={i}
              legacyBehavior
              className="cursor-pointer"
            >
              <li
                onClick={(e) => {
                  e.stopPropagation(),
                    globalStore.setState({
                      subSidebarLeftActive: link.subSidebar
                        ? !subSidebarLeftActive
                        : false,
                      currentNavLinkData: link,
                    });
                }}
                className={`p-2 flex items-center ${
                  sidebarLeftActive ? 'gap-2' : 'justify-center'
                } hover:bg-slate-100 p-2 ease-in-out duration-300 rounded-sm py-4 cursor-pointer`}
              >
                <button className={'text-xl'}>{link.icon}</button>
                <motion.span
                  variants={navLinkVariant}
                  animate={sidebarLeftActive ? 'visible' : 'hidden'}
                >
                  {sidebarLeftActive && link.name}
                </motion.span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {sidebarLeftActive && (
        <div
          className={
            'absolute left-0 bottom-0 w-full flex justify-center items-center p-4 border-t-2'
          }
        >
          <span className={''}>&copy; aHeader</span>
        </div>
      )}
    </motion.div>
  );
};

export default SidebarLeft;

import React from 'react';
import { motion } from 'framer-motion';
import { subSidebarLeftVariant } from '@/lib/motionVariants/navigationVariants';
import globalStore from '@/store/globalStore';
import Link from 'next/link';

function SubSidebar() {
  const {
    subSidebarLeftActive,
    currentNavLinkData: { name, icon, subLinks },
  } = globalStore();

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      variants={subSidebarLeftVariant}
      animate={subSidebarLeftActive ? 'visible' : 'hidden'}
      className="bg-white shadow-md shadow-gray-500 rounded-sm absolute overflow-hidden py-2 pb-4 border border-gray-200 z-20"
    >
      <div className="flex justify-between items-center p-2 pr-4 border-b-2 pb-4 mb-2">
        <h2 className="text-xl">{name}</h2>
        <span className="text-xl">{icon}</span>
      </div>
      <ul>
        {subLinks?.map((link, i) => (
          <Link key={i} href={link.link as string} legacyBehavior>
            <li
              onClick={() =>
                globalStore.setState({ subSidebarLeftActive: false })
              }
              className="p-2 hover:bg-gray-100 ease-in-out duration-300 cursor-pointer"
            >
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
    </motion.div>
  );
}

export default SubSidebar;

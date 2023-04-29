import { projectLinkContainer } from '@/lib/motionVariants/headerVariants';
import globalStore from '@/store/globalStore';
import React from 'react';
import { motion } from 'framer-motion';
import { timePeriod } from '@/lib/static/timePeriods';
import { IoIosArrowDown } from 'react-icons/io';

function TimePeriod() {
  const { currentPage, timePeriodOpen, selectedTimePeriod } = globalStore();

  return (
    <div className="flex items-center">
      <p className="p-2 text-gray-400 select-none md:flex hidden">
        Time period
      </p>
      <span className="border-l h-4 border-gray-300 mx-2 md:flex hidden" />
      <div className="md:w-20">
        <button
          onClick={() =>
            globalStore.setState({ timePeriodOpen: !timePeriodOpen })
          }
          className="flex items-center p-2 gap-2"
        >
          <span>{selectedTimePeriod}</span> <IoIosArrowDown />
        </button>
        <motion.ul
          variants={projectLinkContainer}
          animate={timePeriodOpen ? 'visible' : 'hidden'}
          className="absolute shadow-md p-2 flex gap-2 flex-col"
        >
          {timePeriod.map((time, i) => (
            <li
              onClick={() =>
                globalStore.setState({
                  selectedTimePeriod: time.name,
                  timePeriodOpen: false,
                })
              }
              key={i}
              className="p-2 cursor-pointer hover:text-gray-400"
            >
              {time.name}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export default TimePeriod;

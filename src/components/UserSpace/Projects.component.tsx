import { IoIosArrowDown } from 'react-icons/io';
import globalStore from '@/store/globalStore';
import { projectList } from '@/lib/static/projectList';
import { motion } from 'framer-motion';
import {projectLinkContainer, projectLinkItem} from "@/lib/motionVariants/headerVariants";

const ProjectsComponent = () => {
  const { projectsDropDownActive } = globalStore();

  return (
    <div className={'relative'}>
      <button
          onClick={() => globalStore.setState({ projectsDropDownActive: !projectsDropDownActive})}
        className={
          'p-2 flex items-center gap-1 hover:bg-gray-100 ease-in-out duration-300 rounded-md'
        }
      >
        Projects <IoIosArrowDown className={''} />
      </button>
      <motion.ul
        variants={projectLinkContainer}
        animate={projectsDropDownActive ? 'visible' : 'hidden'}
        className={'absolute bg-white p-2 shadow-md'}
      >
        {projectList.map((project, i) => (
          <motion.li
              variants={projectLinkItem}
              custom={i}
              animate={projectsDropDownActive ? 'visible' : 'hidden'}
            key={i}
            className={
              'flex gap-2 items-center p-2 cursor-pointer hover:bg-gray-100 rounded-sm hover:shadow-md'
            }
          >
            <span>{project.icon}</span>
            <span>{project.name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ProjectsComponent;

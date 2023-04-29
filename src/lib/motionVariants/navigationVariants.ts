export const navLinkVariant = {
  hidden: {
    opacity: 0,
    x: -100,
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
export const sidebarLeftVariant = {
  hidden: {
    width: '5rem',
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  visible: {
    width: '20rem',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      delay: 0.1,
    },
  },
};

export const subSidebarLeftVariant = {
  hidden: {
    width: 1,
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  visible: {
    x: 75,
    opacity: 1,
    width: '15rem',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      delay: 0.1,
    },
  },
}
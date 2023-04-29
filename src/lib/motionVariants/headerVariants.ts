export const projectLinkItem = {
    visible: (i: any) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.4,
            ease: 'easeOut',
        },
    }),
    hidden: { opacity: 0, y: -500 },
};

export const projectLinkContainer = {
    hidden: {
        opacity: 0,
        height: 0,
        transition: {
            duration: 0.2,
            ease: 'easeOut',
        },
    },
    visible: {
        opacity: 1,
        height: 'auto',
        transition: {
            duration: 0.8,
            ease: 'easeInOut',
            delay: 0.1,
        },
    },
}
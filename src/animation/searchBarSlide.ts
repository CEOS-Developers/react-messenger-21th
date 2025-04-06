export const SEARCH_BAR_HEIGHT = 32;

export const searchBarSlideVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
  },
  exit: {
    height: 0,
    opacity: 0,
  },
};

export const searchBarTransition = {
  height: { duration: 0.35, ease: [0.25, 0.8, 0.25, 1] },
  opacity: { duration: 0.25, ease: 'easeOut' },
};

const framerMotionProps = {
  initial: { opacity: 0, transform: 'translateY(20px)' },
  viewport: { once: true, amount: 0.2 },
  whileInView: { opacity: 1, transform: 'translateY(0px)' },
  transition: { duration: 0.5, ease: 'easeInOut' },
};

export default framerMotionProps;

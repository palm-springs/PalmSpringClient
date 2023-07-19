import { useEffect, useState } from 'react';

const useScrollTopToolbar = () => {
  const [isToolbarExpanded, setIsToolbarExpanded] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      const isTop = currentScrollY === 0; // 상단에 도달했는지 확인

      if (isTop) {
        setIsToolbarExpanded(false);
      } else {
        setIsToolbarExpanded(currentScrollY < prevScrollY);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return isToolbarExpanded;
};

export default useScrollTopToolbar;

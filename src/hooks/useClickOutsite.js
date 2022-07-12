import { useEffect, useRef } from 'react';

const useClickOutside = (handler) => {
  const ref = useRef();

  useEffect(() => {
    const clickOutside = (e) => {
      if (!ref.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [handler]);

  return ref;
};

export default useClickOutside;

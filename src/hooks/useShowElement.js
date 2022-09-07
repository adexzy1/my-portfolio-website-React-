import { useEffect, useState } from 'react';

const useShowElement = (value) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const showElement = () => {
      if (window.scrollY > value) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', showElement);

    return () => {
      window.removeEventListener('scroll', showElement);
    };
  }, [value]);

  return show;
};

export default useShowElement;

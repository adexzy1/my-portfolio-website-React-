import scroll from '../hooks/UseScroll';
import { BiUpArrow } from 'react-icons/bi';
import { useState, useEffect } from 'react';

const ScrollToTop = ({ bodyRef }) => {
  const [showScrolltoTop, setScrolltoTop] = useState(false);

  useEffect(() => {
    const showButton = () => {
      if (window.scrollY > 200) {
        setScrolltoTop(true);
      } else {
        setScrolltoTop(false);
      }
    };

    window.addEventListener('scroll', showButton);

    return () => {
      window.removeEventListener('scroll', showButton);
    };
  }, []);
  return (
    <section>
      {showScrolltoTop && (
        <section
          onClick={() => scroll(bodyRef)}
          className="bg-purple p-5 bottom-5 fixed right-3 cursor-pointer rounded-full"
        >
          <BiUpArrow />
        </section>
      )}
    </section>
  );
};

export default ScrollToTop;

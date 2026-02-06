import scroll from '../hooks/UseScroll';
import { BiUpArrow } from 'react-icons/bi';
import useShowElement from '../hooks/useShowElement';

const ScrollToTop = ({ bodyRef }) => {
  // custom hook
  const showScrolltoTop = useShowElement(200);

  return (
    <section>
      {showScrolltoTop && (
        <section
          onClick={() => scroll(bodyRef)}
          className="bg-purple hover:bg-purple/90 p-5 bottom-5 fixed right-3 cursor-pointer rounded-full transition-all duration-200 text-white shadow-lg hover:shadow-purple/50"
        >
          <BiUpArrow />
        </section>
      )}
    </section>
  );
};

export default ScrollToTop;

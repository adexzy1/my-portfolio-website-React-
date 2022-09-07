import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useGsapTimeLine = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: Power3.easeInOut,
      duration: 2,
    },
  });

  return { tl, Power3 };
};

export default useGsapTimeLine;

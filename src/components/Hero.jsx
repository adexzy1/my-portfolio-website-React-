import React from 'react';
import HeroImg from '../assets/img/hero.png';
import { useEffect } from 'react';
import useGsapTimeLine from '../hooks/useGsapTimeLine';

const Hero = () => {
  // animations with gsap
  const { tl } = useGsapTimeLine();

  useEffect(() => {
    tl.from('#hero-img_class', {
      duration: 2.5,
      opacity: 0,
      x: '50%',
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%) ',
    }).from(
      '#hero-details_class',
      {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%) ',
        opacity: 0,
        y: '20%',
      },
      '-=2'
    );
  }, [tl]);

  const style = {
    container:
      'p-5 md:grid grid-cols-2 flex-row-reverse justify-center sm:p-8 md:px-16 lg:px-24 overflow-hidden -z-50 lg:mt-10',
    hero__wrapper:
      'max-w-full md:w-[40rem] m-auto col-start-2 opacity-1  translate-x-[0]',
    hero__img: 'h-full w-full',
    details__wrapper:
      'col-start-1 row-start-1 md:mt-9 lg:mt-14 xl:mt-20 opacity-1 translate-y-[0]',
    hero__text:
      'md:text-[2.1rem] md:leading-[3rem] lg:text-[2.5rem]  xl:text-[3.7rem] xl:lg:leading-[5rem] sm:text-[3.1rem] sm:leading-[4rem]  text-3xl  pb-6 pt-5 font-bold',
    line__break: 'hidden md:hidden sm:block',
    btn: 'bg-purple px-7 py-4 mt-4 rounded hover:text-nav',
  };

  return (
    <section className={style.container}>
      <div className={style.hero__wrapper} id="hero-img_class">
        <img src={HeroImg} alt="avatar" className={style.hero__img} />
      </div>

      <div className={style.details__wrapper} id="hero-details_class">
        <h1 className={style.hero__text}>
          I Build Beautiful & <br className={style.line__break} /> Functional
          Web Apps
        </h1>

        <a
          className="b "
          href="https://drive.google.com/uc?export=download&id=1mjcwXB9CgDHoRjxYuzOdKGqvaP0j2-ux"
          download="John's Resume"
        >
          <button className={style.btn}>Download Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;

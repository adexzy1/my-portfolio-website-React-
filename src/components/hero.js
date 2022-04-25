import React from 'react';
import hero from './img/hero.svg';

const Hero = () => {
  return (
    <section className="p-5 md:grid grid-cols-2 flex-row-reverse justify-center sm:p-8 md:px-16 lg:px-24 lg:mt-10 2xl:w-[1400px] 2xl:mx-auto">
      <div className="max-w-full md:w-[40rem] m-auto col-start-2">
        <img src={hero} alt="avatar" className="h-full w-full" />
      </div>

      <div className="col-start-1 row-start-1 md:mt-9 lg:mt-14 xl:mt-20 xl:pl-7">
        <h1 className="md:text-[2.1rem] md:leading-[3rem] lg:text-[2.5rem]  xl:text-[3.7rem] xl:lg:leading-[5rem] sm:text-[3.1rem] sm:leading-[4rem]  text-3xl  pb-6 pt-5 font-bold ">
          Building Beautiful & <br className="hidden md:hidden sm:block" />{' '}
          Functional Web Apps
        </h1>

        <a
          href="https://drive.google.com/uc?export=download&id=1pjCvqL9-TwaxB_seNhVzownyqlyDP5hY"
          download="John's Resume"
        >
          <button className="bg-purple px-7 py-4 mt-4 rounded hover:text-nav">
            Download Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;

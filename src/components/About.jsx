import { forwardRef, useEffect } from 'react';
import useGsapTimeLine from '../hooks/useGsapTimeLine';

const About = forwardRef((props, ref) => {
  // custom hook
  const { tl } = useGsapTimeLine();

  // animation effect
  useEffect(() => {
    tl.fromTo(
      '#about',
      {
        autoAlpha: 0,
        scale: 0.2,
        // x: '-100%',
      },
      {
        duration: 2,
        scale: 1,
        // x: 0,
        autoAlpha: 1,
        scrollTrigger: {
          start: 'top bottom-=100',
          // end: 'bottom center',
          trigger: '#about',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [tl]);

  const style = {
    container:
      'p-5 pt-32 sm:px-8 md:px16 lg:px-24 ease-in-out duration-700 text-center',
    about__me:
      'text-lg inline-block pt-3 pb-5 title relative text font-semibold',
    about_text: 'text-secondary leading-7',
  };
  return (
    <section id="about" ref={ref} className={style.container}>
      <h4 className={style.about__me}>About Me</h4>
      <p className={style.about_text}>
        Hi &#128075; My name is John Adekoya, I am a self-taught frontend
        developer.
        <br />I build functional and user-friendly Web Apps for companies and
        businesses. I am the Software chef the code is my ingredient, I love to
        cook delicious Meals for users to consume.
      </p>
    </section>
  );
});

export default About;

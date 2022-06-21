import { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  const style = {
    container: 'p-5 mt-10 sm:p-8 md:px16 lg:px-24 2xl:w-[1400px] 2xl:mx-auto',
    about__me:
      'text-lg inline-block pt-3 pb-5 title relative text font-semibold',
    about_text: 'text-secondary',
  };
  return (
    <section ref={ref} className={style.container}>
      <h4 className={style.about__me}>About Me</h4>
      <p className={style.about_text}>
        I build functional and user-friendly Web Apps for companies and
        businesses. I am the Software chef the code is my ingredient, i love to
        cook delicious Meals for users to consume
      </p>
    </section>
  );
});

export default About;

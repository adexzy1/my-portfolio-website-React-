import { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  const style = {
    container:
      'p-5 pt-32 sm:px-8 md:px16 lg:px-24 ease-in-out duration-700 text-center max-w-3xl mx-auto',
    about__me:
      'text-2xl inline-block pt-3 pb-5 title relative font-bold text-white',
    about_text: 'text-secondary leading-8 text-base',
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

import { forwardRef } from 'react';

const Skills = forwardRef((props, ref) => {
  const style = {
    container: 'p-5 pt-20 mt-10 sm:px-8 md:px16 lg:px-24 text-center',
    title: 'text-2xl inline-block pt-3 pb-5 title relative font-bold text-white',
  };

  return (
    <section ref={ref} className={style.container}>
      <h4 className={style.title}>Skills</h4>
      <section className="skills">
        <p>REACT</p>
        <p>FIREBASE</p>
        <p>GIT</p>
        <p>TAILWIND</p>
        <p>TYPESCRIPT</p>
        <p>REDUX TOOLKIT</p>
      </section>
    </section>
  );
});

export default Skills;

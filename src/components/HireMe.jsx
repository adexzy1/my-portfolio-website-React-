import { useState, forwardRef } from 'react';
import { RiTwitterFill } from 'react-icons/ri';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { RiGithubFill } from 'react-icons/ri';
import ContactForm from './ContactForm';
import spinner from '../assets/icons/Spinner.svg';

const HireMe = forwardRef((props, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(<img src={spinner} alt="loading.." />);

  const style = {
    container: ' p-5 sm:px-8 lg:px-24 2xl:w-[1400px] 2xl:mx-auto',
    title: 'text-lg inline-block pt-3 pb-2 title relative text font-semibold',
    title__tag: 'text-secondary',
    wrapper: 'md:flex gap-10',
    isSent:
      'flex justify-center items-center w-full h-[15rem] mt-14 md:w-[50%] lg:w-[40%]',
    contact__details_container: 'mt-10 md:w-[40%] md:mt-24 md:pt-2',
    address: 'mb-10 not-italic',
    address__content: 'block text-secondary pb-3 hover:text-nav',
    socials__container: 'flex gap-5 mb-5',
    socials__content: 'text-2xl hover:text-nav',
  };

  return (
    <section ref={ref} className={style.container}>
      <h4 className={style.title}>Hire Me</h4>
      <p className={style.title__tag}>Feel free to contact me at anytime</p>

      <section className={style.wrapper}>
        {isLoading ? (
          <section className={style.isSent}>{isSent}</section>
        ) : (
          <ContactForm setIsloading={setIsLoading} setIsSent={setIsSent} />
        )}

        <div className={style.contact__details_container}>
          <address className={style.address}>
            <a className={style.address__content} href="tel:+234 70 6536 8281">
              <p>+234 70 6536 8281</p>
            </a>

            <a
              className={style.address__content}
              href="mailto:Johnadexzy@gmail.com"
            >
              Johnadexzy@gmail.com
            </a>
          </address>

          <div className={style.socials__container}>
            <a
              className={style.socials__content}
              href="https://github.com/adexzy1"
            >
              <RiGithubFill />
            </a>

            <a
              className={style.socials__content}
              href="https://twitter.com/iamthebravo"
            >
              <RiTwitterFill />
            </a>

            <a
              className={style.socials__content}
              href="https://www.linkedin.com/in/adekoya-john-adebisi-14a628127/"
            >
              <RiLinkedinBoxFill />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
});

export default HireMe;

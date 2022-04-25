import { useState } from 'react';
import { RiTwitterFill } from 'react-icons/ri';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { RiGithubFill } from 'react-icons/ri';
import ContactForm from './ContactForm';
import spinner from './img/Spinner.svg';

const HireMe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(<img src={spinner} alt="loading.." />);

  return (
    <section className=" p-5 sm:px-8 lg:px-24 2xl:w-[1400px] 2xl:mx-auto">
      <h4 className="text-lg inline-block pt-3 pb-2 title relative text font-semibold">
        Hire Me
      </h4>
      <p className="text-secondary">Feel free to contact me at anytime</p>

      <section className="md:flex gap-10">
        {isLoading ? (
          <section className="flex justify-center items-center w-full h-[15rem] mt-14 md:w-[50%] lg:w-[40%]">
            {message}
          </section>
        ) : (
          <ContactForm setIsloading={setIsLoading} setMessage={setMessage} />
        )}

        <div className="mt-10 md:w-[40%] md:mt-24 md:pt-2">
          <address className="mb-10 not-italic">
            <a
              className="block text-secondary pb-3 hover:text-nav"
              href="tel:+234 70 6536 8281"
            >
              <p>+234 70 6536 8281</p>
            </a>
            <a
              className="block text-secondary hover:text-nav"
              href="mailto:Johnadexzy@gmail.com"
            >
              Johnadexzy@gmail.com
            </a>
          </address>
          <div className="flex gap-5 mb-5">
            <a
              className="text-2xl hover:text-nav"
              href="https://github.com/adexzy1"
            >
              <RiGithubFill />
            </a>
            <a
              className="text-2xl hover:text-nav"
              href="https://twitter.com/iamthebravo"
            >
              <RiTwitterFill />
            </a>
            <a
              className="text-2xl hover:text-nav"
              href="https://www.linkedin.com/in/adekoya-john-adebisi-14a628127/"
            >
              <RiLinkedinBoxFill />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HireMe;

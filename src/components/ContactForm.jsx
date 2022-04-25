import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import mail from './img/mail.gif';

const ContactForm = ({ setIsloading, setMessage }) => {
  const form = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const handleSUbmit = (e) => {
    // prevent default form action
    e.preventDefault();

    // check for error
    if (emailRef !== '' && nameRef !== '' && messageRef !== '') {
      setIsloading(true);
      sendEmail();
    } else {
    }
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_6i24gsp',
        'template_2j9zi08',
        form.current,
        'cznkHQKHqf-Hg1J4v'
      )
      .then(
        () => {
          setMessage(<img src={mail} alt="Mail sent" />);
          setTimeout(() => {
            setIsloading(false);
          }, 3000);
        },
        (error) => {
          setMessage(
            <p className="font-bold text-red-400">
              An error occured try again later
            </p>
          );
        }
      );
  };

  return (
    <form
      className="mt-14 md:w-[50%] lg:w-[40%]"
      onSubmit={handleSUbmit}
      ref={form}
    >
      <div className="form-group">
        <label className="block">Name</label>
        <input type="text" name="name" required ref={nameRef} />
      </div>
      <div className="form-group">
        <label className="block">Email</label>
        <input type="Email" name="email" required ref={emailRef} />
      </div>
      <div className="form-group">
        <label className="block">Message</label>
        <textarea
          name="message"
          className="bg-input w-full h-52 p-5 rounded-md outline-none"
          required
          ref={messageRef}
        ></textarea>
      </div>

      <button className="bg-purple px-7 py-3 my-2 w-2/5 rounded hover:text-nav">
        Send
      </button>
    </form>
  );
};

export default ContactForm;

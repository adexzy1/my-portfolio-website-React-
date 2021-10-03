import { UilGithub } from '@iconscout/react-unicons';
import { UilTwitter } from '@iconscout/react-unicons';
import { UilLinkedin } from '@iconscout/react-unicons';
const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer_container">
        <h4>Contact Info</h4>
        <address>
          <p>
            Address <span>Iyana-ipaja, Lagos Nigeria.</span>
          </p>
          <p>
            Phone <span>+234 70 6536 8281</span>
          </p>
          <p>
            Enail <span>Johnadexzy@gmail.com</span>
          </p>
        </address>
        <div className="sub_footer">
          <p>
            Copyright © <span></span> All Rights Reserved
          </p>
          <div className="socials">
            <a href="https://github.com/adexzy1">
              <UilGithub size="30" />
            </a>
            <a href="https://twitter.com/iamthebravo">
              <UilTwitter size="30" />
            </a>
            <a href="https://www.linkedin.com/in/adekoya-john-adebisi-14a628127/">
              <UilLinkedin size="30" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { CgArrowTopRight } from 'react-icons/cg';
import style from '../css/card.module.css';

const CardBack = ({ liveLink, github, details, stack }) => {
  const innerStyle = {
    wrapper: 'h-full bg-gradient-to-b from-input to-slate-900 px-5 py-8  text-secondary flex flex-col rounded-lg',
    details: 'text-sm leading-7 pb-5 sm:text-[16px] sm:leading-8',
    stack: 'py-5 flex flex-wrap text-xs gap-2',
    span: 'py-2 px-3 bg-badge rounded-md text-purple font-medium',
    ul: 'flex text-xs gap-5 items-center  sm:text-[16px] cursor-pointer mt-auto',
    li: 'flex items-center gap-2 hover:text-purple transition-colors duration-200',
  };

  return (
    <section className={`${innerStyle.wrapper} ${style.card__back}`}>
      <p className={innerStyle.details}>{details}</p>

      <div className={innerStyle.stack}>
        {stack?.map((item, index) => (
          <span key={index} className={innerStyle.span}>
            {item}
          </span>
        ))}
      </div>

      <ul className={innerStyle.ul}>
        {github && (
          <li className={innerStyle.li}>
            <a href={github} target="_blank" rel="noreferrer">
              Github
            </a>
            <CgArrowTopRight />
          </li>
        )}

        <li className={innerStyle.li}>
          <a href={liveLink} target="_blank" rel="noreferrer">
            Live link
          </a>
          <CgArrowTopRight />
        </li>
      </ul>
    </section>
  );
};

export default CardBack;

import style from '../css/card.module.css';

const CardFront = ({ name, tag, img }) => {
  const innerStyle = {
    cotainer: 'h-full cursor-pointer',
    img__wrapper: 'h-full w-full',
    img: 'w-full h-full object-cover',
    content__wrapper: 'h-full w-full top-0 bg-rgba p-3 absolute',
    content_container:
      'border-4 h-full flex flex-col justify-center items-center text-center px-3',
    tag: 'text-sm',
    name: 'font-semibold text-[10vw] sm:text-[3vw]',
  };
  return (
    <section className={`${innerStyle.cotainer} ${style.card__front}`}>
      <div className={innerStyle.img__wrapper}>
        <img src={img} alt={name} className={innerStyle.img} />
      </div>

      <div className={innerStyle.content__wrapper}>
        <div className={innerStyle.content_container}>
          <p className={innerStyle.tag}>{tag}</p>
          <h5 className={innerStyle.name}>{name}</h5>
        </div>
      </div>
    </section>
  );
};

export default CardFront;

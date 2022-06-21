import CardBack from './CardBack';
import CardFront from './CardFront';
import style from '../css/card.module.css';

const ProjectCard = ({ item }) => {
  return (
    <section className={style.card__container}>
      <div className={style.card__wrapper}>
        <CardFront img={item.image} name={item.name} tag={item.tag} />
        <CardBack
          liveLink={item.liveLink}
          github={item.github}
          details={item.details}
          stack={item.stack}
        />
      </div>
    </section>
  );
};
export default ProjectCard;

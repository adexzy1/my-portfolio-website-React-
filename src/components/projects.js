const Projects = ({ key, img, p, href1, href2, alt }) => {
  return (
    <div className="project_item" key={key}>
      <img src={img} alt={alt} />
      <div className="item_details">
        <p>{p}</p>
        <a href={href1} target="_blank" rel="noreferrer">
          Live website
        </a>
        <a href={href2} target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
    </div>
  );
};
export default Projects;

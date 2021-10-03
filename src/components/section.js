const Section = ({ id, h3, p, details, classId }) => {
  return (
    <section id={id} className="container">
      <div className="description_container">
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
      <div className={classId}>{details}</div>
    </section>
  );
};

export default Section;

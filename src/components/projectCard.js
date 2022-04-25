const ProjectCard = ({ img, name, liveLink, github }) => {
  return (
    <div
      className="pt-10 sm:mb-0 mb-5 relative  text-white  bg-cover overflow-hidden cursor-pointer projects h-60 rounded"
      style={{ backgroundImage: `url(${img})` }}
    >
      <section className="w-full bg-rgba h-[100%] absolute top-0 transform flex justify-center items-center text-center translate-y-[100%] transition-all ease-in-out duration-500">
        <div className="item_details">
          <p className="pb-5 text-xl font-bold">{name}</p>

          <div className="flex gap-x-5 flex-wrap justify-center">
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                <button className="bg-purple px-7 py-4 mt-4 rounded hover:text-nav">
                  GitHub
                </button>
              </a>
            )}
            <a href={liveLink} target="_blank" rel="noreferrer">
              <button className="bg-purple px-7 py-4 mt-4 rounded hover:text-nav">
                Live website
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProjectCard;

import ProjectCard from './projectCard';
import { queryData } from '../config/firebaseConfig/firebase';
import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const project = [];
    const fetchProjects = async () => {
      try {
        const res = await getDocs(queryData);
        res.forEach((doc) => {
          project.push({ ...doc.data(), id: doc.id });
        });
        setProjects(project);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="p-5 mt-10 sm:p-8 md:px16 lg:px-24 2xl:w-[1400px] 2xl:mx-auto">
      <h4 className="text-lg inline-block pt-3 pb-10 title relative text font-semibold">
        My Works
      </h4>

      {projects.length !== 0 ? (
        <div className="grid sm:grid-cols-2 gap-5 lg:grid-cols-3">
          {projects.map((item) => (
            <ProjectCard
              key={item.id}
              img={item.image}
              name={item.name}
              liveLink={item.liveLink}
              github={item.github}
            />
          ))}
        </div>
      ) : (
        <section className="text-purple font-bold text-center">
          Loading...
        </section>
      )}
    </section>
  );
};

export default Projects;

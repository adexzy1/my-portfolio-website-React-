import { queryData } from '../config/firebaseConfig/firebase';
import { getDocs } from 'firebase/firestore';
import { useEffect, useState, forwardRef } from 'react';
import ProjectCard from './ProjectCard';
import spinner from '../assets/icons/Spinner.svg';

const Projects = forwardRef((props, ref) => {
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

  const style = {
    container: 'p-5  sm:px-8 md:px16 lg:px-24 pt-32',
    title_wrapper: 'text-center',
    title:
      'text-lg inline-block pt-3 pb-10 title relative text font-semibold text-center',
    project__container: 'grid sm:grid-cols-2 gap-5 lg:grid-cols-3',
    loading: 'flex justify-center',
  };

  return (
    <section ref={ref} className={style.container}>
      <div className={style.title_wrapper}>
        <h4 className={style.title}>My Works</h4>
      </div>

      {projects.length !== 0 ? (
        <div className={style.project__container}>
          {projects.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <section className={style.loading}>
          <img src={spinner} alt="loading.." className="m sm" />
        </section>
      )}
    </section>
  );
});

export default Projects;

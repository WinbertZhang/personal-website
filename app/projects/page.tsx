import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-4 sm:px-8">
      <h1 className="text-6xl font-bold text-center text-white mb-6 underline decoration-blue">
        Projects
      </h1>
      <h2 className="text-2xl font-bold text-center text-white mb-4">
        Check out my personal projects!
      </h2>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {projects.map((project) => (
          <div
            className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            key={project.name}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

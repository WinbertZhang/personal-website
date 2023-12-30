import ExperienceCard from "@/components/ExperienceCard";
import experiences from "@/data/experiences";

const ExperiencePage = () => {
  return (
    <div className="container mx-auto px-4 py-4 sm:px-8">
      <h1 className="text-6xl font-bold text-center text-white underline decoration-blue mb-6">
        Experience
      </h1>
      <h2 className="text-2xl font-bold text-center text-white mb-8">
        Here are my professional experiences
      </h2>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {experiences.map((experience) => (
          <div
            className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            key={experience.jobTitle}
          >
            <ExperienceCard {...experience} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;

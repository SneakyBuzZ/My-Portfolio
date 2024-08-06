import { PROJECT } from "@/lib/constant";
import ProjectCard from "./ProjectCard";
// import { Badge } from "./ui/badge";

const Projects = () => {
  return (
    <div className="w-full flex flex-col items-center my-20">
      <div className="w-full flex justify-between items-center px-10 md:px-20">
        <h1 className="text-2xl md:text-4xl poppins font-semibold text-stone-300">
          PROJECTS
        </h1>
        {/* <div className="flex items-center gap-2 ">
          <Badge className="md:text-md rounded-md text-stone-400">
            All Projects
          </Badge>
          <Badge className="md:text-md rounded-md text-rose-500">
            Full Stack
          </Badge>
          <Badge className="md:text-md rounded-md text-stone-400">Other</Badge>
        </div> */}
      </div>
      <div className="grid w-full px-10 md:px-20 grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECT.map((each) => (
          <ProjectCard
            description={each.description}
            path={each.path}
            href={each.href}
            name={each.name}
            finished={each.finished}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

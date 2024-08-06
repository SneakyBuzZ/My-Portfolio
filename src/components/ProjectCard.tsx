import { SquareArrowOutUpRight } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Badge } from "./ui/badge";
import { ProjectType } from "@/lib/type";

const ProjectCard = ({
  name,
  href,
  description,
  path,
  finished,
}: ProjectType) => {
  return (
    <div
      key={name}
      className="glassmorphism bg-[#141414] gap-4 flex flex-col justify-center w-full border border-stone-800 text-stone-300 rounded-lg p-2"
    >
      <AspectRatio ratio={16 / 9}>
        <img src={path} alt="projectID" className="w-full h-full rounded-md" />
      </AspectRatio>

      <div className="w-full flex items-center justify-between px-3">
        <div className="flex items-center gap-2">
          <h1 className="text-xl text-white">{name}</h1>
          <h1 className="text-xs text-stone-400">
            {finished ? (
              <Badge className="text-green-400 mt-1">Finished</Badge>
            ) : (
              <Badge className="text-yellow-400 mt-1">Pending</Badge>
            )}
          </h1>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm underline flex items-center gap-1"
        >
          <SquareArrowOutUpRight className="h-4" />
        </a>
      </div>
      <div className="w-full text-start px-3 text-sm my-2 mb-4 text-neutral-500">
        {description}
      </div>
    </div>
  );
};

export default ProjectCard;

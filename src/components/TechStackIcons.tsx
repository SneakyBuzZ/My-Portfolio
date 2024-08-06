import { AspectRatio } from "./ui/aspect-ratio";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type TechStackIcon = {
  path: string;
  name: string;
};

type TechStackIconsType = {
  iconArray: TechStackIcon[];
  title: string;
};

const TechStackIcons = ({ iconArray, title }: TechStackIconsType) => {
  return (
    <>
      <div className="w-full">
        <h1 className="text-2xl text-stone-300 mb-5 font-semibold poppins">
          {title}
        </h1>
        <div className="flex items-center gap-3 flex-wrap">
          {iconArray.map((each) => (
            <div
              key={each.path}
              className="border h-12 w-12 sm:h-16 sm:w-16 p-2  border-stone-800 rounded-lg bg-stone-300 cursor-pointer"
            >
              <Tooltip>
                <AspectRatio>
                  <TooltipTrigger>
                    <img
                      src={each.path}
                      alt="picture"
                      className="w-full h-full rounded-md"
                    />
                  </TooltipTrigger>
                </AspectRatio>
                <TooltipContent className=" mb-5">{each.name}</TooltipContent>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStackIcons;

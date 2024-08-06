import { CURRENT_TECSTACK, MACHINE_LEARNING, WEB_STACK } from "@/lib/constant";
import TechStackIcons from "./TechStackIcons";
import { TooltipProvider } from "./ui/tooltip";

const TechStack = () => {
  return (
    <div className="w-full h-full lg:w-7/12 p-20 md:border-t-0 border-t border-t-stone-800 order-5 text-white flex flex-col justify-start items-center gap-10 md:gap-16 my-auto">
      <TooltipProvider>
        <TechStackIcons
          iconArray={CURRENT_TECSTACK}
          title="Current Tech Stack"
        />
        <h1 className="text-lg w-full text-stone-600 -mb-5 md:-mb-14">
          Through out the time , I have learned
        </h1>
        <TechStackIcons
          iconArray={WEB_STACK}
          title="Full Stack Web 3.0 Development"
        />
        <TechStackIcons iconArray={MACHINE_LEARNING} title="Machine Learning" />
      </TooltipProvider>
    </div>
  );
};

export default TechStack;

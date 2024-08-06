import AnimatedShinyText from "./magicui/animated-shiny-text";
import { Button } from "./ui/button";

const HeroText = () => {
  return (
    <div className=" flex justify-center items-center gap-5 flex-wrap py-5">
      <AnimatedShinyText className="border rounded-full border-stone-800 inline-flex mt-10 items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
        <span className="text-md text-stone-500">✨ Hey , I am</span>
        <span className="text-md text-stone-300 ml-3">Kaushik Katikala</span>
      </AnimatedShinyText>
      <div className="flex items-center flex-wrap justify-center gap-3 hero-text text-white text-5xl sm:text-6xl lg:text-7xl font-bold w-full mb-8 px-5 md:px-20">
        <span>I</span>
        <span className="">Design</span>
        <span>,</span>
        <span>Develop</span>
        <span>and</span>
        <span>Deploy</span>
        <span>web</span>
        <span>applications</span>
      </div>
      <p className="text-sm lg:text-lg text-[#878787] w-full text-center px-5 md:px-20 lg:px-40">
        I&rsquo;m currently pursuing a B.Tech in Computer Science and
        Engineering at Vidya Jyothi Institute of Technology, Hyderabad. I have a
        deep passion for programming and find it incredibly fascinating. I love
        exploring new areas within the field and dive deeply into what captures
        my interest.
      </p>

      <a
        href="https://www.linkedin.com/in/kaushik-katikala-81a888259/"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-white cursor-pointer"
      >
        <Button className="my-5 mb-40 bg-[#ffffffa5] text-black h-8 w-40 hover:bg-stone-200">
          Wanna talk ?
        </Button>
      </a>
    </div>
  );
};

export default HeroText;

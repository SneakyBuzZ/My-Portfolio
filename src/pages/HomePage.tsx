import NavBar from "@/components/NavBar";
import HeroText from "../components/HeroText";
import Portfolio from "@/components/Portfolio";
import Projects from "@/components/Projects";

const HomePage = () => {
  return (
    <div className="z-20 flex flex-col items-center gap-10">
      <NavBar />
      <HeroText />
      <Portfolio />
      <Projects />
    </div>
  );
};

export default HomePage;

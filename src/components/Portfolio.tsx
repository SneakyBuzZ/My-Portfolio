import PhotoCard from "./PhotoCard";
import TechStack from "./TechStack";

const Portfolio = () => {
  return (
    <div className="glassmorphism bg-[#0e0e0e] w-full border-t border-t-stone-800 border-b border-b-stone-800 justify-between flex flex-col lg:flex-row items-start  ">
      <PhotoCard />
      <TechStack />
    </div>
  );
};

export default Portfolio;

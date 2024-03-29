import { TechstackComp } from "../components";

function AboutPage() {
  return (
    <>
      <div className="w-full h-full bg-white bg-opacity-35 rounded-md center-in-flex-col gap-8 p-2">
        <p className="text-center text-xs md:text-[15px] lg:text-[18px] w-5/6 blue-color-text font-medium">
          I'm a 2yr ungergrad at Vidya Jyothi Institute of Technology, where I
          am honing my skills in web development with hands-on experience in
          Android app development.I am eagerly looking forward to delving into
          the exciting world of Machine Learning in the future."
        </p>
        <div className="w-full center-in-flex-col gap-3">
          <h1 className="font-medium md:text-xl blue-color-text">
            The Techstack
          </h1>
          <div className="center-in-flex-row flex-wrap gap-2 md:w-5/6">
            <TechstackComp title="Angular Js" source="/angular.png" />
            <TechstackComp title="React Js" source="/react.png" />
            <TechstackComp title="Next Js" source="/next.png" />
            <TechstackComp title="Figma" source="/figma.png" />
            <TechstackComp title="Tailwind CSS" source="/tailwindcss.png" />
            <TechstackComp title="Firebase" source="/firebase.png" />
            <TechstackComp title="Appwrite" source="/appwrite.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;

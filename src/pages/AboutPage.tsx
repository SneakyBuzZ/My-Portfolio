import { TechstackComp } from "../components";

function AboutPage() {
  return (
    <>
      <div className="w-full h-full bg-white rounded-md center-in-flex-col gap-8 p-2">
        <p className="text-center text-xs md:text-[15px] lg:text-lg w-5/6">
          I’m a 2yr CSE undergrad at Vidya Jyothi institute of technology. I do
          development , mainly web and had hands on session on andrioid dev too.
          I willing to learn Machine Learning in the future.
        </p>
        <div className="w-full center-in-flex-col gap-3">
          <h1 className="font-medium md:text-xl">The Techstack</h1>
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

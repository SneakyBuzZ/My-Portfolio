import { LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const handleHomeButton = () => {
    navigate("/bio");
  };

  return (
    <>
      <div className="bigcontainer w-full h-screen flex">
        <div className="w-full lg:w-7/12 h-full ">
          <div className="flex flex-col h-[22rem] md:h-[28rem] w-[20rem] md:w-[28rem] xl:w-[40rem] xl:h-[40rem]  bg-[#ffdd00] rounded-full relative bottom-14 md:bottom-28 xl:bottom-64 xl:right-40 right-20"></div>
          <div className=" relative bottom-40 md:bottom-64 xl:bottom-[30rem] w-full px-16 md:px-32 flex flex-col gap-3 lg:gap-4 xl:mt-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl">Hello!</h1>
            <div className="name flex gap-3 lg:w-[40rem]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                I'm
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl londrina-solid-regular">
                Kaushik Katikala
              </h1>
            </div>
            <p className="text-md md:text-lg lg:w-[40rem] lg:mt-2">
              I excel in both development and design, merging the technical with
              the creative to craft seamless digital experiences.{" "}
            </p>
            <button
              onClick={handleHomeButton}
              className="bg-yellow-300 p-2 rounded-md w-32 flex justify-between px-7 items-center mt-7"
            >
              <h1 className="text-lg">Click</h1>
              <div className="opacity-90">
                <LogIn size={18} />
              </div>
            </button>
          </div>
        </div>
        <div className="w-5/12 hidden lg:flex lg:flex-col lg:justify-end">
          <div className="w-full flex justify-end">
            <img
              className=" h-[35rem] xl:h-[44rem]"
              src="/hero_image.png"
              alt="my image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

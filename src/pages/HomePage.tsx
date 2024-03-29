import { ArrowRightFromLine } from "lucide-react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bigcontainer w-full h-screen flex chakra-petch-light">
        <div className="w-full lg:w-7/12 h-full ">
          <div className="flex flex-col h-[22rem] md:h-[28rem] w-[20rem] md:w-[28rem] xl:w-[40rem] xl:h-[40rem]  bg-[#ffdd00] rounded-full relative bottom-14 md:bottom-28 xl:bottom-64 xl:right-40 right-20"></div>
          <div className=" text-[#002A6A] relative bottom-40 md:bottom-64 xl:bottom-[33rem] w-full px-16 md:px-32 flex flex-col gap-3 lg:gap-4 xl:mt-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl">Hello!</h1>
            <div className="name flex gap-3 lg:w-[40rem]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                I'm
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl londrina-solid-regular text-[#002A6A]">
                Kaushik Katikala
              </h1>
            </div>
            <p className="text-md md:text-lg lg:w-[40rem] lg:mt-2">
              I excel in both development and design, merging the technical with
              the creative to craft seamless digital experiences.{" "}
            </p>
            <button
              onClick={() => navigate("/bio/about")}
              className="bg-yellow-300 p-2 rounded-md w-32 flex justify-between px-7 items-center mt-7"
            >
              <h1 className="text-lg">Click</h1>
              <div className="opacity-90">
                <ArrowRightFromLine size={18} />
              </div>
            </button>
            <div className="flex gap-6 mt-7">
              <a href="https://github.com/SneakyBuzZ" target="_blank">
                <img
                  className="size-8 md:size-12"
                  src="/github_blue.png"
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/in/kaushik-katikala-81a888259/"
                target="_blank"
              >
                <img
                  className="size-8 md:size-12"
                  src="/linkedin_blue.png"
                  alt=""
                />
              </a>
              <a href="https://twitter.com/Sneaky_D_Buzz" target="_blank">
                <img className="size-8 md:size-12" src="x_blue.png" alt="" />
              </a>
            </div>
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

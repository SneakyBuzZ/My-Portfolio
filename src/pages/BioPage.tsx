import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { ArrowLeftFromLine } from "lucide-react";

function BioPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen flex flex-col md:flex-row md:justify-center items-center">
        <div className="flex flex-col md:flex-col md:gap-8 w-full md:w-2/12 h-2/6 md:h-full border justify-center md:justify-between  md:py-5 items-center bg-[#ffdd00]">
          <div className="center-in-flex-col my-1 md:my-3">
            <img
              className="size-14 md:size-20"
              src="/profile_rounded.png"
              alt=""
            />
            <h1 className="text-md md:text-lg md:mt-1">Kaushik Katikala</h1>
            <p className="text-[10px] opacity-70">Passionate Tech Enthusiast</p>
          </div>
          <div className="flex flex-row gap-10 md:flex-col py-2 md:h-[20rem]">
            <NavLink
              to={"/bio/about"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-black font-medium " : "text-[#002A6A]"
                } md:w-full text-xs md:text-md md:px-20 `
              }
            >
              ABOUT
            </NavLink>
            <NavLink
              to={"/bio/stats"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-black font-medium" : "text-[#002A6A]"
                } md:w-full text-xs md:text-md md:px-20 `
              }
            >
              STATISTCS
            </NavLink>
            <NavLink
              to={"/bio/projects"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-black font-medium " : "text-[#002A6A]"
                } md:w-full text-xs md:text-md md:px-20 `
              }
            >
              PROJECT
            </NavLink>
          </div>
          <button
            onClick={() => navigate("/")}
            className="bg-black hidden bg-opacity-10 p-2 rounded-md w-2/3 md:flex justify-center  items-center gap-2 my-3"
          >
            <div className="opacity-50">
              <ArrowLeftFromLine size={18} />
            </div>
            <h1 className="text-lg opacity-70">Back</h1>
          </button>
        </div>
        <div className="md:w-10/12 w-full h-full center-in-flex-col">
          <div className="size-full p-5 md:p-10 lg:px-28">
            <Outlet />
          </div>
          <div className="w-full center-in-flex-row gap-5 h-16 ">
            <h1>Github</h1>
            <h1>Linked In</h1>
            <h1>X:Twitter</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default BioPage;

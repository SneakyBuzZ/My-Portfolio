import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { ArrowLeftFromLine } from "lucide-react";

function BioPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen flex flex-col md:flex-row md:justify-center items-center">
        <div className="flex flex-col md:flex-col md:gap-8 w-full md:w-2/12 h-2/6 md:h-full justify-evenly md:justify-between  md:py-5 items-center bg-[#0d2446]">
          <div className="flex flex-col justify-between items-center my-1 md:my-3">
            <img
              className="size-14 md:size-20"
              src="/profile_rounded.png"
              alt=""
            />
            <h1 className="text-md md:text-lg md:mt-1 text-[#FFFBE5]">
              Kaushik Katikala
            </h1>
          </div>
          <div className="flex flex-row gap-10 md:flex-col py-2 md:h-[20rem]">
            <NavLink
              to={"/bio/about"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#ffe600] font-medium " : "text-[#FFFBE5]"
                } md:w-full text-xs md:text-md md:px-20 `
              }
            >
              ABOUT
            </NavLink>
            <NavLink
              to={"/bio/stats"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#ffe600] font-medium" : "text-[#FFFBE5]"
                } md:w-full text-xs md:text-md md:px-20 `
              }
            >
              STATISTCS
            </NavLink>
            <NavLink
              to={"/bio/projects"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#ffe600] font-medium " : "text-[#FFFBE5]"
                } md:w-full text-xs md:text-md md:px-20 `
              }
            >
              PROJECTS
            </NavLink>
          </div>
          <button
            onClick={() => navigate("/")}
            className="bg-[#ffe600] hidden p-2 rounded-md w-2/3 md:flex justify-center  items-center gap-2 my-3"
          >
            <div className="opacity-50">
              <ArrowLeftFromLine size={18} />
            </div>
            <h1 className="text-lg opacity-70 blue-color-text font-medium">
              Back
            </h1>
          </button>
        </div>
        <div className="md:w-10/12 w-full h-full center-in-flex-col">
          <div className="size-full p-5 md:p-10 lg:px-28 outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default BioPage;

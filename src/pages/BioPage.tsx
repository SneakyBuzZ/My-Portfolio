import { NavLink, Outlet } from "react-router-dom"


function BioPage() {
  return (
    <>
    <div className="h-screen flex flex-col md:flex-row md:justify-center items-center">
      <div className="flex flex-row md:flex-col gap-12 md:gap-20 w-full md:w-2/12 items-center h-20 md:h-full border justify-center bg-[#e0f1ff]">
          <NavLink to={"/bio/about"} className={({isActive})=>`${isActive? "text-blue-900 underline":"text-gray-400"} md:w-full text-xs md:text-md md:px-20 `}>ABOUT</NavLink>
          <NavLink to={"/bio/projects"} className={({isActive})=>`${isActive? "text-blue-900 underline":"text-gray-400"} md:w-full text-xs md:text-md md:px-20 `}>PROJECT</NavLink>
          <NavLink to={"/bio/stats"} className={({isActive})=>`${isActive? "text-blue-900 underline":"text-gray-400"} md:w-full text-xs md:text-md md:px-20 `}>STATISTCS</NavLink>
          <NavLink to={"/bio/connect"} className={({isActive})=>`${isActive? "text-blue-900 underline":"text-gray-400"} md:w-full text-xs md:text-md md:px-20 `}>CONNECT</NavLink>
      </div>
      <div className="md:w-10/12 w-full h-full flex justify-center items-center">
      <Outlet />
      </div>
      </div>
    </>
  )
}

export default BioPage

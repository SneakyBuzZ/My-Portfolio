import { DoughnutComp, DoughnutComp2, LineComp, BarComp, BarComp2 } from ".";

function StatsComp() {
  return (
    <>
      <div className="h-[36rem] bg-white bg-opacity-35 p-5 md:p-10 center-in-flex-col gap-2">
        <h1 className="md:py-3 w-full text-xs md:text-[15px] py-5 text-center blue-color-text font-semibold">
          These charts showcase my personal journey and expertise in various
          domains. Each chart represents the depth of experience and work I've
          accumulated in different fields, offering a visual narrative of my
          professional growth and accomplishments.
        </h1>
        <div className="w-full h-1/2 flex flex-row gap-2">
          <div className="lg:w-1/3 w-1/2 h-36 md:h-56 hover-effect-white center-in-flex-col">
            <h1 className="text-[#002A6A] font-regular">Languages</h1>
            <div className="size-36">
              <DoughnutComp />
            </div>
          </div>
          <div className="lg:w-1/3 hidden h-36 md:h-56 lg:flex lg:flex-col justify-center items-center gap-3 p-4 bg-[#ffffffc1] border border-[#ffffff09] hover:border-[#3535353a] rounded-md">
            <h1 className="text-[#002A6A] font-regular">Frameworks</h1>
            <div className="size-36">
              <DoughnutComp2 />
            </div>
          </div>
          <div className="lg:w-1/3 w-1/2 h-36 md:h-56 hover-effect-white center-in-flex-col">
            <h1 className="text-[#002A6A] font-regular">Contributions</h1>
            <div className="size-48">
              <BarComp />
            </div>
          </div>
        </div>
        <div className="h-1/2 center-in-flex-row w-full gap-2">
          <div className="md:w-2/5 h-36 md:h-56 hidden md:flex md:flex-col justify-center items-center gap-3 p-4 bg-[#ffffffc1] border border-[#ffffff09] hover:border-[#3535353a] rounded-md ">
            <h1 className="text-[#002A6A] font-regular ">Databases</h1>
            <div className="size-48">
              <BarComp2 />
            </div>
          </div>
          <div className="md:w-3/5 h-36 md:h-56 hover-effect-white center-in-flex-col">
            <h1 className="text-[#002A6A] font-regular">
              Contributions vs Hours
            </h1>
            <div className="size-full">
              <LineComp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatsComp;

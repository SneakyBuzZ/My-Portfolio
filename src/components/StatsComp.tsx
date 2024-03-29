import { DoughnutComp, LineComp, BarComp } from ".";

function StatsComp() {
  return (
    <>
      <div className="h-[35rem] bg-white p-5 md:p-10 center-in-flex-col gap-2">
        <div className="w-full h-1/2 flex flex-row gap-2">
          <div className="lg:w-1/3 w-1/2 h-56 md:h-full hover-effect-white center-in-flex-col">
            <h1>Languages</h1>
            <div className="size-44">
              <DoughnutComp />
            </div>
          </div>
          <div className="lg:w-1/3 hidden h-56 md:h-full lg:flex lg:flex-col justify-center items-center gap-3 p-4 bg-[#e1e1e141] border border-[#ffffff09] hover:border-[#3535353a] rounded-md">
            <h1>Languages</h1>
            <div className="size-44">
              <DoughnutComp />
            </div>
          </div>
          <div className="lg:w-1/3 w-1/2 h-56 md:h-full hover-effect-white center-in-flex-col">
            <BarComp />
          </div>
        </div>
        <div className="h-1/2 center-in-flex-row w-full gap-2">
          <div className="md:w-2/5 h-full hidden md:flex md:flex-col justify-center items-center gap-3 p-4 bg-[#e1e1e141] border border-[#ffffff09] hover:border-[#3535353a] rounded-md ">
            <BarComp />
          </div>
          <div className="md:w-3/5 w-full h-full hover-effect-white center-in-flex-col">
            <LineComp />
          </div>
        </div>
      </div>
    </>
  );
}

export default StatsComp;

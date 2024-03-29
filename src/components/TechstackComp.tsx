type TechstackCompProp = {
  source: string;
  title: string;
};

function TechstackComp({ source, title }: TechstackCompProp) {
  return (
    <>
      <div className="center-in-flex-col gap-2 md:gap-3 hover:bg-white hover:border border border-[#f0f0f053] hover:border-[#82828253] bg-[#f0f0f053] rounded-md p-3 lg:size-36">
        <img className="size-16" src={source} alt="" />
        <h1 className="text-md md:text-xl">{title}</h1>
      </div>
    </>
  );
}

export default TechstackComp;

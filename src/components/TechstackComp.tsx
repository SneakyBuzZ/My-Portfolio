type TechstackCompProp = {
  source: string;
  title: string;
};

function TechstackComp({ source, title }: TechstackCompProp) {
  return (
    <>
      <div className="center-in-flex-col gap-2 md:gap-3 hover:bg-white hover:border border hover-effect-white p-3 size-24 lg:size-36">
        <img className="size-7 lg:size-16" src={source} alt="" />
        <h1 className="text-[8px] md:text-sm blue-color-text font-semibold text-center">
          {title}
        </h1>
      </div>
    </>
  );
}

export default TechstackComp;

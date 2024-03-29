type TechstackCompProp = {
  source: string;
  title: string;
};

function TechstackComp({ source, title }: TechstackCompProp) {
  return (
    <>
      <div className="center-in-flex-col gap-2 md:gap-3 hover:bg-white hover:border border hover-effect-white p-3 lg:size-36">
        <img className="size-16" src={source} alt="" />
        <h1 className="text-md blue-color-text font-semibold">{title}</h1>
      </div>
    </>
  );
}

export default TechstackComp;

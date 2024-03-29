type ProjectCompProp = {
  src: string;
  title: string;
};

function ProjectBox({ src, title }: ProjectCompProp) {
  return (
    <>
      <div className="center-in-flex-col bg-w-56 md:w-64 lg:w-80 border gap-3 rounded-md hover-effect-white">
        <img className="rounded-sm h-24 lg:h-36" src={src} alt={title} />
        <h1 className="text-xs md:text-lg blue-color-text font-semibold">
          {title}
        </h1>
      </div>
    </>
  );
}

export default ProjectBox;

import ProjectBox from "./ProjectBox";

function ProjectComp() {
  return (
    <>
      <div className="size-full center-in-flex-col bg-white bg-opacity-35 gap-3">
        <h1 className="py-5 md:w-5/6 text-center w-full px-10 text-xs md:text-lg font-medium blue-color-text">
          I've curated a selection of noteworthy projects that I'm excited to
          share with you. Take a moment to explore them and feel free to reach
          out with any inquiries or feedback. I look forward to hearing from
          you!
        </h1>
        <div className="center-in-flex-row gap-2 flex-wrap">
          <a
            href="https://github.com/SneakyBuzZ/Google-Solutions-Final"
            target="_blank"
          >
            <ProjectBox src="/chatbot_ui.png" title="Chatbot UI" />
          </a>
          <a href="https://github.com/SneakyBuzZ/Compose-Camp" target="_blank">
            <ProjectBox src="/jazzbeat.png" title="Jazz Beat" />
          </a>
          <a
            href="https://github.com/SneakyBuzZ/ExpressWave-Blog-App"
            target="_blank"
          >
            <ProjectBox src="/expresswave.png" title="Express Wave" />
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectComp;

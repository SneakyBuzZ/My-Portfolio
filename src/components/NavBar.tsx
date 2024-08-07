const NavBar = () => {
  return (
    <div className="glassmorphism bg-stone-950 w-full flex justify-between items-center text-stone-300 py-5 px-6 sm:px-6 md:px-16 border-b border-b-stone-800">
      <img src="/images/logo.svg" alt="logo" width={30} />
      <ul className="flex items-center gap-5 md:gap-10">
        <a
          href="https://github.com/SneakyBuzZ"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-white cursor-pointer"
        >
          Github
        </a>

        <a
          href="https://drive.google.com/file/d/1tkuU12ursUIQZDUhfpdpxrgKAAiow1ba/view"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-white cursor-pointer"
        >
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/kaushik-katikala"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-white cursor-pointer hidden md:block"
        >
          LinkedIn
        </a>
        <a
          href="https://x.com/Sneaky_D_Buzz"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-white cursor-pointer hidden md:block"
        >
          X (Twitter)
        </a>
      </ul>
    </div>
  );
};

export default NavBar;

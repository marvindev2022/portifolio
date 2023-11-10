import Nav from "./Nav";

export default function Header({ selectedPage, setSelectedPage }: any) {
  const colorClasses = [
    "bg-black",
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-orange-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-w-500",
    "bg-indigo-500",
  ];

  let colorIndex = 0;

  const handleMouseEnter = () => {
    const colorChangeInterval = setInterval(() => {
      colorIndex = (colorIndex + 1) % colorClasses.length;
      document
        .getElementById("color-change-div")
        ?.classList.replace(
          colorClasses[
            (colorIndex - 1 + colorClasses.length) % colorClasses.length
          ],
          colorClasses[colorIndex]
        );
    }, 100);

    document
      .getElementById("color-change-div")
      ?.addEventListener("mouseleave", () => {
        clearInterval(colorChangeInterval);
        document
          .getElementById("color-change-div")
          ?.classList.remove(...colorClasses);
        document.getElementById("color-change-div")?.classList.add("bg-black");
      });
  };

  return (
    <header className="w-full h-24 xl:py-8 xl:px-32 sm:p-2 flex justify-between items-center mb:p-2 ">
      <nav className="flex justify-between items-center">
        <ul className="flex justify-between items-center">
          <li
            onClick={() => setSelectedPage("home")}
            className={`xl:mx-5 sm:mx-2 mx-1 ${
              selectedPage === "home" && "underline"
            } hover:underline`}
          >
            Home
          </li>
          <a href="#about">
            <li
              onClick={() => setSelectedPage("about")}
              className={`xl:mx-5 sm:mx-2 mx-1 ${
                selectedPage === "about" && "underline"
              } hover:underline`}
            >
              About
            </li>
          </a>

          <li
            onClick={() => setSelectedPage("projects")}
            className={`xl:mx-5 sm:mx-2 mx-1 ${
              selectedPage === "projects" && "underline"
            } hover:underline`}
          >
            Projects
          </li>
          <li
            onClick={() => setSelectedPage("articles")}
            className={`xl:mx-5 sm:mx-2 mx-1 ${
              selectedPage === "articles" && "underline"
            } hover:underline`}
          >
            Articles
          </li>
        </ul>
      </nav>
      <span
        id="color-change-div"
        className={`w-16 h-16 mt-2 flex justify-center items-center rounded-[50%] border-2 bg-black font-[900] text-[1rem]
        } border-white hover:${colorClasses} text-[1.3rem] `}
        onMouseEnter={handleMouseEnter}
      >
        MR
      </span>
      <Nav />
    </header>
  );
}

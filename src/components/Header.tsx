import Nav from "./Nav";

export default function Header({ selectedPage, setSelectedPage }: any) {

  const colorClasses = [
    "bg-black",
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-orange-500",
    "bg-purple-500",
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
    <header className="w-full h-24 py-8 px-32 flex justify-between items-center ">
      <nav className="flex justify-between items-center">
        <ul className="flex justify-between items-center">
          <li
            onClick={() => setSelectedPage("home")}
            className={`mx-5 ${
              selectedPage === "home" && "underline"
            } hover:underline`}
          >
            Home
          </li>
          <li
            onClick={() => setSelectedPage("about")}
            className={`mx-5 ${
              selectedPage === "about" && "underline"
            } hover:underline`}
          >
            About
          </li>

          <li
            onClick={() => setSelectedPage("projects")}
            className={`mx-5 ${
              selectedPage === "projects" && "underline"
            } hover:underline`}
          >
            Projects
          </li>
          <li
            onClick={() => setSelectedPage("articles")}
            className={`mx-5 ${
              selectedPage === "articles" && "underline"
            } hover:underline`}
          >
            Articles
          </li>
        </ul>
      </nav>
      <div
        id="color-change-div"
        className={`w-16 h-16 mt-2 flex justify-center items-center rounded-[50%] border-2 bg-black text-bold
        } border-white hover:${colorClasses} text-center text-lg`}
        onMouseEnter={handleMouseEnter}
      >
        MR
      </div>
      <Nav/>
    </header>
  );
}

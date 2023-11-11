import { useState, useEffect } from "react";
import Nav from "./Nav";

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

const Header = ({ selectedPage, setSelectedPage }: any) => {
  const [colorIndex, setColorIndex] = useState(0);

  const handleMouseEnter = () => {
    const colorChangeInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colorClasses.length);
    }, 100);

    const resetColorChangeDiv = () => {
      const colorChangeDiv = document.getElementById("color-change-div");
      if (colorChangeDiv) {
        colorChangeDiv.classList.remove(...colorClasses);
        colorChangeDiv.classList.add("bg-black");
      }
    };

    document
      .getElementById("color-change-div")
      ?.addEventListener("mouseleave", () => {
        clearInterval(colorChangeInterval);
        resetColorChangeDiv();
      });
  };

  useEffect(() => {
    const colorChangeDiv = document.getElementById("color-change-div");
    if (colorChangeDiv) {
      colorChangeDiv.classList.replace(
        colorClasses[
          (colorIndex - 1 + colorClasses.length) % colorClasses.length
        ],
        colorClasses[colorIndex]
      );
    }
  }, [colorIndex]);

  const toggleMobileMenu = () => {
    const dialog = document.querySelector("dialog");
    dialog?.showModal();
  };

  const handlePageClick = (page: string) => {
    setSelectedPage(page);
    const dialog = document.querySelector("dialog");
    dialog?.close();
  };

  const renderNavLinks = () => {
    return ["home", "about", "projects", "articles"].map((page) => (
      <li
        key={page}
        onClick={() => handlePageClick(page)}
        className={`xl:mx-5 sm:mx-2 mx-1 ${
          selectedPage === page && "underline"
        } hover:underline`}
      >
        {page.charAt(0).toUpperCase() + page.slice(1)}
      </li>
    ));
  };

  return (
    <header className="w-full h-24 xl:py-8 xl:px-32 sm:p-2 flex justify-between items-center mb:p-2 z-10">
      <div className="block sm:hidden" onClick={toggleMobileMenu}>
        ☰
      </div>

      <dialog className="top-0 left-0 min-w-full min-h-full sm:hidden bg-black bg-opacity-0 z-20 relative">
        <div className="w-full min-h-screen flex justify-center items-center bg-black bg-opacity-0 ">
          <div className="bg-white w-[18.75rem] h-[500px] flex flex-col justify-center items-center rounded-xl ">
            <ul className="flex justify-between items-center flex-col">
              {renderNavLinks()}
            </ul>
            <Nav />
          </div>
        </div>
      </dialog>

      <nav className={`flex justify-between items-center  `}>
        <ul className={`hidden sm:flex justify-between items-center  `}>
          {renderNavLinks()}
        </ul>
      </nav>

      <span
        id="color-change-div"
        className={`w-16 h-16 mt-2 flex justify-center items-center rounded-[50%] border-2 bg-black font-[900] text-[1rem] border-white hover:${colorClasses} text-[1.3rem]`}
        onMouseEnter={handleMouseEnter}
      >
        MR
      </span>

      <span className="hidden sm:block">
        <Nav />
      </span>
    </header>
  );
};

export default Header;

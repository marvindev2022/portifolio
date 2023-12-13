import { useState, useEffect } from "react";
import Nav from "./Nav";
import RenderDialog from "./DialogMenu";
import { useContextPage } from "../context";

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

const Header = () => {
  const { isDarkMode, selectedPage, setSelectedPage} = useContextPage();
  const [colorIndex, setColorIndex] = useState(0);

  const handleMouseEnter = () => {
    const colorChangeInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colorClasses.length);
    }, 100);

    const resetColorChangeDiv = () => {
      const colorChangeDiv = document.getElementById("color-change-div");
      if (colorChangeDiv) {
        colorChangeDiv.classList.remove(...colorClasses);
        colorChangeDiv.classList.add(isDarkMode ? "bg-black" : "bg-white");
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
    const open = dialog?.open;
    if (!open) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }
  };

  const handlePageClick = (page: string) => {
    setSelectedPage(page);
    const dialog = document.querySelector("dialog");
    dialog?.close();
  };

  const renderNavLinks = () => {
    return ["Home", "Sobre", "Projetos",].map((page) => (
      <li
        key={page}
        onClick={() => handlePageClick(page)}
        className={`cursor-pointer text-xl xl:mx-5 md:mx-2 mx-1 font-extrabold font-secondary ${
          selectedPage === page && "underline"
        } hover:underline `}
      >
        {page.charAt(0).toUpperCase() + page.slice(1)}
      </li>
    ));
  };

  return (
    <header className="w-full h-24 px-5 gap-16 sm:gap-14 py-5 xl:py-8 xl:px-32 lg:p-2 flex  sm:justify-between items-center mb:p-2 z-10 hd:px-[10rem]">
      <span
        className="block lg:hidden text-[2rem] cursor-pointer"
        onClick={toggleMobileMenu}
      >
        ☰
      </span>

      <RenderDialog
        toggleMobileMenu={toggleMobileMenu}
        renderNavLinks={renderNavLinks}
      />
      <nav className={`flex justify-between items-center  `}>
        <ul className={`hidden lg:flex justify-between items-center  `}>
          {renderNavLinks()}
        </ul>
      </nav>

      <span
        id="color-change-div"
        className={`w-16 h-16 mt-2 flex justify-center items-center rounded-[50%] border-2 ${
          isDarkMode
            ? "bg-black  border-white "
            : "bg-light  border-dark text-black"
        } font-[900]  hover:${colorClasses} text-[1.3rem] `}
        onMouseEnter={handleMouseEnter}
      >
        {"</>"}
      </span>

      <span className="hidden lg:block">
        <Nav dialog={false} />
      </span>
    </header>
  );
};

export default Header;

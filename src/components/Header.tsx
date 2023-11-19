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
    const open = dialog?.open;
    console.log(open);
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
    return ["home", "about", "projects", "articles"].map((page) => (
      <li
        key={page}
        onClick={() => handlePageClick(page)}
        className={`cursor-pointer xl:mx-5 md:mx-2 mx-1 ${
          selectedPage === page && "underline"
        } hover:underline `}
      >
        {page.charAt(0).toUpperCase() + page.slice(1)}
      </li>
    ));
  };

  return (
    <header className="w-full h-24 px-14 gap-14 py-5 xl:py-8 xl:px-32 lg:p-2 flex justify-around  md:justify-between items-center mb:p-2 z-10">
      <span
        className="block lg:hidden text-[2rem] cursor-pointer"
        onClick={toggleMobileMenu}
      >
        ☰
      </span>

      <dialog className="top-0 left-0 min-w-full min-h-full lg:hidden bg-black bg-opacity-0 z-20 relative">
        <div className="w-full min-h-full flex justify-center items-center bg-black bg-opacity-0 ">
          <div className="bg-white w-[18.75rem] h-[31.25rem] flex flex-col justify-center items-center rounded-xl relative ">
            <strong
              onClick={toggleMobileMenu}
              className="text-black font-extrabold font-[main] absolute left-5 top-5 text-[1.5rem] cursor-pointer"
            >
              {"X"}
            </strong>
            <ul className="flex h-1/2 justify-center items-center flex-col gap-5">
              {renderNavLinks()}
            </ul>
            <Nav />
          </div>
        </div>
      </dialog>

      <nav className={`flex justify-between items-center  `}>
        <ul className={`hidden lg:flex justify-between items-center  `}>
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

      <span className="hidden lg:block">
        <Nav />
      </span>
    </header>
  );
};

export default Header;

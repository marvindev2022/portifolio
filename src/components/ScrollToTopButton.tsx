import { useState, useEffect } from "react";
import { useContextPage } from "../context";

function ScrollToTopButton() {
  const { isDarkMode } = useContextPage();
  const [isVisible, setIsVisible] = useState(false);

  const scrollFunction = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollY > windowHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <nav
          className={`fixed bottom-[10rem] right-[2.8125rem] z-50 border-2  w-20 h-20 rounded-t-[10rem] rounded-r-[-10rem] rounded-l-[10rem] ${
            isDarkMode ? "border-white bg-black" : "border-black bg-white "
          } `}
        >
          <button
            id="color-change-button"
            className={`mt-2 flex justify-center items-center rounded-[50%] border-2 fixed w-1 h-1  bottom-[12rem] right-20 scroll-to-top-btn   ${
              isDarkMode
                ? `bg-black  border-white text-white`
                : `bg-white  border-black text-black`
            } font-[900]   text-[1.3rem] `}
            onClick={scrollToTop}
          >
            TOP
          </button>
        </nav>
      )}
    </>
  );
}

export default ScrollToTopButton;

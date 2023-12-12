import { useEffect, useState } from "react";
import { useTheme } from "../context/theme";
import HireMe from "./HireMe";
import ScrollToTopButton from "./ScrollToTopButton";
interface Prop {
  active?: Boolean;
  scrollToTop?: Boolean;
}
export default function Footer({ active, scrollToTop }: Prop) {
  const { isDarkMode } = useTheme();
  const [assignature, setAssignature] = useState("");

  useEffect(() => {
    const assignatureText = "Marcus Roza";
    let currentIndex = 0;

    const assignatureInterval = setInterval(() => {
      setAssignature((prevAssignature) => {
        const currentLetter = assignatureText[currentIndex];
        currentIndex = (currentIndex + 1) % assignatureText.length;
        return prevAssignature + currentLetter;
      });
    }, 500);

    return () => {
      clearInterval(assignatureInterval);
    };
  }, []);
  return (
    <footer className="w-screen  flex flex-col lg:h-10 sm:flex-row  items-center  justify-center border-t-2  relative pt-5 lg:pt-12 ">
      {scrollToTop && <ScrollToTopButton />}
      {active && <HireMe />}
      {active && (
        <h1
          className={`hidden md:block font-assinature text-5xl absolute top-[-6rem]  left-10 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {assignature}
        </h1>
      )}
      <span className="w-full   flex lg:py-10 p-5 lg:px-32 items-center justify-center">
        2023 © All Rights Reserved.
      </span>
      <span className="w-full  flex lg:py-10 p-5 lg:px-32 items-center  justify-center gap-2">
        Built with <b className="text-red-500"> ❤️ </b> by Marcus Roza
      </span>
    </footer>
  );
}

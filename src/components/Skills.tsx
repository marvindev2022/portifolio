import { useEffect, useState } from "react";
import { skills } from "../data/skills";
import { useContextPage } from "../context";

export default function Skills() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isDarkMode } = useContextPage();

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollY = window.scrollY;

      const progress = scrollY / scrollHeight;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="skills"
      className="hidden xl:flex w-full min-h-full flex-col items-center pb-10 px-32 gap-10 relative "
    >
      <h1 className="text-7xl font-extrabold  pt-16 mb-[-3.125rem] font-main">
        Skills
      </h1>
      <div
        className={`w-[68.75rem] h-[56.25rem] rounded-[50%] relative mb-[-40px] ${
          isDarkMode ? "bg-gradient-radial-dark" : "bg-gradient-radial"
        }`}
      >
        {skills.map((skill, index) => {
          const { styleInitial, styleFinal } = skill as {
            styleInitial: { transform: string; transition: string };
            styleFinal?: { transform: string; transition: string };
          };

          const interpolatedStyle = {
            transform: `translate(${styleInitial.transform
              .split(",")
              .map((initial, i) => {
                const final = styleFinal?.transform?.split(",")[i] || initial;
                const initialValue = parseFloat(
                  initial.replace(/[^0-9-.]/g, "")
                );
                const finalValue = parseFloat(final.replace(/[^0-9-.]/g, ""));
                const interpolatedValue =
                  initialValue + (finalValue - initialValue) * scrollProgress;
                return `${interpolatedValue}px`;
              })
              .join(",")})`,
            transition: styleInitial.transition,
          };

          return (
            <div
              key={index}
              className={`w-32 h-20 rounded-full ${
                isDarkMode
                  ? "bg-white hover:bg-dark  text-dark hover:text-light hover:border-2 border-white"
                  : "bg-dark hover:bg-light  text-light hover:text-dark hover:border-2 border-dark"
              }    flex justify-center items-center absolute`}
              style={interpolatedStyle}
            >
              <h1 className="text-xl font-bold">{skill.name}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
}

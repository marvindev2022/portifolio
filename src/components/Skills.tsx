import { useEffect, useState } from "react";
import { skills } from "../data/skills";

export default function Skills() {
  const [inSkillScroll, setInSkillScroll] = useState(false);
  useEffect(()=>{
    if(window.scrollY >= 1058){
      setInSkillScroll(true)
    }else{
      setInSkillScroll(false)
    }
  },[])
  return (
    <section
      id="skills"
      className="hidden md:flex w-full min-h-full   flex-col items-center pb-10 px-32 gap-10 relative"
    >
      <h1 className="text-7xl font-extrabold  py-16">Skills</h1>

      <div
        style={{
          background: `repeating-radial-gradient(hsla(0,0%,100%,.5) 2px, #1b1b1b 8px, #1b1b1b 100px)`,
          width: `${100 + 11 * 100}px`,
          height: `${100 + 11 * 80}px`,
        }}
        className="bg-none rounded-[50%] relative"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`w-32 h-20 rounded-full bg-white flex justify-center items-center ${
              !inSkillScroll ? skill.position : "bottom-[45%] left-[44%]"
            } absolute right-[100px]`}
          >
            <h1 className="text-xl font-bold text-[#1b1b1b]">{skill.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
}
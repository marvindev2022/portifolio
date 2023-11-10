export default function Skills() {
  return (
    <section className="w-screen min-h-screen  flex flex-col items-center pb-10 px-32 gap-10 relative">
      <h1 className="text-7xl font-extrabold  py-16">Skills</h1>
      <section className="w-full h-full flex flex-wrap justify-center items-center gap-10">
        <div className="flex flex-col justify-around items-center w-[30%] h-full border-2 border-solid border-white">
          <h2 className="text-4xl font-bold text-[#ffff]">Frontend</h2>
          <span>aaa   </span>
        </div>
        <div className="flex flex-col justify-around items-center w-[30%] h-full border-2 border-solid border-white">
          <h2 className="text-4xl font-bold text-white">Backend</h2>
          <span>aaa   </span>
        </div>
        <div className="flex flex-col justify-around items-center w-[30%] h-full border-2 border-solid border-white">
          <h2 className="text-4xl font-bold text-white">Database</h2>
          <span>aaa   </span>
        </div>
      </section>
    </section>
  );
}

/* <div
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
            className={`w-36 h-20 rounded-[50%] bg-white flex justify-center items-center  bottom-[45%] left-[44%] absolute`}
           
          >
            <h1 className="text-xl font-bold text-[#1b1b1b]">{skill}</h1>
          </div>
        ))}
      </div> */

import { motion } from "framer-motion";
import profile from "./../assets/profile.png";
import background from "./../assets/background.png";
import icon from "./../assets/icon.svg";
import svg from "./../assets/animado.png";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <section className="min-w-full min-h-[90vh] items-center justify-between flex relative px-32 ">
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "300%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-[35rem] h-[35rem] border ml-16 mt-[-10rem] flex justify-center items-center relative rounded-[50%]"
        >
          <img src={profile} alt="profile" className="w-1full object-fill rounded-[50%]" />
        </div>
        <span className="rounded-[50%] text-white absolute bottom-[.9375rem] left-[.9375rem]">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <img src={svg} alt="svg" className="w-[18.75rem] h-[14.375rem] rounded-[50%]" />
          </motion.div>

          <p className="flex justify-center items-center w-24 h-24 bg-white text-black text-center rounded-[50%] absolute bottom-[4.051rem] left-[6.45rem] shadow-white">
            Hire Me
          </p>
        </span>
        <div className="w-[60%] sm:w-[80%] md:w-[60%] lg:w-[50%] h-1/2 flex flex-col mt-[-5rem] items-center">
          <strong className="w-9/12 text-justify text-6xl mb-5">
            Transformando visão em realidade com código.
          </strong>
          <span className="w-9/12 text-justify text-2xl">
            Como um habilidoso desenvolvedor full-stack, sou dedicado a transformar ideias em inovadoras aplicações web. Explore meus projetos e artigos mais recentes, demonstrando minha expertise em React.js e desenvolvimento web.
          </span>
          <span className="w-9/12 flex text-2xl mt-5">
            <button className="flex justify-center items-center gap-2 w-[9.5rem] sm:w-[14.5rem] md:w-[9.5rem] lg:w-[9.5rem] border h-14 bg-white text-black rounded-md">
              Resumo
              <img src={icon} />
            </button>
            <button className="w-[9.5rem] sm:w-[14.5rem] md:w-[9.5rem] lg:w-[9.5rem] h-14 bg-none underline text-white rounded-md">
              Contato
            </button>
          </span>
        </div>
      </section>
      <Footer />
    </>
  );
}

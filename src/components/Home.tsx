import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profile from "./../assets/profile.png";
import background from "./../assets/background.png";
import icon from "./../assets/icon.svg";
import svg from "./../assets/animado.png";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-4 md:px-32 relative mb-5 sm-mb-0">
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "300%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="flex items-center justify-center w-[20rem] h-[20rem] m-auto mt-10 md:m-0 xl:w-[35rem] xl:h-[35rem] md:w-[30rem] md:h-[rem] border xl:ml-16 xl:mt-[-10rem] rounded-[50%] relative"
        >
          <img
            src={profile}
            alt="profile"
            className="w-full object-fill rounded-[50%]"
          />
        </div>
        <Link
          to="https://api.whatsapp.com/resolve/?deeplink=%2F551197449-8322&not_found=1"
          target="_blank"
          className="hidden md:block w-auto h-auto top-[-7rem] rounded-[50%] text-white absolute md:top-[45.5rem] md:bottom-[.9375rem] md:left-[.9375rem]"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <img
              src={svg}
              alt="svg"
              className="md:w-[18.75rem] md:h-[14.375rem] rounded-[50%]"
            />
          </motion.div>
          <p className="flex justify-center items-center md:w-24 md:h-24 bg-white text-black text-center rounded-[50%] absolute bottom-[4.051rem] left-[6.45rem] shadow-white">
            Contate-me
          </p>
        </Link>
        <div className="m-auto mt-10 md:m-0 w-full md:w-[80%] md:w-[60%] md:w-[50%] h-1/2 flex flex-col md:mt-[-5rem] items-center">
          <strong className="w-full md:w-9/12 text-4xl md:text-6xl text-justify mb-5">
            Transformando visão em realidade com código.
          </strong>
          <span className="w-full md:w-9/12 mt-5 text-justify text-2xl">
            Como um habilidoso desenvolvedor full-stack, sou dedicado a
            transformar ideias em inovadoras aplicações web. Explore meus
            projetos e artigos mais recentes, demonstrando minha expertise em
            React.js e desenvolvimento web.
          </span>
          <span className="w-full md:w-9/12 flex mt-5 text-2xl gap-5">
            <Link
              to="https://docs.google.com/document/d/10aU8ROLUuQvDvtoNuJvvC8p1GKYZJQrWzwO8fJKWLjQ/edit"
              target="_blank"
              className="flex items-center gap-2 w-[9.5rem] md:w-[14.5rem] md:w-[9.5rem] md:w-[9.5rem] h-14 bg-white text-black rounded-md mr-5 border"
            >
              <p>Curriculo</p>
              <img src={icon} alt="icon" />
            </Link>
            <Link
              to="https://api.whatsapp.com/resolve/?deeplink=%2F551197449-8322&not_found=1"
              target="_blank"
              className="flex items-center w-[9.5rem] md:w-[14.5rem] md:w-[9.5rem] md:w-[9.5rem] h-14 underline text-white bg-none rounded-md"
            >
              Contato
            </Link>
          </span>
        </div>
      </section>
      <Footer />
    </>
  );
}

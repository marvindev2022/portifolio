import { motion } from "framer-motion";
import profile from "./../assets/profile.png";
import background from "./../assets/background.png";
import icon from "./../assets/icon.svg";
import svg from "./../assets/animado.png";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()
  return (
    <>
      <section className="w-full min-h-[90vh] items-center justify-between flex relative px-32 sm:flex-col xl:flex-row">
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "300%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="xl:w-[35rem] xl:h-[35rem] sm:w-[30rem] sm:h-[rem] border xl:ml-16 xl:mt-[-10rem] flex justify-center items-center relative rounded-[50%]"
        >
          <img
            src={profile}
            alt="profile"
            className="w-full object-fill rounded-[50%]  "
          />
        </div>
        <Link  to="https://api.whatsapp.com/resolve/?deeplink=%2F551197449-8322&not_found=1" target="_blank" className="rounded-[50%] text-white absolute bottom-[.9375rem] left-[.9375rem]">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <img
              src={svg}
              alt="svg"
              className="w-[18.75rem] h-[14.375rem] rounded-[50%]"
            />
          </motion.div>

          <p className="flex justify-center items-center w-24 h-24 bg-white text-black text-center rounded-[50%] absolute bottom-[4.051rem] left-[6.45rem] shadow-white">
            Contate-me
          </p>
        </Link>
        <div className="w-[60%] sm:w-[80%] md:w-[60%] lg:w-[50%] h-1/2 flex flex-col mt-[-5rem] items-center">
          <strong className="w-9/12 text-justify text-6xl mb-5">
            Transformando visão em realidade com código.
          </strong>
          <span className="w-9/12 text-justify text-2xl">
            Como um habilidoso desenvolvedor full-stack, sou dedicado a
            transformar ideias em inovadoras aplicações web. Explore meus
            projetos e artigos mais recentes, demonstrando minha expertise em
            React.js e desenvolvimento web.
          </span>
          <span className="w-9/12 flex text-2xl mt-5 gap-5">
            <Link to="https://docs.google.com/document/d/10aU8ROLUuQvDvtoNuJvvC8p1GKYZJQrWzwO8fJKWLjQ/edit" target="_blank"  className="flex justify-center items-center gap-2 w-[9.5rem] sm:w-[14.5rem] md:w-[9.5rem] lg:w-[9.5rem] border h-14 bg-white text-black rounded-md mr-5">
              Resumo
              <img src={icon} />
            </Link>
            <Link to="https://api.whatsapp.com/resolve/?deeplink=%2F551197449-8322&not_found=1" target="_blank" className="flex w-[9.5rem] sm:w-[14.5rem] md:w-[9.5rem] lg:w-[9.5rem] h-14 bg-none underline text-white rounded-md items-center">
              Contato
            </Link>
          </span>
        </div>
      </section>
      <Footer />
    </>
  );
}

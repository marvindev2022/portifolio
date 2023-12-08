import icon from "./../assets/icon.svg";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-4 md:px-32 relative mb-5 sm-mb-0">
        <div className="bg-[url('https://f005.backblazeb2.com/file/mvr-portfolio/background.png')]  bg-center bg-no-repeat flex items-center justify-center w-[20rem] h-[20rem] m-auto mt-10 md:m-0 xl:w-[35rem] xl:h-[35rem] md:w-[30rem] md:h-[rem] border xl:ml-16 xl:mt-[-10rem] rounded-[50%] relative">
          <img
            src="https://f005.backblazeb2.com/file/mvr-portfolio/profile.png"
            alt="profile"
            className="w-full object-fill rounded-[50%]"
          />
        </div>
        <div className="m-auto mt-10 md:m-0 w-full md:w-[80%] sm:w-[60%] lg:w-[50%] h-1/2 flex flex-col md:mt-[-5rem] items-center">
          <strong className="w-full md:w-9/12 text-4xl md:text-6xl text-center sm:text-justify mb-5">
            Transformando visão em realidade com código.
          </strong>
          <span className="w-full md:w-9/12 mt-5 text-center sm:text-justify text-2xl">
            Como um habilidoso desenvolvedor full-stack, sou dedicado a
            transformar ideias em inovadoras aplicações web. Explore meus
            projetos e artigos mais recentes, demonstrando minha expertise em
            React.js e desenvolvimento web.
          </span>
          <span className="w-full  justify-center items-center md:justify-start md:items-start md:w-9/12 flex mt-5 text-2xl sm:gap-5">
            <Link
              to="https://docs.google.com/document/d/10aU8ROLUuQvDvtoNuJvvC8p1GKYZJQrWzwO8fJKWLjQ/edit?usp=sharing"
              target="_blank"
              className="flex items-center justify-center gap-2 w-[9.5rem] sm:w-[14.5rem] lg:w-[9.5rem] md:w-[9.5rem] h-14 bg-white text-black rounded-md mr-5 border"
            >
              <p>Curriculo</p>
              <img src={icon} alt="icon" />
            </Link>
            <Link
              to="https://api.whatsapp.com/send?phone=5521964642376"
              target="_blank"
              className="flex items-center justify-center text-center w-[9.5rem] sm:w-[14.5rem] lg:w-[9.5rem] md:w-[9.5rem] h-14 underline text-white bg-none rounded-md"
            >
              Contato
            </Link>
          </span>
        </div>
      </section>
      <Footer active={true} />
    </>
  );
}

import { useEffect, useState } from "react";
import image from "../assets/profile.png";
import { useContextPage } from "../context";
import Footer from "./Footer";
import Skills from "./Skills";

function formatarNumero(number: number) {
  if (number < 10) {
    return `0${number}`;
  } else {
    return number;
  }
}

export default function About() {
  const { isDarkMode, theme } = useContextPage();
  const [voluntaryProjects, setVoluntaryProjects] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [experienceYears, setExperienceYears] = useState(0);

  useEffect(() => {
    const voluntaryInterval = setInterval(() => {
      if (voluntaryProjects < 2) {
        setVoluntaryProjects((prev) => prev + 1);
      } else {
        clearInterval(voluntaryInterval);
      }
    }, 500);

    const completedInterval = setInterval(() => {
      if (completedProjects < 10) {
        setCompletedProjects((prev) => prev + 1);
      } else {
        clearInterval(completedInterval);
      }
    }, 500);

    const experienceInterval = setInterval(() => {
      if (experienceYears < 1) {
        setExperienceYears((prev) => prev + 1);
      } else {
        clearInterval(experienceInterval);
      }
    }, 500);

    return () => {
      clearInterval(voluntaryInterval);
      clearInterval(completedInterval);
      clearInterval(experienceInterval);
    };
  }, [voluntaryProjects, completedProjects, experienceYears]);

  return (
    <section
      id="about"
      className="w-full min-h-full text-center xl:text-justify h-full md:flex md:flex-col  md:items-center pt-10 md:px-32 xl:px-10 hd:px-20 relative"
    >
      <h1 className="mx-auto text-center sm:text-justify px-5 text-7xl font-extrabold mb-20 ">
        A paixão alimenta o propósito!
      </h1>

      <div className=" flex flex-col lg:flex-row w-[400px] sm:w-full  gap-10 xl:gap-[6.5rem] mb-1 mx-auto sm:justify-around sm:items-center overflow-hidden hd:px-[10rem ] sm:py-5 pb-10">
        <div
          className={`flex flex-col   items-start px-5 ${
            isDarkMode ? "text-gray-100" : "text-black"
          }  md:w-[33.5625rem] md:h-[36.5625rem] hd:w-[40rem]  `}
        >
          <h2 className="w-[33.5625rem] hd:w-[40rem] text-start   md:text-justify text-2xl font-extrabold my-4">
            Biografia
          </h2>
          <p className="sm:w-[33.5625rem] hd:w-[40rem] text-justify font-medium text-xl">
            Oi, eu sou{" "}
            <strong className="font-extrabold  font-[inter]">
              Marcus Roza
            </strong>
            , um desenvolvedor de software web com paixão por criar experiências
            digitais bonitas, funcionais e centradas no usuário. Com 1 ano de
            experiência no campo. Estou sempre à procura de formas novas e
            inovadoras de dar vida às visões dos meus clientes.
          </p>
          <p className="sm:w-[33.5625rem] hd:w-[40rem] text-justify font-medium text-xl my-4">
            Eu acredito que o design é mais do que apenas fazer as coisas
            parecerem bonitas – é sobre resolver problemas e criar experiências
            intuitivas e agradáveis para os usuários.
          </p>
          <p className="sm:w-[33.5625rem] hd:w-[40rem] text-justify font-medium text-xl">
            Quer esteja trabalhando em um site, aplicativo móvel ou outro
            produto digital, trago meu compromisso com a excelência em design e
            o pensamento centrado no usuário para cada projeto em que trabalho.
            Estou ansioso para a oportunidade de trazer minhas habilidades e
            paixão para o seu próximo projeto.
          </p>
        </div>
        <div
          className={`w-[21.5rem] m-auto h-[32rem] sm:w-[27.5rem] sm:h-[42rem] xl:w-[93rem] hd:w-[31.5rem] col-span-3 rounded-2xl rounded-bl-[5%] rounded-t-r-[10%] rounded-b-r-[10%] border-2 border-solid ${
            isDarkMode ? "bg-light border-dark" : "bg-dark border-white"
          } pl-[.0625rem] pt-[.0625rem] pb-2 pr-1 xl:col-span-4  relative  `}
        >
          <div
            className={`mt-[-0.5rem] ml-[-.1rem] flex justify-center items-center w-full h-full  border-2 ${
              isDarkMode ? "bg-dark border-white" : "bg-light border-dark"
            } rounded-2xl `}
          >
            <div
              className={`w-full h-full bg-gradient-to-b from-[${
                isDarkMode ? "#0000007b" : "#ffffffff"
              }] via-transparent to-${theme} rounded-2 `}
            >
              <img
                src={image}
                alt="Marcus Roza"
                className="w-[18rem] h-[22rem] md:w-[26rem] md:h-[30rem]  hd:w-[28rem] hd:h-[32rem] rounded-[50%] absolute top-16 left-5 sm:left-6 md:left-6 lg:left-5 xl:left-14 hd:left-6  "
              />
            </div>
          </div>
        </div>
        <div className="sm:w-[20.5625rem] lg:h-[42rem] xl:w-50  flex  lg:flex-row  gap-8 relative justify-center items-center ">
          <span className="flex flex-col   items-center  sm:block lg:absolute sm:top-5 ">
            <b className="flex font-extrabold text-4xl sm:text-7xl font-main  ">
              {formatarNumero(voluntaryProjects)} +
            </b>
            <p className=" w-[80px] sm:w-full">Projetos Voluntários</p>
          </span>
          <span className="flex flex-col items-center sm:block lg:absolute sm:top-[40%] bottom-[40%] ">
            <b className="flex font-extrabold text-4xl sm:text-7xl font-main  ">
              {formatarNumero(completedProjects)} +
            </b>
            <p className=" w-[80px] sm:w-full">Projetos Concluídos</p>
          </span>
          <span className="flex flex-col items-center sm:block lg:absolute sm:bottom-5 ">
            <b className="flex font-extrabold text-4xl sm:text-7xl font-main  ">
              {formatarNumero(experienceYears)} +
            </b>
            <p className=" w-[80px] sm:w-full">Anos de Experiência</p>
          </span>
        </div>
      </div>
      <Skills />
      <Footer scrollToTop={true} />
    </section>
  );
}

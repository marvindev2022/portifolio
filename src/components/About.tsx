import image from "../assets/profile.png";
import Footer from "./Footer";
export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-full text-center xl:text-justify h-full md:flex md:flex-col  md:items-center pt-10 md:px-32"
    >
      <h1 className="mx-auto text-center sm:text-justify px-5 text-7xl font-extrabold mb-20 ">
        A paixão alimenta o propósito!
      </h1>
      <div className=" flex flex-col md:flex-row w-[400px] sm:w-full max-h-full gap-10 mb-10 p-5">
        <div className="flex flex-col px-5 text-gray-100  md:w-[36.5625rem] md:h-[36.5625rem] md:ml-[-2rem] md:mr-8">
          <h2 className="w-[36.5625rem] text-start   md:text-justify text-2xl font-extrabold my-4">
            Biografia
          </h2>
          <p className="sm:w-[36.5625rem] text-justify font-medium text-xl">
            Oi, eu sou{" "}
            <strong className="font-extrabold text-white font-[inter]">
              Marcus Roza
            </strong>
            , um desenvolvedor de software web com paixão por criar experiências
            digitais bonitas, funcionais e centradas no usuário. Com 1 ano de
            experiência no campo. Estou sempre à procura de formas novas e
            inovadoras de dar vida às visões dos meus clientes.
          </p>
          <p className="sm:w-[36.5625rem] text-justify font-medium text-xl my-4">
            Eu acredito que o design é mais do que apenas fazer as coisas
            parecerem bonitas – é sobre resolver problemas e criar experiências
            intuitivas e agradáveis para os usuários.
          </p>
          <p className="sm:w-[36.5625rem] text-justify font-medium text-xl">
            Quer esteja trabalhando em um site, aplicativo móvel ou outro
            produto digital, trago meu compromisso com a excelência em design e
            o pensamento centrado no usuário para cada projeto em que trabalho.
            Estou ansioso para a oportunidade de trazer minhas habilidades e
            paixão para o seu próximo projeto.
          </p>
        </div>
        <div className="w-[21.5rem] m-auto h-[32rem] sm:w-[36.5rem] sm:h-[42rem]  col-span-3 rounded-2xl rounded-bl-[5%] rounded-t-r-[10%] rounded-b-r-[10%] border-2 border-solid border-black bg-white pl-[.0625rem] pt-[.0625rem] pb-2 pr-1 xl:col-span-4  relative ">
          <div className="mt-[-0.5rem] ml-[-.1rem] flex justify-center items-center w-full h-full bg-[#1b1b1b]  border-2 border-white rounded-2xl p-5">
            <div className="w-full h-full bg-gradient-to-b from-[#000007dd] via-transparent to-black rounded-2xl">
              <img
                src={image}
                alt="Marcus Roza"
                className="w-[16rem] h-[20rem] sm:w-[26rem] sm:h-[30rem] rounded-[50%] absolute top-16  left-1/2 transform -translate-x-1/2 right-1/2  object-cover "
              />
            </div>
          </div>
        </div>
        <div className="sm:w-[36.5625rem] sm:h-[42rem] flex  sm:flex-col gap-8 relative justify-center items-center   ">
          <span className="flex flex-col  items-center  sm:block sm:absolute sm:top-5">
            <b className="flex  justify-center items-center font-extrabold text-4xl sm:text-7xl font-special  ">
              02+
            </b>
            <p className=" w-[80px] sm:w-full">Projetos Voluntários</p>
          </span>
          <span className="flex flex-col items-center sm:block sm:absolute sm:top-[40%] bottom-[40%]">
            <b className="flex font-extrabold text-4xl sm:text-7xl font-special  ">
              10+
            </b>
            <p className=" w-[80px] sm:w-full">Projetos Concluídos</p>
          </span>
          <span className="flex flex-col items-center sm:block sm:absolute sm:bottom-5">
            <b className="flex font-extrabold text-4xl sm:text-7xl font-special  ">
              01+
            </b>
            <p className=" w-[80px] sm:w-full">Anos de Experiência</p>
          </span>
        </div>
      </div>
      
      <Footer />
    </section>
  );
}

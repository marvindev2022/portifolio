import image from "../assets/image-PhotoRoom.png";
import Footer from "./Footer";
export default function About() {
  return (
    <section id="about" className="w-full min-h-screen h-full flex flex-col  items-center pt-10 px-32">
      <h1 className="text-7xl font-extrabold mb-10">
        A paixão alimenta o propósito!
      </h1>
      <div className=" flex w-full max-h-full gap-10 mb-10">
        <div className="flex flex-col  text-gray-100  w-[36.5625rem] h-[36.5625rem] ml-[-2rem] mr-8">
          <h2 className="w-[36.5625rem] text-justify text-2xl font-extrabold my-4">
            Biografia
          </h2>
          <p className="w-[36.5625rem] text-justify font-medium text-xl">
            Oi, eu sou{" "}
            <strong className="font-extrabold text-white font-[inter]">
              Marcus Roza
            </strong>
            , um desenvolvedor de software web com paixão por criar experiências
            digitais bonitas, funcionais e centradas no usuário. Com 1 ano de
            experiência no campo. Estou sempre à procura de formas novas e
            inovadoras de dar vida às visões dos meus clientes.
          </p>
          <p className="w-[36.5625rem] text-justify font-medium text-xl my-4">
            Eu acredito que o design é mais do que apenas fazer as coisas
            parecerem bonitas – é sobre resolver problemas e criar experiências
            intuitivas e agradáveis para os usuários.
          </p>
          <p className="w-[36.5625rem] text-justify font-medium text-xl">
            Quer esteja trabalhando em um site, aplicativo móvel ou outro
            produto digital, trago meu compromisso com a excelência em design e
            o pensamento centrado no usuário para cada projeto em que trabalho.
            Estou ansioso para a oportunidade de trazer minhas habilidades e
            paixão para o seu próximo projeto.
          </p>
        </div>
        <div className="w-[36.5rem]  h-[42rem]  col-span-3 rounded-2xl rounded-bl-[5%] rounded-t-r-[10%] rounded-b-r-[10%] border-2 border-solid border-black bg-white pl-[1px] pt-[1px] pb-2 pr-1 xl:col-span-4  relative ">
          <div className="mt-[-0.5rem] ml-[-.1rem] flex justify-center items-center w-full h-full bg-[#1b1b1b]  border-2 border-white rounded-2xl p-5">
            <div className="w-full h-full bg-gradient-to-b from-[#000007dd] via-transparent to-black rounded-2xl">
              <img
                src={image}
                alt="Marcus Roza"
                className="w-[448px] h-[32rem] rounded-[50%] absolute top-16  left-2  "
              />
            </div>
          </div>
        </div>
        <div className="w-[36.5625rem] h-[42rem] flex flex-col relative items-center   ">
          <span className=" absolute top-5">
            <b className="font-extrabold text-7xl font-special  ">02 +</b>
            <p>Projetos Voluntários</p>
          </span>
          <span className=" absolute top-[40%] bottom-[40%]">
            <b className="font-extrabold text-7xl font-special  ">10 +</b>
            <p>Projetos Concluídos</p>
          </span>
          <span className=" absolute bottom-5">
            <b className="font-extrabold text-7xl font-special  ">01 +</b>
            <p>Anos de Experiência</p>
          </span>
        </div>
      </div>
      <Footer />
    </section>
  );
}

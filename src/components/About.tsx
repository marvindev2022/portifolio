import image from "../assets/image-PhotoRoom.png";
export default function About() {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center py-24 px-32">
      <h1 className="text-7xl font-extrabold mb-20">Propósito</h1>
      <div className=" flex w-full h-full gap-10">
        <div className="flex flex-col  text-gray-300  w-[36.5625rem] h-[36.5625rem] ml-[-2rem] mr-8">
          <h2 className="w-[36.5625rem] text-justify text-lg font-extrabold my-4">
            Biografia
          </h2>
          <p className="w-[36.5625rem] text-justify font-medium text-2xl">
            Oi, eu sou{" "}
            <strong className="font-extrabold text-white font-[inter]">
              Marcus Roza
            </strong>
            , um desenvolvedor de software web com paixão por criar experiências
            digitais bonitas, funcionais e centradas no usuário. Com 1 ano de
            experiência no campo. Estou sempre à procura de formas novas e
            inovadoras de dar vida às visões dos meus clientes.
          </p>
          <p className="w-[36.5625rem] text-justify font-medium text-2xl my-4">
            Eu acredito que o design é mais do que apenas fazer as coisas
            parecerem bonitas – é sobre resolver problemas e criar experiências
            intuitivas e agradáveis para os usuários.
          </p>
          <p className="w-[36.5625rem] text-justify font-medium text-2xl">
            Quer esteja trabalhando em um site, aplicativo móvel ou outro
            produto digital, trago meu compromisso com a excelência em design e
            o pensamento centrado no usuário para cada projeto em que trabalho.
            Estou ansioso para a oportunidade de trazer minhas habilidades e
            paixão para o seu próximo projeto.
          </p>
        </div>
        <div className="w-[36.5rem]  h-[42rem]  col-span-3 rounded-2xl rounded-bl-[5%] rounded-t-r-[10%] rounded-b-r-[10%] border-2 border-solid border-black bg-white pl-[1px] pt-[1px] pb-2 pr-1 xl:col-span-4  relative ">
          <div className="mt-[-0.5rem] ml-[-.1rem] flex justify-center items-center w-full h-full bg-[#000007dd]  border-2 border-white rounded-2xl p-5">
          <div className="w-full h-full bg-gradient-to-b from-[#000007dd] via-transparent to-black">

              <img
                src={image}
                alt="Marcus Roza"
                className="w-[448px] h-[32rem] rounded-[50%] absolute top-16  left-8  "
              />
            </div>
          </div>
        </div>
        <div className="w-[36.5625rem] h-[36.5625rem] flex flex-col justify-around items-center ">
          <span>
            <b className="font-extrabold text-7xl font-special ">40 +</b>
            <p>Clientes Satisfeitos</p>
          </span>
          <span>
            <b className="font-extrabold text-7xl font-special ">50 +</b>
            <p>Projetos Concluídos</p>
          </span>
          <span>
            <b className="font-extrabold text-7xl font-special ">1 +</b>
            <p>Anos de Experiência</p>
          </span>
        </div>
      </div>
    </section>
  );
}

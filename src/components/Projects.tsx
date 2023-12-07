import sabores1 from "../assets/sabores/sabores.png";
import sabores2 from "../assets/sabores/Captura de tela de 2023-12-06 16-49-59.png";
import sabores3 from "../assets/sabores/Captura de tela de 2023-12-06 16-50-20.png";
import backtome1 from "../assets/backtome/backtome.png";
import backtome2 from "../assets/backtome/Captura de tela de 2023-12-06 16-34-57.png";
import backtome3 from "../assets/backtome/Captura de tela de 2023-12-06 16-35-03.png";
import maxitorque1 from "../assets/maxitorque/maxitorque.png";
import maxitorque2 from "../assets/maxitorque/Captura de tela de 2023-12-06 16-52-05.png";
import maxitorque3 from "../assets/maxitorque/Captura de tela de 2023-12-06 16-52-21.png";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCards";
const size = window.innerWidth < 768;



export default function RenderProjects() {
  const [currentImage, setCurrentImage] = useState(0);
  const imagesBTM = [backtome1, backtome2, backtome3];
  const imagesSabores = [sabores1, sabores2, sabores3];
  const imagesMaxiTorque = [maxitorque1, maxitorque2, maxitorque3];

  useEffect(() => {
    if(size) return;
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imagesBTM.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const renderImgBTM = imagesBTM[currentImage];
  const renderImgSabores = imagesSabores[currentImage];
  const renderImgMaxiTorque = imagesMaxiTorque[currentImage];
  return (
    <section className="w-full h-full flex flex-col justify-center items-center px-32 py-5 font-extrabold ">
      <h1 className="text-[4rem] mb-8 max-w-[50rem] text-center">
        A imaginação supera o conhecimento!
      </h1>
      <div className="w-full h-full flex flex-col justify-center items-center mb-20 gap-10 px-10 ">
        <div className="w-[90vw] mx-10 sm:mx-0 sm:w-full h-full flex justify-center items-center bg-white pb-2 px-1 rounded-xl">
          <ProjectCard
            status="distac"
            statusText="Projeto em Destaque"
            image={renderImgBTM}
            title="BackToMe."
            description={`O projeto "BackToMe" é uma plataforma abrangente que visa facilitar a busca por animais perdidos e promover a adoção de animais disponíveis. Com um enfoque no desenvolvimento full stack, a equipe do BackToMe criou uma solução robusta que abrange todos os aspectos da experiência do usuário, desde o frontend até o backend.
            `}
            githubLink="https://github.com/marvindev2022/backtome"
            projectLink="https://back-to-me.vercel.app/"
          />
        </div>

        <div className="w-[90vw] mx-10 sm:mx-0 sm:w-full h-full flex justify-center items-center bg-white pb-1 pr-1 rounded-xl">
          <ProjectCard
            status="distac"
            statusText="Projeto pessoal"
            description="Esta plataforma é um refúgio virtual para todos os apaixonados por culinária que desejam compartilhar e descobrir receitas deliciosas. Aqui, conectamos entusiastas gastronômicos para trocar experiências, interagir por meio de comentários, marcar suas receitas favoritas e desbloquear sua imaginação na criação de pratos únicos."
            image={renderImgSabores}
            title="Sabores Compartilhado"
            githubLink="https://github.com/marvindev2022/sabores-compartilhado"
            projectLink="https://sabores-compartilhados.netlify.app/"
          />
        </div>

          <div className="w-[90vw] mx-10 sm:mx-0 sm:w-full h-full flex justify-center items-center bg-white pb-1 pr-1 rounded-xl">
            <ProjectCard
              status="distac"
              statusText="Projeto Freelancer"
              image={renderImgMaxiTorque}
              title="MaxiTorque Diesel"
              description={`O projeto "MaxiTorque" é uma iniciativa inovadora que representa um marco na área automotiva desde 1990. Desenvolvido com paixão e comprometimento, o MaxiTorque destaca-se como uma solução completa para entusiastas e profissionais do setor automotivo.`}
              githubLink="https://github.com/marvindev2022/MaxiTorque"
              projectLink="https://urchin-app-wij8q.ondigitalocean.app/"
            />
        </div>
      </div>
      <Footer />
    </section>
  );
}

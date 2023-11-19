import github from "../assets/github.svg";
import sabores from "../assets/sabores.png";
import backtome from "../assets/backtome.png";
import forum from "../assets/forum.png";
import maxitorque from "../assets/maxitorque.png";
import Footer from "./Footer";

function ProjectCard({
  status,
  statusText,
  image,
  title,
  description,
  githubLink,
  projectLink,
}: any) {
  return (
    <article
      className={`w-full h-full flex  bg-[#1b1b1b]  border-[.0625rem] border-white  mt-[-.225rem] ml-[-.225rem] rounded-lg ${
        !status ? "flex-col items-center " : "justify-center items-center"
      }`}
    >
      {status ? (
        <>
          <img
            src={image}
            alt="imagem"
            className="w-[40%] h-5/6 object-cover rounded-lg m-5 border-black hover:scale-[1.03] transition-all duration-500 ease-in-out"
          />
          <div className="flex flex-col w-1/2 min-h-full  object-fill  justify-around items-start  p-4 gap-10">
            <span className="text-3xl text-[aqua] font-[main] ">
              {statusText}
            </span>
            <strong className="text-4xl font-[main]">{title}</strong>
            <p className="text-2xl ">{description}</p>
            <nav className="mt-4 flex gap-2">
              <button className="ml-2 bg-white text-black rounded-lg p-2">
                <a href={projectLink} target="_blank" rel="noopener noreferrer">
                  Visitar Projeto
                </a>
              </button>
              <a href={githubLink} target="_blank">
                <img src={github} alt="github" className="w-10 h-10 " />
              </a>{" "}
            </nav>
          </div>
        </>
      ) : (
        <>
          <img
            src={image}
            alt="imagem"
            className=" h-[25rem] object-fill rounded-lg m-5 border-black hover:scale-[1.03] transition-all duration-500 ease-in-out"
          />
          <div className="w-11/12 h-full  flex flex-col justify-start items-start  p-4 gap-1">
            <strong className="text-2xl font-[main] px-5">{title}</strong>
            <nav className="w-full mt-4 flex justify-between p-5 ">
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline ml-2 px-2"
              >
                Visitar
              </a>
              <a href={githubLink} target="_blank">
                <img src={github} alt="github" className="w-10 h-10 " />
              </a>
            </nav>
          </div>
        </>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center px-32 py-5 font-extrabold ">
      <h1 className="text-[4rem] mb-8 max-w-[50rem] text-center">
        A imaginação supera o conhecimento!
      </h1>
      <div className="w-full h-full flex flex-col justify-center items-center mb-20 ">
        <div className="w-full h-full flex justify-center items-center bg-white pb-2 px-1 rounded-xl">
          <ProjectCard
            status="distac"
            statusText="Projeto em Destaque"
            image={backtome}
            title="BackToMe."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            githubLink="https://github.com/seu-usuario/backtome"
            projectLink="https://seu-usuario.github.io/backtome"
          />
        </div>

        <div className="w-full h-full flex justify-center items-center mt-8 gap-5">
          <div className="w-full h-full flex justify-center items-center bg-white pb-1 pr-1 rounded-xl">
            <ProjectCard
              image={sabores}
              title="Sabores Compartilhado"
              githubLink="https://github.com/seu-usuario/sabores-compartilhado"
              projectLink="https://seu-usuario.github.io/sabores-compartilhado"
            />
          </div>

          <div className="w-full h-full flex justify-center items-center bg-white pb-1 pr-1 rounded-xl">
            <ProjectCard
              image={forum}
              title="Forum LMS "
              githubLink="https://github.com/seu-usuario/forum-sass"
              projectLink="https://elegant-meringue-f75e57.netlify.app/"
            />
          </div>
        </div>

        <div className="w-full h-full flex justify-center items-center mt-8 gap-5">
          <div className="w-full h-full flex justify-center items-center bg-white pb-1 pr-1 rounded-xl">
            <ProjectCard
              status="distac"
              statusText="Projeto Freelancer"
              image={maxitorque}
              title="Landing page MaxiTorque"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
              githubLink="https://github.com/marvindev2022/MaxiTorque"
              projectLink="https://urchin-app-wij8q.ondigitalocean.app/"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

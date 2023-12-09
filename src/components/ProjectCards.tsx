import github from "../assets/github.svg";

interface PropsCard {
  status?: string;
  statusText?: string;
  image: string;
  title: string;
  description?: string;
  githubLink: string;
  projectLink: string;
}

export default function ProjectCard({
  status,
  statusText,
  image,
  title,
  description,
  githubLink,
  projectLink,
}: PropsCard) {
  return (
    <article
      className={`flex-col lg:flex-row lg:w-full lg:h-full flex  bg-[#1b1b1b]  border-[.0625rem] border-white  lg:mt-[-.225rem] lg:ml-[-.225rem] rounded-lg ${
        !status ? "flex-col items-center " : "justify-center items-center"
      } px-5 lg:px-0`}
    >
      <img
        src={image}
        alt="imagem"
        className="lg:w-3/6 lg:h-5/6 lg:object-cover rounded-lg m-5 border-dark hover:scale-[1.03] transition-all duration-500 ease-in-out"
      />
      <div className="flex flex-col lg:w-1/2 lg:min-h-full  lg:object-fill  justify-around items-start  p-4 gap-5">
        <span className="text-3xl text-[aqua] font-[main] ">{statusText}</span>
        <strong className="text-4xl font-[main]">{title}</strong>
        <p className="hidden lg:block text-2xl ">{description}</p>
        <nav className="mt-4 flex gap-2">
          <button className="ml-2 bg-white text-dark rounded-lg p-2">
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              Visitar Projeto
            </a>
          </button>
          <a href={githubLink} target="_blank">
            <img src={github} alt="github" className="w-10 h-10 " />
          </a>
        </nav>
      </div>
    </article>
  );
}

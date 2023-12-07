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
      className={`flex-col sm:flex-row sm:w-full sm:h-full flex  bg-[#1b1b1b]  border-[.0625rem] border-white  sm:mt-[-.225rem] sm:ml-[-.225rem] rounded-lg ${
        !status ? "flex-col items-center " : "justify-center items-center"
      } px-5 sm:px-0`}
    >
      <img
        src={image}
        alt="imagem"
        className="sm:w-[40%] sm:h-5/6 sm:object-cover rounded-lg m-5 border-black hover:scale-[1.03] transition-all duration-500 ease-in-out"
      />
      <div className="flex flex-col sm:w-1/2 sm:min-h-full  sm:object-fill  justify-around items-start  p-4 gap-5">
        <span className="text-3xl text-[aqua] font-[main] ">{statusText}</span>
        <strong className="text-4xl font-[main]">{title}</strong>
        <p className="hidden sm:block text-2xl ">{description}</p>
        <nav className="mt-4 flex gap-2">
          <button className="ml-2 bg-white text-black rounded-lg p-2">
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

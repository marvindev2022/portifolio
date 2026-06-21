import Nav from "./Nav";
import RenderDialog from "./DialogMenu";
import { useContextPage } from "../context";

const Header = () => {
  const { isDarkMode, selectedPage, setSelectedPage} = useContextPage();

  const toggleMobileMenu = () => {
    const dialog = document.querySelector("dialog");
    const open = dialog?.open;
    if (!open) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }
  };

  const handlePageClick = (page: string) => {
    setSelectedPage(page);
    const dialog = document.querySelector("dialog");
    dialog?.close();
  };

  const navItems: { key: string; label: string }[] = [
    { key: "Home", label: "Home" },
    { key: "Sobre", label: "Sobre" },
    { key: "Projetos", label: "Projetos" },
    { key: "Contact", label: "Contato" },
  ];

  const renderNavLinks = () => {
    return navItems.map(({ key, label }) => (
      <li
        key={key}
        onClick={() => handlePageClick(key)}
        className={`cursor-pointer text-base xl:mx-5 md:mx-3 mx-1 font-semibold transition-colors duration-150 ${
          selectedPage === key
            ? "text-accent-light"
            : isDarkMode
            ? "text-muted hover:text-light"
            : "text-zinc-500 hover:text-dark"
        }`}
      >
        {label}
      </li>
    ));
  };

  return (
    <header className="w-full h-24 px-5 gap-16 sm:gap-14 py-5 xl:py-8 xl:px-32 lg:p-2 flex  sm:justify-between items-center mb:p-2 z-10 hd:px-[10rem]">
      <span
        className="block lg:hidden text-[2rem] cursor-pointer"
        onClick={toggleMobileMenu}
      >
        ☰
      </span>

      <RenderDialog
        toggleMobileMenu={toggleMobileMenu}
        renderNavLinks={renderNavLinks}
      />
      <nav className={`flex justify-between items-center  `}>
        <ul className={`hidden lg:flex justify-between items-center  `}>
          {renderNavLinks()}
        </ul>
      </nav>

      <span
        className={`font-mono text-sm font-bold select-none ${
          isDarkMode ? "text-accent-light" : "text-accent"
        }`}
      >
        {"<MR />"}
      </span>

      <span className="hidden lg:block">
        <Nav dialog={false} />
      </span>
    </header>
  );
};

export default Header;

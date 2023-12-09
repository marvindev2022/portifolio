import { useTheme } from "../context/theme";
import Nav from "./Nav";

interface PropsDialog {
  toggleMobileMenu: any;
  renderNavLinks: any;
}

export default function RenderDialog({
  toggleMobileMenu,
  renderNavLinks,
}: PropsDialog) {
  const {isDarkMode} = useTheme();
  return (
    <dialog className={`top-0 left-0 min-w-screen min-h-screen lg:hidden ${!isDarkMode ? 'bg-dark'  : 'bg-light'} bg-opacity-0 z-20 relative overflow-hidden`}>
      <div className={`w-screen min-h-screen flex justify-center items-center ${!isDarkMode ? 'bg-dark'  : 'bg-light'} bg-opacity-0 `}>
        <div className="bg-white w-[18.75rem] h-[31.25rem] flex flex-col justify-center items-center rounded-xl relative ">
          <strong
            onClick={toggleMobileMenu}
            className={`${!isDarkMode ? 'text-dark' : 'text-light'} font-extrabold font-[main] absolute left-5 top-5 text-[1.5rem] cursor-pointer`}
          >
            {"X"}
          </strong>
          <ul className="flex h-1/2 justify-center items-center flex-col gap-5">
            {renderNavLinks()}
          </ul>
          <Nav />
        </div>
      </div>
    </dialog>
  );
}

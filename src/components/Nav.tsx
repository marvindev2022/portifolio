// Nav.js
import { Link } from 'react-router-dom';
import { useTheme } from '../context/theme';

export default function Nav() {
  const { isDarkMode, toggleTheme, assets } = useTheme();

  return (
    <nav className={`flex justify-between items-center gap-8 p-5 ${isDarkMode ?  'dark':'light'}`}>
      <Link target="_blank" to="https://github.com/marvindev2022">
        <img className="cursor-pointer w-8 h-8" src={assets.github} alt="github" />
      </Link>
      <Link target="_blank" to="https://www.linkedin.com/in/marcus-roza/">
        <img className="cursor-pointer w-8 h-8" src={assets.linkedin} alt="linkedin" />
      </Link>
      <Link target="_blank" to="mailto:mavirolero@gmail.com">
        <img className="cursor-pointer w-8 h-8" src={assets.gmail} alt="curriculo" />
      </Link>
      <Link target="_blank" to="https://api.whatsapp.com/send?phone=5521964642376">
        <img className="cursor-pointer w-8 h-8" src={assets.whatsapp} alt="whatsapp" />
      </Link>
      <img
        onClick={toggleTheme}
        className="cursor-pointer w-8 h-8"
        src={assets.theme}
        alt="theme"
      />
    </nav>
  );
}

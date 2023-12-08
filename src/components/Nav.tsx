import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.dark.svg";
import cv from "../assets/gmail.svg";
import whatsapp from "../assets/whatsapp.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center gap-8  p-5">
      <Link target="_blank" to="https://github.com/marvindev2022">
        <img className="cursor-pointer w-8 h-8" src={github} alt="github" />
      </Link>
      <Link target="_blank" to="https://www.linkedin.com/in/marcus-roza/">
        <img className="cursor-pointer w-8 h-8" src={linkedin} alt="linkedin" />
      </Link>
      <Link
        target="_blank"
        to="mailto:mavirolero@gmail.com"
      >
        <img className="cursor-pointer w-8 h-8" src={cv} alt="curriculo" />
      </Link>
      <Link target="_blank" to="https://api.whatsapp.com/send?phone=5521964642376">
        <img className="cursor-pointer w-8 h-8" src={whatsapp} alt="whatsapp" />
      </Link>
    </nav>
  );
}

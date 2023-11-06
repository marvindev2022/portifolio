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
        to="https://docs.google.com/document/d/10aU8ROLUuQvDvtoNuJvvC8p1GKYZJQrWzwO8fJKWLjQ/edit"
      >
        <img className="cursor-pointer w-8 h-8" src={cv} alt="curriculo" />
      </Link>
      <Link target="_blank" to="https://wa.me/551197449-8322">
        <img className="cursor-pointer w-8 h-8" src={whatsapp} alt="whatsapp" />
      </Link>
    </nav>
  );
}

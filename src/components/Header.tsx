import  { Component } from "react";

export default class Header extends Component {
  constructor(props:any) {
    super(props);
    this.state = window.location.pathname
  }


  render() {
    const path = this.state;
    return (
      <header className="w-full h-10 py-5 px-10 flex justify-between items-center absolute">
        <nav className="flex justify-between items-center">
          <ul className="flex justify-between items-center">
            <li className="mx-5">
              <a
                className={`${path ==="/home" && "underline"} hover:underline`}
                href="home"
              >
                Home
              </a>
            </li>
            <li className="mx-5">
              <a
                className={`${path ==="/about" && "underline"} hover:underline`}
                href="about"
              >
                About
              </a>
            </li>
            <li className="mx-5">
              <a
                className={`${path ==="/skills" && "underline"} hover:underline`}
                href="skills"
              >
                Skills
              </a>
            </li>
            <li className="mx-5">
              <a
                className={`${path ==="/projects" && "underline"} hover:underline`}
                href="projects"
              >
                Projects
              </a>
            </li>
            <li className="mx-5">
              <a
                className={`${path ==="/contact" && "underline"} hover:underline`}
                href="contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <nav className="flex justify-between items-center gap-5">
          <img className="cursor-pointer" src="https://via.placeholder.com/" alt="github" />
          <img className="cursor-pointer" src="https://via.placeholder.com/" alt="linkedin" />
          <img className="cursor-pointer" src="https://via.placeholder.com/" alt="gmail" />
          <img className="cursor-pointer" src="https://via.placeholder.com/" alt="curriculo" />
        </nav>
      </header>
    );
  }
}

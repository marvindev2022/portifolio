import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default class App extends React.Component {
  constructor(props:any) {
    super(props);
    this.state = window.location.pathname
  }
  render() {
    const path = this.state;
    return (
      <main className="w-screen h-screen flex flex-col border border-red-700 ">
        <Header />
        {path === "/home" && <Home />}
        {path === "/about" && <About />}
        {path === "/skills" && <Skills />}
        {path === "/projects" && <Projects />}
        {path === "/contact" && <Contact />}

      </main>
    );
  }
}
import { useState } from "react";
import Home from "./../components/Home";
import About from "./../components/About";
import Projects from "./../components/Projects";
import Articles from "../components/APIs";
import Header from "./../components/Header";
import PageTransition from "../animation/PageTransition";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  const pages: any = {
    home: <Home />,
    about: <About />,
    projects: <Projects />,
    articles: <Articles />,
  };

  const handleSetSelectedPage = (page: string) => {
    setSelectedPage(page);
  };
  return (
    <main className="w-screen h-screen flex flex-col ">
      <Header
        selectedPage={selectedPage}
        setSelectedPage={handleSetSelectedPage}
      />
      <PageTransition children={pages[selectedPage]} />
    </main>
  );
}

export default App;

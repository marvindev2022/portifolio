import { useState } from "react";
import Home from "./../components/Home";
import About from "./../components/About";
import RenderProjects from "./../components/Projects";
import Header from "./../components/Header";
import PageTransition from "../animation/PageTransition";
import { ThemeProvider } from "../context/theme";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("Home");
  const pages: any = {
    Home: <Home />,
    Sobre: <About />,
    Projetos: <RenderProjects />,
  };

  const handleSetSelectedPage = (page: string) => {
    setSelectedPage(page);
  };
  return (
    <main className="w-full h-full flex flex-col  ">
      <ThemeProvider>
        <Header
          selectedPage={selectedPage}
          setSelectedPage={handleSetSelectedPage}
        />
        <PageTransition children={pages[selectedPage]} />
        
      </ThemeProvider>
    </main>
  );
}

export default App;

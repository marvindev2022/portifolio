import Header from "../components/Header";
import PageTransition from "../animation/PageTransition";
import { useContextPage } from "../context";

function App() {
  const { selectedPage, pages } = useContextPage();

  return (
    <main className="w-full h-full flex flex-col  ">
      <Header />
      <PageTransition children={pages[selectedPage]} />
    </main>
  );
}

export default App;

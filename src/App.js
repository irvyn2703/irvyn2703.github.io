import "./App.css";
import Header from "./components/Header/UI/Header";
import Home from "./sections/Home/UI/Home";
import Skills from "./sections/Skills/UI/Skills";
import Education from "./sections/Education/UI/Education";
import useEducationAndProjects from "./hooks/useEducationAndProjects";
import Proyects from "./sections/Proyects/UI/Proyects";
import Trees from "./components/Trees/UI/Trees";
import Montains from "./components/Mountains/UI/Mountains";
import Sun from "./components/Sun/UI/Sun";

function App() {
  const { education, proyects, isLoading } = useEducationAndProjects();
  return (
    <>
      <Header />
      <Home />
      <Skills />
      {!isLoading && (
        <>
          <Education education={education} />
          <Proyects proyects={proyects} />
        </>
      )}
      <div className="fondo">
        <Trees />
        <Montains />
        <Sun />
      </div>
    </>
  );
}

export default App;

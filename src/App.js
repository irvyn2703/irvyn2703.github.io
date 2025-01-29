import "./App.css";
import Header from "./components/Header/UI/Header";
import Home from "./sections/Home/UI/Home";
import Skills from "./sections/Skills/UI/Skills";
import Education from "./sections/Education/UI/Education";
import useEducationAndProjects from "./hooks/useEducationAndProjects";
import Proyects from "./sections/Proyects/UI/Proyects";

function App() {
  const { education, proyects, isLoading } = useEducationAndProjects();
  return (
    <div>
      <Header />
      <Home />
      <Skills />
      {!isLoading && (
        <>
          <Education education={education} />
          <Proyects proyects={proyects} />
        </>
      )}
    </div>
  );
}

export default App;

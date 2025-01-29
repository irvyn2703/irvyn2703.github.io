import "./App.css";
import Header from "./components/Header/UI/Header";
import Home from "./sections/Home/UI/Home";
import Skills from "./sections/Skills/UI/Skills";
import Education from "./sections/Education/UI/Education";
import useEducationAndProjects from "./hooks/useEducationAndProjects";

function App() {
  const { education, proyects } = useEducationAndProjects();
  return (
    <div>
      <Header />
      <Home />
      <Skills />
      <Education education={education} />
    </div>
  );
}

export default App;

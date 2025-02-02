import "./App.css";
import Header from "./components/Header/UI/Header";
import Home from "./sections/Home/UI/Home";
import Skills from "./sections/Skills/UI/Skills";
import Education from "./sections/Education/UI/Education";
import Proyects from "./sections/Proyects/UI/Proyects";
import Trees from "./components/Trees/UI/Trees";
import Montains from "./components/Mountains/UI/Mountains";
import Sun from "./components/Sun/UI/Sun";
import Bird from "./components/Bird/UI/Bird";
import useScrollToFalseScreen from "./hooks/useScrollToFalseScreen";

function App() {
  useScrollToFalseScreen();
  return (
    <>
      <div className="falseScreen"></div>
      <Header />
      <Home />
      <Skills />
      <Education />
      <Proyects />
      <div className="fondo">
        <Trees />
        <Montains />
        <Sun />
        <Bird />
      </div>
    </>
  );
}

export default App;

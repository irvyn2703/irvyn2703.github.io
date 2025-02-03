import "./App.css";
import Header from "./components/Header/UI/Header";
import Home from "./sections/Home/UI/Home";
import Skills from "./sections/Skills/UI/Skills";
import Education from "./sections/Education/UI/Education";
import Trees from "./components/Trees/UI/Trees";
import Montains from "./components/Mountains/UI/Mountains";
import Sun from "./components/Sun/UI/Sun";
import Bird from "./components/Bird/UI/Bird";
import useScrollToFalseScreen from "./hooks/useScrollToFalseScreen";
import useLanguage from "./hooks/useLanguage";
import Projects from "./sections/Projects/UI/Projects";

function App() {
  useScrollToFalseScreen();
  const { isEnglish, toggleLanguage } = useLanguage();
  return (
    <>
      <div className="falseScreen"></div>
      <Header />
      <Home />
      <Skills />
      <Education english={isEnglish} />
      <Projects english={isEnglish} />
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

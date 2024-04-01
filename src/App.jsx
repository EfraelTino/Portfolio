import Conocimiento from "./components/Conocimiento";
import Contac from "./components/Contac";
import Descripcion from "./components/Descripcion";
import NavBar from "./components/NavBar";
import Overview from "./components/Overview";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <NavBar />
      <div className="gb-white dark:bg-zinc-900">
        <Descripcion />
        <Overview />
        <Projects/>
        <Conocimiento />
        <Contac/>
      </div>
    </>
  );
}

export default App;

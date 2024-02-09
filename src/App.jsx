import Logo from "./assets/no-projects.png";
import SideMenu from "./components/SideMenu";
import Project from "./components/Project";

import { useState } from "react";

function App() {
  const [isNewProject, setIsNewProject] = useState(false);

  //si ya han creado proyectos seteamos true para que muestre el proyecto
  function handleNewProject() {
    setIsNewProject();
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideMenu />
        <div className="mt-24 text-center w-2/3">
          <img
            className="w-16 h-16 object-contain mx-auto"
            src={Logo}
            alt="app icon"
            width="100"
          />
          <h2 className="text-xl font-bold text-stone-500 my-4">No project selected</h2>
          <p className="text-stone-400 mb-4">
            Select a project or get started with a new one
          </p>
          <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
            Add new project
          </button>
        </div>
      </main>
    </>
  );
}

export default App;

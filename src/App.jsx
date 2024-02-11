import Logo from "./assets/no-projects.png";
import SideMenu from "./components/SideMenu";
import Project from "./components/Project";

import { useState } from "react";

function App() {
  const [isNewProject, setIsNewProject] = useState(true);

  const project = {
    title: "",
    desc: "",
    date: new Date(), // Esto creará una fecha con el momento actual
    tasks: [null],
  };

  const allProjects = [project];

  //si ya han creado proyectos seteamos true para que muestre el proyecto
  function handleNewProject() {
    if (isNewProject) {
      setIsNewProject(false);
    } else {
      setIsNewProject(true);
    }
    console.log("mosrtar:" + isNewProject);
  }

  const handleSave = (e, formValues) => {
    e.preventDefault();
    allProjects.push(formValues);
    console.log(allProjects);
    // Aquí puedes hacer lo que necesites con formValues, como enviarlos a una API o guardarlos en otro estado.
  };

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideMenu projects={allProjects} onAddNewProject={handleNewProject} />
        {isNewProject && (
          <div className="mt-24 text-center w-2/3">
            <img
              className="w-16 h-16 object-contain mx-auto"
              src={Logo}
              alt="app icon"
              width="100"
            />
            <h2 className="text-xl font-bold text-stone-500 my-4">
              No project selected
            </h2>
            <p className="text-stone-400 mb-4">
              Select a project or get started with a new one
            </p>
            <button
              onClick={() => handleNewProject()}
              className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
            >
              Add new project
            </button>
          </div>
        )}
        {!isNewProject && <Project handleSaveProject={handleSave} />}
      </main>
    </>
  );
}

export default App;

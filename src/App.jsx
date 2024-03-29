import Logo from "./assets/no-projects.png";
import SideMenu from "./components/SideMenu";
import Project from "./components/Project";

import { useState, useRef } from "react";
import ProjectInfo from "./components/ProjectInfo";

function App() {
  const [isNewProject, setIsNewProject] = useState(true);
  const [showData, setShowData] = useState(false);
  const index = useRef();

  const project = {
    title: "",
    desc: "",
    date: new Date(), // Esto creará una fecha con el momento actual
    tasks: [null],
  };

  //const [index, setIndex] = useState(0);
  const [allProjects, setAllProjects] = useState([project]);

  //si ya han creado proyectos seteamos true para que muestre el proyecto
  function handleNewProject() {
    if (isNewProject) {
      setIsNewProject(false);
    } else {
      setIsNewProject(true);
    }
  }

  const handleSave = (e, formValues) => {
    console.log("formValues: " + JSON.stringify(formValues));
    if (Object.keys(formValues).length === 0) {
      e.preventDefault();
    } else {
      e.preventDefault();
      setAllProjects((prevProjects) => [...prevProjects, formValues]);
    }
  };

  function handleShowProject(projectIndex) {
    if (showData) {
      setShowData(false);
      index.current = 0;
    } else {
      setShowData(true);
      setIsNewProject(false);
      //setIndex(index);
      index.current = projectIndex;
      console.log("handle show project: " + index.current);
      console.log("allProjects project: " + JSON.stringify(allProjects[index.current]));
    }
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideMenu
          projects={allProjects}
          onAddNewProject={handleNewProject}
          showProject={handleShowProject}
        />
        {isNewProject && (
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
            <button
              onClick={() => handleNewProject()}
              className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
            >
              Add new project
            </button>
          </div>
        )}
        {!isNewProject && !showData && <Project handleSaveProject={handleSave} />}
        {showData && <ProjectInfo project={allProjects[index.current]} />}
      </main>
    </>
  );
}

export default App;

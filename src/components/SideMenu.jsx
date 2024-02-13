export default function SideMenu({ projects, onAddNewProject, showProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <p className="flex flex-col gap-1 my-4">Your projects</p>
      <button
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        onClick={() => onAddNewProject()}
      >
        + Add Project
      </button>
      <div>
        {projects && (
          <ul className="mt-8">
            {projects.map((project, index) => (
              <li className="flex justify-between my-4" key={index}>
                <button
                  onClick={() => showProject(index)}
                  className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
                >
                  {project.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}

export default function ProjectInfo({ project, addTasks }) {
  return (
    <>
      <div className="w-[35rem] mt-16">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
        <p className="text-stone-600 mb-4">{project.date}</p>
        <p className="mt-8">{project.desc}</p>

        <h2 className="text-xl font-bold text-stone-500 my-4">Tasks</h2>
        <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        <button
          className="text-stone-800 hover:text-stone-950"
          onClick={() => addTasks()}
        >
          Add task
        </button>
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          <li className="flex justify-between my-4">...</li>
          <li className="flex justify-between my-4">...</li>
          <li className="flex justify-between my-4">...</li>
        </ul>
      </div>
    </>
  );
}

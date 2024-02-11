import Input from "./Input";
import { useState } from "react";

export default function Project({ projects, handleSaveProject }) {
  const [formValues, setFormValues] = useState({ ...projects });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="w-[35rem] mt-16">
        <form
          className="mt-4 text-right"
          onSubmit={(event) => handleSaveProject(event, formValues)}
        >
          <button className="text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">
            Cancel
          </button>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </form>
        <Input
          labelText={"Title"}
          type="text"
          name="title"
          onChange={handleChange}
        />
        <Input
          labelText={"Description"}
          type="text"
          name="description"
          onChange={handleChange}
        />
        <Input
          labelText={"Date"}
          type="date"
          name="date"
          onChange={handleChange}
        />
      </div>
    </>
  );
}

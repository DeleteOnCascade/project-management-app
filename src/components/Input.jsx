export default function Input({ labelText, ...props }) {
  return (
    <>
      <label className="text-sm font-bold uppercase text-stone-500">
        {labelText}
      </label>
      <input
        {...props}
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />
    </>
  );
}

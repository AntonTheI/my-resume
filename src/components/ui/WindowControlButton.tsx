const buttons = [
  { type: "close", bg: "bg-red-800" },
  { type: "collapse", bg: "bg-yellow-800" },
  { type: "expend", bg: "bg-green-800" },
];

const WindowControlButton = () => {
  return (
    <div className="flex p-2">
      {buttons.map(({ type, bg }) => (
        <button
          key={type}
          className={`${bg} w-3.5 h-3.5 m-1 rounded-full`}
          aria-label={type}
        ></button>
      ))}
    </div>
  );
};

export default WindowControlButton;

{
  /* <button className="bg-red-800 w-3.5 h-3.5 rounded-full"></button>
      <button className="styleMap"></button>
      <button></button> */
}

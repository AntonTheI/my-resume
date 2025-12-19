import CloseIcon from "../icons/CloseIcons";
import CollapseIcon from "../icons/CollapseIcon";
import ExpandIcon from "../icons/ExpandIcon";

const buttons = [
  { type: "close", bg: "bg-red-800 items-center pl-px", Icon: CloseIcon },
  { type: "collapse", bg: "bg-yellow-800 pr-0.5", Icon: CollapseIcon },
  { type: "expend", bg: "bg-green-800 pt-[1.3px] pr-px", Icon: ExpandIcon },
];

const WindowControlButton = () => {
  return (
    <div className="flex p-2 group">
      {buttons.map(({ type, bg, Icon }) => (
        <button
          key={type}
          className={`${bg} w-3.5 h-3.5 m-1 rounded-full flex justify-center`}
          aria-label={type}
        >
          <Icon className="opacity-0 group-hover:opacity-50" />
        </button>
      ))}
    </div>
  );
};

export default WindowControlButton;

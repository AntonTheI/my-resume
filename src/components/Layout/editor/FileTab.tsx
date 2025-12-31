type FileTabProps = {
  tabs: string[];
  onFileClose: (fileName: string) => void;
};

const FileTab = ({ tabs, onFileClose }: FileTabProps) => {
  return (
    <div className="flex flex-row cursor-pointer  ">
      {tabs.map((name) => {
        return (
          <div
            className="flex items-center px-2 border-black border group"
            key={name}
          >
            {name}
            <button
              className="cursor-pointer ml-1 px-1 items-center opacity-0 group-hover:opacity-100 hover:bg-white/10 "
              aria-label="close"
              onClick={() => onFileClose(name)}
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FileTab;

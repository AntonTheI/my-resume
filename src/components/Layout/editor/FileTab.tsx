const FileTab = ({ tabs }: { tabs: string[] }) => {
  return (
    <div className="flex flex-row cursor-pointer  ">
      {tabs.map((name) => {
        return (
          <div
            className="flex items-center px-2 border-black border group"
            key={name}
          >
            {name}
            <div className="ml-1 px-1 items-center opacity-0 group-hover:opacity-100 hover:bg-white/10 ">
              x
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FileTab;

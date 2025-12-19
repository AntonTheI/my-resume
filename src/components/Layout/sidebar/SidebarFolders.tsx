import { folders } from "../../../data/folders";
import FolderView from "../../../utils/FolderView";

const SideBarFolders = () => {
  return (
    <div className="p-1">
      {folders.map((folder) => (
        <div>
          <FolderView node={folder} />
        </div>
      ))}
    </div>
  );
};

export default SideBarFolders;

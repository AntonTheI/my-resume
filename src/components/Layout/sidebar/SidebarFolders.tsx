import { folders } from "../../../data/folders";
import FolderView from "../../../utils/FolderView";
import type { OnFileSelect } from "../../../types/editor";

const SideBarFolders = ({ onFileSelect }: { onFileSelect: OnFileSelect }) => {
  return (
    <div className="p-1">
      {folders.map((folder) => (
        <div>
          <FolderView onFileSelect={onFileSelect} node={folder} />
        </div>
      ))}
    </div>
  );
};

export default SideBarFolders;

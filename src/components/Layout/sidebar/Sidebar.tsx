import type { OnFileSelect } from "../../../types/editor";
import SidebarControls from "./SidebarControls";
import SidebarFolders from "./SidebarFolders";

const Sidebar = ({ onFileSelect }: { onFileSelect: OnFileSelect }) => {
  return (
    <div className="max-w-50 h-full resize-x overflow-auto bg-(--color-bg) text-(--color-text-white)">
      <SidebarControls />
      <SidebarFolders onFileSelect={onFileSelect} />
    </div>
  );
};

export default Sidebar;

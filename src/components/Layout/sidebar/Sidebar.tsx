import SidebarControls from "./SidebarControls";
import SidebarFolders from "./SidebarFolders";

const Sidebar = () => {
  return (
    <div className="bg-(--color-bg) ">
      <SidebarControls />
      <SidebarFolders />
    </div>
  );
};

export default Sidebar;

import AppBarLeft from "./AppBarLeft";
import AppBarCenter from "./AppBarCenter";
import AppBarRight from "./AppBarRight";

const AppBar = () => {
  return (
    <div className="flex bg-(--color-bg)">
      <AppBarLeft />
      <AppBarCenter />
      <AppBarRight />
    </div>
  );
};

export default AppBar;

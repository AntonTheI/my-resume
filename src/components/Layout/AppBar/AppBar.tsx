import AppBarLeft from "./AppBarLeft";
import AppBarCenter from "./AppBarCenter";
import AppBarRight from "./AppBarRight";

const AppBar = () => {
  return (
    <div className="flex bg-(--color-bg) border-solid border-black border rounded-t-md">
      <AppBarLeft />
      <AppBarCenter />
      <AppBarRight />
    </div>
  );
};

export default AppBar;

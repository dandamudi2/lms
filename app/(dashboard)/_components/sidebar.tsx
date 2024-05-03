import { Logo } from "./logo";
import { SiderbarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div
      className="h-full border-r flex flex-col overflow-y-auto 
    w-56 bg-white shadow-sm"
    >
      <div className="p-6">
        <Logo />
      </div>
      <SiderbarRoutes />
    </div>
  );
};

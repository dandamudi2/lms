import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Sidebar } from "./sidebar";
import { Menu } from "lucide-react";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger
        className="md:hidden pr-4 
      hover:opacity-75 transition"
      >
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white border-r-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

import { useState } from "react";
import HeaderSearch from "./header-search";
import LanguageSelector from "./language-selector";
import Notifications from "./notifications";
import UserCard from "./user-card";
import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md p-3 flex w-full items-center flex-col lg:flex-row h-fit">
      <h1 className="text-3xl font-bold text-blue-950">Dashboard</h1>
      <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <div
        className={`lg:flex ${
          isOpen ? "flex gap-10 items-center" : "hidden"
        } flex-col lg:flex-row lg:justify-evenly w-full`}
      >
        <HeaderSearch />
        <div className="mt-2">
          <LanguageSelector />
        </div>
        <div className="flex gap-2 items-center">
          <Notifications />
          <UserCard />
        </div>
      </div>
    </div>
  );
};

export default Header;

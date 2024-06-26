import { HeartPulse } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <>
      <HeartPulse
        size={28}
        className="bg-blue-700 w-12 h-12 p-3 text-white rounded-md"
      />
      <h1 className="text-2xl font-bold text-blue-950">Blue</h1>
    </>
  );
};

export default Logo;

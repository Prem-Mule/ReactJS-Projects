// import React from "react";

const Background = () => {
  return (
    <div className="w-full h-screen fixed z-[2]">
      <nav className="absolute top-[5%] w-full py-7 flex justify-center text-zinc-500">
        Documents
      </nav>
      <h1 className="absolute text-[12vw] tracking-tighter leading-none top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-medium text-zinc-950">
        Docs
      </h1>
    </div>
  );
};

export default Background;

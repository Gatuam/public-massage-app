import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" relative w-screen h-screen ">
      <div className="absolute -z-1 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:34px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      {children}
    </div>
  );
};

export default layout;

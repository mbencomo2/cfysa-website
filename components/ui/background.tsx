import { ReactNode } from "react";

const Background = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative w-full">
      <div className="w-[40rem] h-[40rem] bg-accent rounded-full -z-50 fixed left-0 -top-[10rem]"></div>
      <div className="w-[20rem] h-[20rem] bg-accent rounded-full -z-50 fixed -right-[5rem] bottom-[10%]"></div>
      {children}
    </div>
  );
};

export default Background;

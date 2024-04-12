import { ReactNode } from "react";

const Background = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative w-full h-screen">
      <div className="w-[40rem] h-[40rem] bg-orange-400 rounded-full -z-50 fixed left-0 -top-[30rem] dark:bg-orange-400/50"></div>
      <div className="w-[20rem] h-[20rem] bg-orange-400 rounded-full -z-50 fixed -right-[5rem] bottom-[10%] dark:bg-orange-400/50"></div>
      {children}
    </div>
  );
};

export default Background;

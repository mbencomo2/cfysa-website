import { ReactNode } from "react";

const Columns = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative w-full grid-cols-4 gap-4 px-2 lg:grid">
      {children}
    </div>
  );
};

export default Columns;

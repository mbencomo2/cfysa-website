import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <section className="drop-shadow-xl text-lg border-2 py-8 bg-background w-full my-8 p-2 border-t-[16px] border-b-[16px] border-accent flex items-center flex-col">
      {children}
    </section>
  );
};

export default Card;

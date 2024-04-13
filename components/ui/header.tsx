import Image from "next/image";
import { dosis } from "./fonts";

const Header = () => {
  return (
    <header className="relative flex items-center justify-center w-full gap-4 p-2 border-b-8 border-accent bg-background shadow-foreground drop-shadow-xl">
      <Image
        src={"/assets/images/logo_transparent.webp"}
        width={250}
        height={250}
        alt="Cottonflower YSA Logo"
        className="w-32 h-32 p-4 rounded dark:bg-foreground"
      />
      <h1
        className={`${dosis.className} font-bold text-4xl text-center md:text-4xl drop-shadow-xl`}
      >
        Friends of Cottonflower YSA
      </h1>
    </header>
  );
};

export default Header;

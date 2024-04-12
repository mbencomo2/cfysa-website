import { GeistSans } from "geist/font/sans";
import { HamburgerIcon } from "./icons";

const Header = () => {
  return (
    <header className="relative w-full px-2 py-4 overflow-hidden bg-white border-b-4 border-orange-400 -z-10 lg:p-6 dark:bg-black dark:border-orange-400/50">
      <div className="flex items-center justify-between p-2">
        <h1
          className={`${GeistSans.className} relative font-bold text-xl lg:text-3xl drop-shadow-lg p-2 bg-white rounded`}
        >
          Friends of Cottonflower
        </h1>
        <button className="lg:hidden">
          <HamburgerIcon className="w-12 h-12 dark:fill-white" />
        </button>
      </div>
      <div className="absolute w-24 h-24 bg-orange-400 rounded-full -z-10 -left-5 -top-8 dark:bg-orange-400/50"></div>
      <div className="absolute w-24 h-24 bg-orange-400 rounded-full -z-10 -right-12 -bottom-8 dark:bg-orange-400/50"></div>
    </header>
  );
};

export default Header;

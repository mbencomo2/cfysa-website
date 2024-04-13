import Image from "next/image";
import { dosis } from "./fonts";
import { FacebookIcon, GithubIcon, InstagramIcon } from "./icons";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between w-full gap-4 p-4 border-t-8 bg-background border-accent md:flex-row">
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
        <Image
          src={"/assets/images/logo_transparent.webp"}
          width={250}
          height={250}
          alt="Cottonflower YSA Logo"
          className="w-32 h-32 p-4 rounded dark:bg-foreground"
        />
        <h4
          className={`${dosis.className} font-bold text-4xl text-center md:text-4xl drop-shadow-xl`}
        >
          Friends of Cottonflower YSA
        </h4>
      </div>
      <div>
        <ul className="flex justify-evenly">
          <li>
            <a
              href="https://www.facebook.com/groups/cottonflowerysa/"
              target="_blank"
              rel="noopener noreferrer"
              title="Go to our Facebook Group"
            >
              <FacebookIcon className="w-8 h-8" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/cottonflower_ysa/"
              target="_blank"
              rel="noopener noreferrer"
              title="Go to our Instagram Page"
            >
              <InstagramIcon className="w-8 h-8" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mbencomo2/cfysa-website"
              target="_blank"
              rel="noopener noreferrer"
              title="See the code behind this website!"
            >
              <GithubIcon className="w-8 h-8 rounded-full dark:bg-foreground" />
            </a>
          </li>
        </ul>
        <p className="my-8 text-center">
          This is an unofficial website for the Cottonflower YSA Ward and is not
          officially endorsed by the Church of Jesus Christ of Latter-Day
          Saints.
        </p>
        <p className="mt-8 text-center">
          All copyrighted materials, logos, and assets copyright their
          respective owners. If you wish to have your material or asset removed,
          contact{" "}
          <a href="mailto:matt.ibencomo@gmail.com" className="underline">
            the web designer
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;

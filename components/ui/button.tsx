import { HTMLAttributeAnchorTarget, HTMLAttributeReferrerPolicy } from "react";

const BtnLink = ({
  href,
  target,
  label,
  rel,
}: {
  href: string;
  target?: HTMLAttributeAnchorTarget;
  rel?: HTMLAttributeReferrerPolicy;
  label: string;
}) => {
  return (
    <a
      href={href}
      target={target ? target : "_self"}
      rel={rel ? rel : "no-referrer"}
      className="inline-block p-2 my-4 font-bold text-center text-black rounded-lg bg-accent hover:bg-accent/50 active:border-2 border-sky-500"
    >
      {label}
    </a>
  );
};

export default BtnLink;

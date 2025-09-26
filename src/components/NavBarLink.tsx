import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  text: string;
  onClick?: () => void;
};

const NavBarLink = ({ href, text, onClick }: Props) => {
  return (
    <Link
      href={href}
      className="hover:bg-white/20 p-2 rounded-lg transition-colors duration-300"
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default NavBarLink;

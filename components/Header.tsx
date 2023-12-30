import siteMetadata from "@/data/siteMetadata";
import headerNavLinks from "@/data/headerNavLinks";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="text-4xl font-bold text-white">
        <Link href="/">WZ</Link>
      </div>
      <div className="flex items-center space-x-6 leading-5 sm:space-x-12">
        {headerNavLinks
          .filter((link) => link.href !== "/")
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-bold text-xl text-white sm:block"
            >
              {link.title}
            </Link>
          ))}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;

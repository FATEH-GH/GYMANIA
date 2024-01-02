import Image from "next/image";
import Link from "next/link";
import DarkModeCard from "./DarkMode";

const NavBar = () => {
  return (
    <nav className="wrapper p-4">
      <ul className="flex justify-between">
        <li>
          <Link href="/">
            <Image src="/images/Logo.png" height={75} width={75} alt="logo" />
          </Link>
        </li>
        <li>
          <DarkModeCard />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

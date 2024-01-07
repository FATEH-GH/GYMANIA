import Image from "next/image";
import Link from "next/link";
import DarkModeCard from "./DarkModeCard";

const NavBar = () => {
  return (
    <nav className="wrapper p-4">
      <ul className="flex justify-between">
        <li>
          <Link href="/">
            <Image src="/icons/Logo.png" height={150} width={150} alt="logo" />
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

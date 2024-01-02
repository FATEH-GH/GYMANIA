import Image from "next/image";
import Link from "next/link";

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
          <Link href="/">
            <Image src="/images/Logo.png" height={50} width={50} alt="logo" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" my-6 wrapper flex flex-col items-center md:mx-8 gap-4 md:flex-row md:justify-between">
      <Link href="/">
        <Image
          src="/images/Logo.png"
          alt="footer logo"
          height={750}
          width={100}
        />
      </Link>

      <p>2024 GYMANIA. All rights reserved</p>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" my-6 wrapper flex flex-col items-center md:mx-4 gap-4 md:flex-row md:justify-between">
      <Link href="/">
        <Image
          src="/images/logo-1.png"
          alt="footer logo"
          height={150}
          width={200}
        />
      </Link>

      <p>2024 GoldenGym. All rights reserved</p>
    </footer>
  );
};

export default Footer;

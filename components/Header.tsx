import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logo.png";
import { ButtonStyle1 } from "./Button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 p-8">
      <div className="flex justify-between items-center px-4 py-2 bg-[#FFFFFFB2] border border-[#00000033] rounded-4xl">
        <div>
          <Image
            src={Logo}
            width={248}
            height={76}
            alt="Logo"
            className="w-48 h-16 object-contain"
          />
        </div>
        <ul className="flex gap-6 font-semibold">
          <li>
            <Link href="/">ABOUT US</Link>
          </li>
          <li>
            <Link href="/about">OUR TEAM</Link>
          </li>
          <li>
            <Link href="/about">EXPLORE CLASSES</Link>
          </li>
          <li>
            <Link href="/about">CONTACT US</Link>
          </li>
        </ul>
        <div>
          <ButtonStyle1>Book Now</ButtonStyle1>
        </div>
      </div>
    </header>
  );
};

export default Header;

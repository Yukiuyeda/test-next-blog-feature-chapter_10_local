import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-[#333] text-white p-6 flex justify-between">
      <Link href="/">
        Blog
      </Link>
      <Link href="/contactform">お問い合わせ</Link>
    </header>
  );
};

export default Header;

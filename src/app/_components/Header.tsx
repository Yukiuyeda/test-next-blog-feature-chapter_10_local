"use client";

import React from "react";
import Link from "next/link";
import { useSupabaseSession } from "../_hooks/useSupabaseSession";
import { supabase } from "@/utils/supabase";

const Header: React.FC = () => {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  const { session, isLoading } = useSupabaseSession();

  return (
    <header className="bg-[#333] text-white p-6 flex justify-between">
      <Link href="/">Blog</Link>
      {!isLoading && (
        <>
          {session ? (
            <>
              <Link href="/admin" className="mr-5">
                管理画面
              </Link>
              <button onClick={handleLogout}>ログアウト</button>
            </>
          ) : (
            <>
              <Link href="/contactform" className="mr-5">
                お問い合わせ
              </Link>
              <Link href="/login">ログイン</Link>
            </>
          )}
        </>
      )}
    </header>
  );
};

export default Header;

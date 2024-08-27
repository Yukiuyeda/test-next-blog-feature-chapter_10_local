"use client";

import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [name, setName] = useState<string>('');
  const router = useRouter();
  const { token } = useSupabaseSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    //カテゴリー作成
    const res = await fetch("/api/admin/categories", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: token!,
      },
      body: JSON.stringify({ name }),
    });

    //カテゴリーのid取得
    const { id } = await res.json(); 

    //作成したカテゴリー詳細ページに遷移
    router.push("/admin/categories")

    window.alert("カテゴリー作成しました");

  };

  return (
    <div>
      <h2 className="font-bold text-xl mb-6">カテゴリー作成ページ</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="name" className="text-sm text-gray-700">
          カテゴリー
        </label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 border-gray-400 border rounded-sm mt-2 mb-4 w-[300px]"
        />
        {/* 作成ボタン */}
        <button
          type="submit"
          className="flex justify-center w-[70px] mt-10 py-2 px-4 text-white border-gray-400 bg-green-500 rounded hover:cursor hover:bg-green-700 transition-all"
        >
          作成
        </button>
      </form>
    </div>
  );
};

export default Page;

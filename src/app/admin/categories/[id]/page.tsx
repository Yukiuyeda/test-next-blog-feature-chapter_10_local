"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [name, setName] = useState<string>("");
  const { id } = useParams();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //カテゴリー作成
    await fetch(`/admin/categories/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    window.alert("カテゴリーを更新しました");
  };

  //カテゴリー削除
  const handleDelete = async () => {
 
    await fetch(`/admin/categories/${id}`,{
      method: 'DELETE'
    }
    )

    window.alert("カテゴリーを削除しました")

    router.push('/admin/categories')
  }

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
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="p-3 border-gray-400 border rounded-sm mt-2 mb-4 w-[300px]"
        />
        {/* 更新ボタン */}
        <div className="flex">
          <button
            type="submit"
            className="flex justify-center w-[70px] mt-10 py-2 my-auto px-4 text-white border-gray-400 bg-green-500 rounded hover:cursor hover:bg-green-700 transition-all"
          >
            更新
          </button>

          <button
            type="button"
            className="flex justify-center w-[70px] mt-10 ml-4 py-2 px-4 text-white border-gray-400 bg-red-500 rounded hover:cursor hover:bg-green-700 transition-all"
            onClick={handleDelete}
          >
            削除
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;

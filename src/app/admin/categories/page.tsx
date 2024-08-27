"use client";

import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";
import { Category } from "@/app/types/category";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  //ログイン者にしか知りえないtoken
  const { token } = useSupabaseSession();
  //全カテゴリー取得
  useEffect(() => {
    if (!token) return;

    const getAllCategories = async () => {
      const res = await fetch("/api/admin/categories", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const { categories } = await res.json();
      setCategories(categories);
    };

    getAllCategories();
  }, []);

  //   console.log(categories);

  return (
    <div>
      {/*カテゴリー一覧と新規作成を横並び */}
      <div className="flex justify-between items-center w-full mb-16">
        <h2 className="font-bold text-xl">カテゴリー一覧</h2>
        <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-green-500">
          <Link href="/admin/categories/new">新規作成</Link>
        </button>
      </div>

      {/* 記事一覧表示 */}
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <Link href={`/admin/categories/${category.id}`}>
                <div className="p-4 border-b-[1px] border-blue-300 hover:bg-gray-200 hover:cursor-pointer">
                  <h3 className="text-xl">{category.name}</h3>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;

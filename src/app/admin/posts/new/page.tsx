"use client";

import { Category } from "@/app/types/category";
import { NewPost } from "@/app/types/newpost";
import React, { SelectHTMLAttributes, useEffect, useState } from "react";
import CategoriesSelect from "../_components/CategoriesSelect";
import { useRouter } from "next/navigation";

const Page = () => {
  const [formValues, setFormValues] = useState<NewPost>({
    title: "",
    content: "",
    thumbnailUrl: "https://placehold.jp/800x400.png",
  });

  const [categories, setCategories] = useState<Category[]>([])

  const router = useRouter();

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // フォームのデフォルトの動作をキャンセルします。
    e.preventDefault()

    // 記事を作成します。
    const res = await fetch('/api/admin/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formValues, categories}),
    })

    // // レスポンスから作成した記事のIDを取得します。
    // const { id } = await res.json()

    // 作成した記事の一覧ページに遷移します。
    router.push("/admin/posts")

    alert('記事を作成しました。')
  }
 

  return (
    <div>
      <h2 className="font-bold text-xl mb-6">記事作成ページ</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="title" className="text-sm text-gray-700">
          タイトル
        </label>
        <input
          id="title"
          name="title"
          onChange={handleChange}
          value={formValues.title}
          className="p-3 border-gray-400 border rounded-sm mt-2 mb-4"
        />

        <label htmlFor="content" className="text-sm text-gray-700">
          内容
        </label>
        <textarea
          id="content"
          name="content"
          onChange={handleChange}
          value={formValues.content}
          className="p-3 border-gray-400 border rounded-sm mt-2 mb-4"
        ></textarea>

        <label htmlFor="thumnbnailUrl" className="text-sm text-gray-700">
          サムネイルURL
        </label>
        <input
          id="thumbnailUrl"
          name="thumbnailUrl"
          onChange={handleChange}
          value={formValues.thumbnailUrl}
          className="p-3 border-gray-400 border rounded-sm mt-2 mb-4"
        />

        <label htmlFor="categories" className="text-sm text-gray-700">
          カテゴリー
        </label>
        <CategoriesSelect selected={categories} setSelected={setCategories}/>
        {/* 
        記事投稿ボタン */}
        <button
          type="submit"
          className="mt-10 mx-auto py-2 px-4 text-white border-gray-400 bg-green-500 rounded hover:cursor hover:bg-green-700 transition-all"
        >
          作成
        </button>
      </form>
    </div>
  );
};

export default Page;

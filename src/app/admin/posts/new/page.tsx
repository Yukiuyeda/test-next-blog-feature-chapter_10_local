"use client";

import { Category } from "@/app/types/category";
import { NewPost } from "@/app/types/newpost";
import React, { SelectHTMLAttributes, useEffect, useState } from "react";

const Page = () => {
  const [formValues, setFormValues] = useState<NewPost>({
    title: "",
    content: "",
    thumbnailUrl: "https://placehold.jp/800x400.png",
    selectedcategories: [],
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  //カテゴリーの変更を反映
  const handleCategories = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //選択値を格納するための配列
    const _categories = [];
    //<option>要素を走査
    const opts = e.target.options;
    for (const opt of opts) {
      if (opt.selected) {
        _categories.push(opt.value);
      }

      //配列をstateに反映
      setFormValues({ ...formValues, [e.target.name]: _categories });
    }
  };

  const [categories, setCategories] = useState<Category[]>([]);

  //カテゴリーリストを取得
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("./api/admin/categories");
      const { categories } = await res.json();
      setCategories(categories);
    };

    fetcher();
  }, []);

  return (
    <div>
      <h2 className="font-bold text-xl mb-6">記事作成ページ</h2>
      <form className="flex flex-col">
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
          id="title"
          name="title"
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
        <select
          id="categories"
          name="categories"
          value={formValues.categories}
          multiple={true}
          onChange={handleCategories}
          size={4}
          className="p-3 border-gray-400 border rounded-sm mt-2 mb-4"
        >
          {categories.map((category) => (
            <option value={category.name} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
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

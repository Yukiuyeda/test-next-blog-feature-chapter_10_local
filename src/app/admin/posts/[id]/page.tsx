"use client";

import { Category } from "@/app/types/category";
import { NewPost } from "@/app/types/newpost";
import React, { SelectHTMLAttributes, useEffect, useState } from "react";
import CategoriesSelect from "../_components/CategoriesSelect";
import { useParams, useRouter } from "next/navigation";
import { Post } from "@/app/types/post";
import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";

const Page = () => {
  const [formValues, setFormValues] = useState<NewPost>({
    title: "",
    content: "",
    thumbnailImageKey: "",
  });

  const [categories, setCategories] = useState<Category[]>([]);

  const { id } = useParams();
  const router = useRouter();
  const { token } = useSupabaseSession();

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  //現状の内容表示
  useEffect(() => {
    const fetcher = async () => {

      if (!token) return;

      const res = await fetch(`/api/admin/posts/${id}`, {
        headers: {
          'Content-Type': '/application/json',
          Authorization: token
        }
      });
      const { post: { title, content, thumbnailImageKey, postCategories} }: {post: Post}= await res.json();

  
      setFormValues({
        ...formValues,
        title,
        content,
        thumbnailImageKey,
      });

      setCategories(postCategories.map(elem => elem.category))
    };

    fetcher();
  }, [id]);

  //記事更新
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) return;

    await fetch(`/api/admin/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ ...formValues, categories }),
    });

    window.alert("記事を更新しました");

    // console.log(formValues)

    //記事一覧に画面遷移
    router.push("/admin/posts");
  };

  //記事削除
  const handleDelete = async () => {

    if (!token) return;

    await fetch(`/api/admin/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    window.alert("記事を削除しました");

    //カテゴリー一覧に画面遷移
    router.push("/admin/posts");
  };

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
          className="p-3 border-gray-400 border rounded-sm mt-2 mb-4"
        />

        <label htmlFor="categories" className="text-sm text-gray-700">
          カテゴリー
        </label>
        {/* カテゴリー選択コンポーネント */}
        <CategoriesSelect selected={categories} setSelected={setCategories}/>

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
            className="flex justify-center w-[70px] mt-10 ml-4 py-2 px-4 text-white border-gray-400 bg-red-500 rounded hover:cursor hover:bg-red-700 transition-all"
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

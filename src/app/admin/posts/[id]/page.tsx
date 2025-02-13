"use client";

import { Category } from "@/app/_types/category";
import { NewPost } from "@/app/_types/newpost";
import { useState, useEffect } from "react";
import CategoriesSelect from "../_components/CategoriesSelect";
import { useParams, useRouter } from "next/navigation";
import { Post } from "@/app/_types/post";

const Page = () => {
  const [formValues, setFormValues] = useState<NewPost>({
    title: "",
    content: "",
    thumbnailUrl: "https://placehold.jp/800x400.png",
  });

  const [categories, setCategories] = useState<Category[]>([]);

  const { id } = useParams();
  const router = useRouter();

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
      const res = await fetch(`/api/admin/posts/${id}`);
      console.log(res);

      const {
        post: { title, content, thumbnailUrl, postCategories },
      }: { post: Post } = await res.json();

      // console.log(post);

      setFormValues({
        ...formValues,
        title,
        content,
        thumbnailUrl,
      });

      setCategories(postCategories.map((elem) => elem.category));
    };

    fetcher();
  }, [id]);

  //記事更新
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(`/api/admin/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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
    await fetch(`/api/admin/posts/${id}`, {
      method: "DELETE",
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
          value={formValues.thumbnailUrl}
          className="p-3 border-gray-400 border rounded-sm mt-2 mb-4"
        />

        <label htmlFor="categories" className="text-sm text-gray-700">
          カテゴリー
        </label>
        {/* カテゴリー選択コンポーネント */}
        <CategoriesSelect selected={categories} setSelected={setCategories} />

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

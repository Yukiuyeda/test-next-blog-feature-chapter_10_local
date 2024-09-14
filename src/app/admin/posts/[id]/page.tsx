"use client";

import { Category } from "@/app/_types/category";
import { NewPost } from "@/app/_types/newpost";
import React, { SelectHTMLAttributes, useEffect, useState } from "react";
// import CategoriesSelect from "../_components/CategoriesSelect";
import { useParams, useRouter } from "next/navigation";
import { Post } from "@/app/_types/post";
import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";
import { supabase } from "@/utils/supabase";
import { v4 as uuidv4 } from "uuid"; // 固有IDを生成するライブラリ
import PostForm from "../_components/PostForm";

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

  //現状の内容表示
  useEffect(() => {
    const fetcher = async () => {
      if (!token) return;

      const res = await fetch(`/api/admin/posts/${id}`, {
        headers: {
          "Content-Type": "/application/json",
          Authorization: token,
        },
      });
      const {
        post: { title, content, thumbnailImageKey, postCategories },
      }: { post: Post } = await res.json();

      setFormValues({
        ...formValues,
        title,
        content,
        thumbnailImageKey,
      });

      setCategories(postCategories.map((elem) => elem.category));
    };

    fetcher();
  }, [id, token]);

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
    <PostForm
      newMode={false}
      onSubmit={handleSubmit}
      onDelete={handleDelete}
      formValues={formValues}
      setFormValues={setFormValues}
      categories={categories}
      setCategories={setCategories}
    />
  );
};

export default Page;

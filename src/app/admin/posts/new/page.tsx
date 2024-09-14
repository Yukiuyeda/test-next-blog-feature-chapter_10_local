"use client";

import { Category } from "@/app/_types/category";
import { NewPost } from "@/app/_types/newpost";
import React, { SelectHTMLAttributes, useEffect, useState } from "react";
import CategoriesSelect from "../_components/CategoriesSelect";
import { useRouter } from "next/navigation";
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

  const router = useRouter();
  const { token } = useSupabaseSession();

  const handleSubmit = async (e: React.FormEvent) => {
    // フォームのデフォルトの動作をキャンセルします。
    e.preventDefault();

    // 記事を作成します。

    if (!token) return;

    const res = await fetch("/api/admin/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ ...formValues, categories }),
    });

    // レスポンスから作成した記事のIDを取得します。
    const { id } = await res.json()

    // 作成した記事の一覧ページに遷移します。
    router.push(`/admin/posts/${id}`);

    alert("記事を作成しました。");
  };

  return (
    <PostForm
      newMode={true}
      onSubmit={handleSubmit}
      formValues={formValues}
      setFormValues={setFormValues}
      categories={categories}
      setCategories={setCategories}
    />
  );
};

export default Page;

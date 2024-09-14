"use client";

import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CategoriesForm from "../_components/CategoriesForm";

const Page = () => {
  const [name, setName] = useState<string>("");
  const { id } = useParams();
  const router = useRouter();
  const { token } = useSupabaseSession();

  //input欄に現在のカテゴリーを表示
  useEffect(() => {
    if (!token) return;

    const fetcher = async () => {
      const res = await fetch(`/api/admin/categories/${id}`, {
        headers: {
          "Content-Type": "Application/json",
          Authorization: token,
        },
      });
      const { category } = await res.json();
      // console.log(category);

      setName(category.name);
    };

    fetcher();
  }, [token]);

  //カテゴリー作成
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) return;

    await fetch(`/api/admin/categories/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ name }),
    });

    window.alert("カテゴリーを更新しました");

    //カテゴリー一覧に画面遷移
    router.push("/admin/categories");
  };

  //カテゴリー削除

  if (!token) return;

  const handleDelete = async () => {
    await fetch(`/api/admin/categories/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
        Authorization: token,
      },
    });

    window.alert("カテゴリーを削除しました");

    //カテゴリー一覧に画面遷移
    router.push("/admin/categories");
  };

  return (
    <CategoriesForm
      newMode={false}
      onSubmit={handleSubmit}
      name={name}
      setName={setName}
    />
  );
};

export default Page;

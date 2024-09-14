"use client";

import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CategoriesForm from "../_components/CategoriesForm";

const Page = () => {
  const [name, setName] = useState<string>("");
  const router = useRouter();
  const { token } = useSupabaseSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) return;

    //カテゴリー作成
    const res = await fetch("/api/admin/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ name }),
    });

    //カテゴリーのid取得
    const { id } = await res.json();

    //作成したカテゴリー詳細ページに遷移
    router.push(`/admin/categories/${id}`);

    window.alert("カテゴリー作成しました");
  };

  return (
    <CategoriesForm
      newMode={true}
      onSubmit={handleSubmit}
      name={name}
      setName={setName}
    />
  );
};

export default Page;

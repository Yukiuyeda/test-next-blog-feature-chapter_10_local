import { NewPost } from "@/app/_types/newpost";
import React, { FormEvent, useEffect, useState } from "react";
import CategoriesSelect from "./CategoriesSelect";
import { Category } from "@/app/_types/category";
import { supabase } from "@/utils/supabase";
import { v4 as uuidv4 } from "uuid"; // 固有IDを生成するライブラリ
import Image from 'next/image'


type props = {
  onSubmit: (e: React.FormEvent) => void;
  formValues: NewPost;
  setFormValues: (formValues: NewPost) => void;
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  onDelete?: () => void;
  newMode: boolean;
};

const PostForm: React.FC<props> = ({
  onSubmit,
  formValues,
  setFormValues,
  categories,
  setCategories,
  onDelete,
  newMode,
}) => {

  const [thumbnailImageUrl, setThumbnailImageUrl] = useState<null | string>(null);
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    if (!e.target.files || e.target.files.length == 0) {
      // 画像が選択されていないのでreturn
      return;
    }

    // eventから画像を取得
    const file = e.target.files[0]; // 選択された画像を取得

    // private/は必ずつけること
    const filePath = `private/${uuidv4()}`; // ファイル名を指定

    // Supabase Storageに画像をアップロード
    const { data, error } = await supabase.storage
      .from("post_thumbnail")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    // アップロードに失敗したらエラーを表示
    if (error) {
      alert(error.message);
      return;
    }

    // data.pathに画像のパスが格納されているので、thumbnailImageKeyに格納
    setFormValues({ ...formValues, thumbnailImageKey: data.path });
  };

  // DBに保存しているthumbnailImageKeyを元に、Supabaseから画像のURLを取得する
  useEffect(() => {
    if (!formValues.thumbnailImageKey) return

    const fetcher = async () => {
      const {
        data: { publicUrl },
      } = await supabase.storage
        .from('post_thumbnail')
        .getPublicUrl(formValues.thumbnailImageKey!)

      setThumbnailImageUrl(publicUrl)
    }

    fetcher()
  }, [formValues.thumbnailImageKey])

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
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
 
        <label
          htmlFor="thumbnailImageKey"
          className="block text-sm font-medium text-gray-700"
        >
          サムネイル
        </label>
        <input
          type="file"
          id="thumbnailImageKey"
          onChange={handleImageChange}
          accept="image/*"
        />
        {thumbnailImageUrl && (
          <div className="mt-2">
            <Image
              src={thumbnailImageUrl}
              alt="thumbnail"
              width={400}
              height={400}
            />
          </div>
        )}
      

      <label htmlFor="categories" className="text-sm text-gray-700 mt-4">
        カテゴリー
      </label>
      {/* カテゴリー選択コンポーネント */}
      <CategoriesSelect selected={categories} setSelected={setCategories} />

      {/* 作成ボタン or (更新ボタン & 削除ボタン) */}
      {newMode ? (
        <button
          type="submit"
          className="mt-10 mx-auto py-2 px-4 text-white border-gray-400 bg-green-500 rounded hover:cursor hover:bg-green-700 transition-all"
        >
          作成
        </button>
      ) : (
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
            onClick={onDelete}
          >
            削除
          </button>
        </div>
      )}
    </form>
  );
};

export default PostForm;

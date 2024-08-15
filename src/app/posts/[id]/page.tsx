"use client";

import React, { useEffect, useState } from "react";
import type { Post } from "@/app/_types/post";
import { useParams } from "next/navigation";
import Image from "next/image";

export const DetailPost: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  // APIでpostsを取得する処理をuseEffectで実行します。
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(`/api/posts/${id}`);
      const data: { post: Post } = await res.json();
      setPost(data.post);
      setIsLoading(false);
    };

    fetcher();
  }, [id]);

  //ローディング中の表示
  if (isLoading) {
    return <div>読み込み中…</div>;
  }

  //記事が見つからなかったとき
  if (!post) {
    return <div>記事が見つかりません</div>;
  }

  return (
    <div className="flex flex-col p-4 max-w-[800px] pt-10 mx-auto my-0">
      <Image src={post.thumbnailUrl} alt="" width={800} height={400} />
      <div className="pt-0 pr-4 pb-4 pl-4">
        <div className="mt-4 mb-2 flex justify-between items-center h-[27px]">
          <p className="text-[#999] text-[0.8rem]">
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
          <ul className="flex">
            {post.postCategories.map((pc) => {
              return (
                <li
                  key={pc.category.id}
                  className="text-[#0068D3] border border-[#0068D3] text-[0.8rem] rounded p-[5px] mr-2"
                >
                  {pc.category.name}
                </li>
              );
            })}
          </ul>
        </div>
        <h3 className="text-2xl mb-4 font-normal mt-2">{post.title}</h3>
        <div
          className="detailContent"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
    </div>
  );
};

export default DetailPost;

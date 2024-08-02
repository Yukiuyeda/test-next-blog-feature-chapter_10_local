"use client";

import React, { useEffect, useState } from "react";
// import { posts } from '../../data/posts';
import Link from "next/link";
import { Post } from "@/app/types/post";

const Main: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // APIでpostsを取得する処理をuseEffectで実行します。
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
      );
      const data: { posts: Post[] } = await res.json();
      // console.log(data);
      setPosts(data.posts);
      setIsLoading(false);
    };

    fetcher();
  }, []);

  //読み込み中の表示
  if (isLoading) {
    return <div>読み込み中…</div>;
  }

  return (
    <div className="max-w-[800px] mx-auto py-10 px-5 bg-white">
      <ul className="flex flex-col gap-8 mx-auto px-0 max-w-screen-md">
        {posts.map((post) => {
          return (
            <li key={post.id} className="list-none">
              <Link href={`/posts/${post.id}`} className="no-underline">
                <div className="border border-gray-400 p-4 ">
                  <div className="max-w-xl">
                    <div className="flex justify-between h-7">
                      <p className="text-gray-400 text-[11px]">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                      <ul className="flex">
                        {post.categories.map((category) => {
                          return (
                            <li
                              key={category}
                              className="text-[#0068D3] border border-[#0068D3] rounded text-[0.8rem] p-1 mr-2"
                            >
                              {category}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="text-black mt-2 mb-4 text-[24px]">{`APIで取得した${post.title}`}</div>
                    <div
                      className="text-black max-h-12 overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    ></div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Main;

"use client";

import { Post } from "@/app/_types/post";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("/api/admin/posts");
      const { posts } = await res.json();
      setPosts(posts);
    };

    fetcher();
  }, []);

  console.log(posts);

  return (
    <div>
      {/*記事一覧と新規作成を横並び */}
      <div className="flex justify-between items-center w-full mb-16">
        <h2 className="font-bold text-xl">記事一覧</h2>
        <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-green-500">
          <Link href="/admin/posts/new">新規作成</Link>
        </button>
      </div>

      {/* 記事一覧表示 */}
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/admin/posts/${post.id}`}>
                <div className="p-4 border-b-[1px] border-blue-300  hover:bg-gray-200 hover:cursor-pointer">
                  <h3 className="font-bold text-xl">{post.title}</h3>
                  <p className="text-[12px] text-gray-600">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;

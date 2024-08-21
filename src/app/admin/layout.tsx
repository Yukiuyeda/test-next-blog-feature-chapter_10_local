"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useRouteGuard } from "../_hooks/useRouteGuard";
import { usePathname } from "next/navigation";

export default function AdminLayout(
    { children }: { children: ReactNode}
) {
  useRouteGuard()

  const pathname = usePathname()
  const isSelected = (href: string) => {
    return pathname.includes(href)
  }
  
  return (
    <div className="flex">
    {/* サイドバー */}
      <aside className="min-h-screen bg-gray-200 w-25% min-w-[250px]">
        <nav>
          <ul className="leading-[60px] ">
            <li className="h-[60px]">
              <Link href="/admin/posts" className="pl-6 block hover:cursor-pointer hover:bg-blue-200">記事一覧</Link>
            </li>
            <li className="h-[60px]">
              <Link href="/admin/categories" className="pl-6 block hover:cursor-pointer hover:bg-blue-200">カテゴリー一覧</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* コンテンツエリア */}
        <div className="p-8 flex-1">{ children }</div>
    </div>
  );
}

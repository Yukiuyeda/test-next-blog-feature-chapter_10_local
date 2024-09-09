import { supabase } from "@/utils/supabase";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

//管理者用全記事取得API
export const GET = async (request: NextRequest) => {
  // ??の左辺がnullなら右辺が返る
  const token = request.headers.get("Authorization") ?? "";

  //supabaseに対してtokenを送る
  const { error } = await supabase.auth.getUser(token);
  console.log(error);

  // 送ったtokenが正しくない場合、errorが返却されるので、クライアントにもエラーを返す
  if (error)
    return NextResponse.json({ status: error.message }, { status: 400 });

  // tokenが正しい場合、以降が実行される
  try {
    const posts = await prisma.post.findMany({
      include: {
        postCategories: {
          include: {
            category: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ status: "OK", posts: posts }, { status: 200 });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ status: error.message }, { status: 400 });
  }
};

//管理者用記事投稿API
// POSTという命名にすることで、POSTリクエストの時にこの関数が呼ばれる
export const POST = async (request: Request, context: any) => {
  const token = request.headers.get("Authorization") ?? "";

  //tokenをsupabaseに対して送る
  const { error } = await supabase.auth.getUser(token);

  //送ったtokenが正しくなければerrorが返却される。
  if (error) {
    return NextResponse.json({ status: error.message }, { status: 400 });
  }

  try {
    // リクエストのbodyを取得
    const body = await request.json();
    console.log(body);

    // bodyの中からtitle, content, categories, thumbnailImageKeyを取り出す
    const { title, content, categories, thumbnailImageKey } = body;

    // 投稿をDBに生成
    const data = await prisma.post.create({
      data: {
        title,
        content,
        thumbnailImageKey,
      },
    });

    // 記事とカテゴリーの中間テーブルのレコードをDBに生成
    // 本来複数同時生成には、createManyというメソッドがあるが、sqliteではcreateManyが使えないので、for文1つずつ実施
    for (const category of categories) {
      await prisma.postCategory.create({
        data: {
          categoryId: category.id,
          postId: data.id,
        },
      });
    }

    // レスポンスを返す
    return NextResponse.json({
      status: "OK",
      message: "作成しました",
      id: data.id,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ status: error.message }, { status: 400 });
    }
  }
};

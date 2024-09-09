import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { useParams } from "next/navigation";
import { supabase } from "@/utils/supabase";

const prisma = new PrismaClient();

//管理者用詳細記事取得API
export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  //tokenがnullの場合は''を返す
  const token = request.headers.get("Authorization") ?? "";

  //Supabaseに対してtokenを送る。
  const { error } = await supabase.auth.getUser(token);

  //送ったtokenが正しくなかった場合errorが返される
  if (error)
    return NextResponse.json({ status: error.message }, { status: 400 });

  const { id } = params;

  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(id) },
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
    });

    // console.log(post);

    // レスポンスを返す
    return NextResponse.json({ status: "OK", post: post }, { status: 200 });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ status: error.message }, { status: 400 });
  }
};

//記事更新API
export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const token = request.headers.get("Authorization") ?? "";
  console.log(`tokenは${token}`);

  //Supabaseに対してtokenを送る。
  const { error } = await supabase.auth.getUser(token);

  console.log(error);

  //送ったtokenが正しくなければerrorが返される
  if (error) {
    return NextResponse.json({ status: error.message }, { status: 400 });
  }

  //params内のidを取得
  const { id } = params;

  //リクエストのbodyを取得
  const body = await request.json();
  const { title, content, categories, thumbnailImageKey } = body;

  try {
    //idを指定して、Postを更新
    const post = await prisma.post.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title,
        content,
        thumbnailImageKey: thumbnailImageKey,
      },
    });

    //一旦、記事とカテゴリーの中間テーブルのレコードをすべて削除
    await prisma.postCategory.deleteMany({
      where: {
        postId: parseInt(id),
      },
    });

    // 記事とカテゴリーの中間テーブルのレコードをDBに生成
    // 本来複数同時生成には、createManyというメソッドがあるが、sqliteではcreateManyが使えないので、for文1つずつ実施
    for (const category of categories) {
      await prisma.postCategory.create({
        data: {
          postId: post.id,
          categoryId: category.id,
        },
      });
    }

    //レスポンスを返す
    return NextResponse.json({ status: "OK", post }, { status: 200 });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ status: error.message }, { status: 400 });
  }
};

//記事削除API
export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const token = request.headers.get("Authorization") ?? "";

  //supabseに対してtokenを送る。
  const { error } = await supabase.auth.getUser(token);

  //tokenが正しくなければerrorが返却される。
  if (error) {
    return NextResponse.json({ status: error.message }, { status: 400 });
  }

  //paramsの中にidが入っているのでそれを取り出す。
  const { id } = params;

  try {
    await prisma.post.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ status: "OK" }, { status: 200 });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ status: error.message }, { status: 400 });
  }
  const post = await prisma.post.delete({
    where: { id: parseInt(id) },
  });
};

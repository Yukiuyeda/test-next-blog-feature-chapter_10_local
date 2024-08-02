import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { useParams } from "next/navigation";

const prisma = new PrismaClient();

//管理者用詳細記事取得API
export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const post = await prisma.post.findUnique({ where: { id: parseInt(id) } });
    //確認用ログ
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
  //params内のidを取得
  const { id } = params;

  //リクエストのbodyを取得
  const body = await request.json();
  const { title, content, categories, thumbnailUrl } = body;

  try {
    const post = await prisma.post.update({
      where: { id: parseInt(id) },
      data: { title, content, thumbnailUrl },
    });

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

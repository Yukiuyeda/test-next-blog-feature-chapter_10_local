import { PrismaClient } from "@prisma/client";
import { request } from "http";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

//カテゴリー更新API
export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  const body = await request.json();
  const { name } = body;

  try {
    const category = await prisma.category.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
      },
    });

    return NextResponse.json({ status: "OK", category }, { status: 200 });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ status: error.message }, { status: 400 });
  }
};

//カテゴリー削除API
export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const {id} = params;
  
  try {
    await prisma.category.delete({
      where: {id: parseInt(id)},
    })

    return NextResponse.json({ status: "OK" }, { status: 200 })
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ status: error.message }, { status: 400 });
  }
};

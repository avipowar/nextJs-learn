import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;

    const todo = await prisma.todo.findUnique({
      where: {
        id: id,
      },
    });

    if (!todo) {
      return NextResponse.json(
        { success: false, error: "todo not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: todo }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, error: "failed to get todo" },
      { status: 500 },
    );
  }
}

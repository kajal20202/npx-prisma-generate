import prisma from "@/src/lib/prisma"
import { NextResponse } from "next/server"

export async function PUT(req: Request, { params }: any) {
  const id = Number(params.id)
  const body = await req.json()

  const user = await prisma.user.update({
    where: { id },
    data: {
      name: body.name,
      email: body.email,
      role: body.role,
    },
  })

  return NextResponse.json(user)
}

export async function DELETE(req: Request, { params }: any) {
  const id = Number(params.id)

  await prisma.user.delete({
    where: { id },
  })

  return NextResponse.json({ message: "User deleted" })
}
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { MerryResponse, MerryResponseFailed } from '@/apis/types';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const hashPassword = await bcrypt.hash(body.password, 6);

    const createdUser = await prisma.admin.create({
      data: { ...body, password: hashPassword },
    });

    return NextResponse.json<MerryResponse<string>>(
      {
        statusCode: 201,
        message: `Success`,
        data: `Admin registration was successful.`,
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.error(`ERROR : POST api/auth/signup >>`, error);

    return NextResponse.json<MerryResponseFailed>(
      {
        statusCode: 500,
        message: `Failed`,
        data: `Internal Server Error`,
      },
      { status: 500 },
    );
  }
}

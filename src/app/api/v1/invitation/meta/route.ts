import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma';
import { MerryResponse, MerryResponseFailed } from '@/apis/types';
import { Meta } from '@/apis/invitation/types';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get(`accessKey`) || ``;

  try {
    const meta = await prisma.meta.findUnique({
      where: {
        invitationId: id,
      },
    });

    return NextResponse.json<MerryResponse<Meta | null>>(
      {
        statusCode: `200`,
        message: `Success`,
        data: meta,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        statusCode: `404`,
        message: `Failed`,
        data: `Not Found Meta Data`,
      },
      { status: 404 },
    );
  }
}

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const newMeta = await prisma.meta.create({
      data: body,
    });

    return NextResponse.json<MerryResponse<Meta>>(
      {
        statusCode: `201`,
        message: `Success`,
        data: newMeta,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json<MerryResponseFailed>(
      {
        statusCode: `500`,
        message: `Failed`,
        data: `Internal Server Error`,
      },
      { status: 500 },
    );
  }
}

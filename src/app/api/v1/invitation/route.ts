import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';
import { MerryResponse, MerryResponseFailed } from '@/apis/types';
import { Invitation } from '@/apis/invitation/types';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get(`accessKey`) || ``;

  try {
    const invitation = await prisma.invitation.findFirstOrThrow({
      where: {
        id,
      },
    });

    return NextResponse.json<MerryResponse<Invitation>>({
      statusCode: 200,
      message: `Success`,
      data: invitation,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json<MerryResponseFailed>(
      {
        statusCode: 404,
        message: `Failed`,
        data: `Not Found Wedding Data`,
      },
      { status: 404 },
    );
  }
}

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const newInvitation = await prisma.invitation.create({
      data: { ...body, date: new Date(body.date) },
    });

    return NextResponse.json<MerryResponse<Invitation>>(
      {
        statusCode: 201,
        message: `Success`,
        data: newInvitation,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);

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

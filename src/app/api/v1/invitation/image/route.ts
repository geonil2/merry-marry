import { NextResponse } from 'next/server';
import {
  DeleteObjectCommand,
  ListObjectsCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { MerryResponse, MerryResponseFailed } from '@/apis/types';

const Bucket = process.env.AWS_BUCKET_NAME;
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get(`accessKey`) || ``;
    const response = await s3.send(new ListObjectsCommand({ Bucket }));
    const bucketImage = response?.Contents ?? [];
    const images = bucketImage
      .filter((content) => content.Key?.includes(id))
      .map((content) => content.Key)
      .filter((image) => image !== undefined) as string[];

    return NextResponse.json<MerryResponse<string[]>>({
      statusCode: 200,
      message: `Success`,
      data: images,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json<MerryResponseFailed>(
      {
        statusCode: 404,
        message: `Failed`,
        data: `Not Found images`,
      },
      { status: 404 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get(`accessKey`) || ``;
    const formData = await request.formData();
    const files = formData.getAll(`file`) as File[];

    const response = await Promise.all(
      files.map(async (file, index) => {
        const Body = (await file.arrayBuffer()) as Buffer;
        const extension = file.type.split(`/`)[1];
        return s3.send(
          new PutObjectCommand({
            Bucket,
            Key: `${id}_${index + 1}.${extension}`,
            Body,
            ContentType: `image/jpeg`,
          }),
        );
      }),
    );

    return NextResponse.json<MerryResponse<boolean>>({
      statusCode: 201,
      message: `Success`,
      data: true,
    });
  } catch (error) {
    console.log(error);

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

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const Key = searchParams.get(`image`) || ``;

    const response = await s3.send(
      new DeleteObjectCommand({
        Bucket,
        Key,
      }),
    );

    return NextResponse.json<MerryResponse<boolean>>({
      statusCode: 200,
      message: `Success`,
      data: true,
    });
  } catch (error) {
    console.log(error);

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

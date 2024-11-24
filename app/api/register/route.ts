import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

import { prisma } from '@/app/_libs';

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    if (!(email && name && password)) {
      return new NextResponse('Missing info', { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error: unknown) {
    console.error('REGISTRATION ERROR', error);

    return new NextResponse('Internal error', { status: 500 });
  }
};

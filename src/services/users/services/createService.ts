import prisma from '@/lib/prismaFunctions/prisma';

export const createAfterLogin = async (user: any) => {
  const { email, given_name, family_name, sub } = user;

  await prisma.user.create({
    data: {
      email: email ? email : '',
      firstName: given_name,
      lastName: family_name,
      sid: sub,
    },
  });
};

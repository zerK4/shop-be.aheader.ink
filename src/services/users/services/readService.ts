import prisma from '@/lib/prismaFunctions/prisma';

export const getAllUsersService = async () => {
  try {
    const data = await prisma.user.findMany({
      include: {
        events: true,
        registrations: true,
      },
    });
    return {
      message: 'Users fetched successfully!',
      data: data,
      status: 200,
    };
  } catch (err: any) {
    return {
      message: 'Could not fetch users!',
      data: err,
      status: 500,
    };
  }
};

export const getUserBySid = async (user: any) => {
  try {
    const data = await prisma.user.findFirst({
      where: {
        sid: user?.sub as string,
      },
    });
    return {
      message: 'User fetched successfully',
      data: data,
      status: 200,
    };
  } catch (err) {
    process.env.NODE_ENV !== 'production' ? console.error(err) : null;
    return {
      message: 'Error at fetching user!',
      data: err,
      status: 500,
    };
  }
};

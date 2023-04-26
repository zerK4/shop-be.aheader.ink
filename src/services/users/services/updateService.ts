import prisma from '@/lib/prismaFunctions/prisma';

export const updateUserService = async (updatedUser: any, user: any) => {
  try {
    const data = await prisma.user.update({
      where: {
        sid: user?.sub,
      },
      data: updatedUser,
    });
    return {
      message: 'Account updated successfully!',
      data: data,
      status: 200,
    };
  } catch (err: any) {
    console.log(err);

    return {
      message: 'We could not update the account!',
      data: err,
      status: 500,
    };
  }
};

import prisma from '@/lib/prismaFunctions/prisma';

export const getAllProducts = async () => {
  try {
    const data = await prisma.product.findMany();
    return {
      message: 'Products fetched successfully!',
      data: data,
      status: 200,
    };
  } catch (err: any) {
    return {
      message: 'There was an issue fetching the products!',
      data: err.message,
      status: 500,
    };
  }
};

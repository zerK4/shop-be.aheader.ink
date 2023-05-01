import prisma from '@/lib/prismaFunctions/prisma';

export const readAllCategoriesService = async () => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        products: true,
        subCategories: true,
      },
    });

    return {
      message: 'Categories fetched successfully!',
      data: categories,
      status: 200,
    };
  } catch (err: any) {
    process.env.NODE_ENV !== 'production' ? console.error(err.message) : null;
    return {
      message: err.message,
      data: err,
      status: 500,
    };
  }
};

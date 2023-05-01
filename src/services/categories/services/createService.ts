import prisma from '@/lib/prismaFunctions/prisma';

export const createCategoryService = async (data: any) => {
  try {
    const category = await prisma.category.create({
      data: {
        name: data.name,
        description: data.description,
      },
    });
    return {
      message: 'Category created successfully',
      data: category,
      status: 200,
    };
  } catch (err: any) {
    process.env.NODE_ENV !== 'production' && console.error(err.message);
    return {
      message: err.message,
      status: 500,
      data: err,
    };
  }
};

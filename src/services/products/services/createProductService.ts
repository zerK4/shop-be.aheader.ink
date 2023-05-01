import prisma from '@/lib/prismaFunctions/prisma';

export const createProductService = async (product: any) => {
  const { name, price, description, attributes, categories, tax, taxPercent, salePrice } = product;
  try {
    const data = await prisma.product.create({
      data: {
        name: name,
        description: description,
        price: price,
        attributes: attributes,
        categories: categories,
        salePrice: salePrice,
        tax: tax,
        taxPercent: taxPercent,
      },
    });
    return {
      message: 'Product created successfully!',
      data: data,
      status: 200,
    };
  } catch (err: any) {
    console.log(err.message);

    return {
      message: 'Could not create the product!',
      data: err,
      status: 500,
    };
  }
};

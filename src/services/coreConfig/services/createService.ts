import prisma from '@/lib/prismaFunctions/prisma';

export const createCoreConfigService = async (datas: any) => {
  try {
    const { url, protocol, host, name } = datas;

    const data = await prisma.coreConfigData.upsert({
      where: {
        name: name,
      },
      update: {
        protocol: protocol,
        base: host,
        path: url,
        url: `${protocol}://${host}${url}`,
        value: '0',
      },
      create: {
        name: name,
        protocol: protocol,
        base: host,
        path: url,
        value: '0',
      },
    });
    return {
      message: 'Config successfully created!',
      data: data,
      status: 200,
    };
  } catch (err) {
    process.env.NODE_ENV !== 'production' ? console.error(err) : null;
    return {
      message: 'Error creating the configuration!',
      data: err,
      status: 500,
    };
  }
};

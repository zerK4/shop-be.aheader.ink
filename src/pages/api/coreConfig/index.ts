import handler from '@/lib/handlers/routeHandler';
import prisma from '@/lib/prismaFunctions/prisma';
import { createCoreConfig } from '@/services/coreConfig/controller/createController';

export default handler.get(async (req, res) => {
  await createCoreConfig(req, res);
});

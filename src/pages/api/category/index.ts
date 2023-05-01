import handler from '@/lib/handlers/routeHandler';
import { createCategoryController } from '@/services/categories/controller/createController';
import { readAllCategoriesController } from '@/services/categories/controller/readController';

export default handler
  .get(async (req, res) => {
    res.setHeader('Cache-Control', 's-maxage=86400');
    await readAllCategoriesController(req, res);
  })
  .post(async (req, res) => {
    res.setHeader('Cache-Control', 's-maxage=86400');
    await createCategoryController(req, res);
  });

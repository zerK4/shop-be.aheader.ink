import handler from '@/lib/handlers/routeHandler';
import { createProductController } from '@/services/products/controllers/createProductController';
import { readProductController } from '@/services/products/controllers/readProductController';

export default handler
  .get(async (req, res) => {
    res.setHeader('Cache-Control', 's-maxage=86400');
    await readProductController(req, res);
  })
  .post(async (req, res) => {
    res.setHeader('Cache-Control', 's-maxage=86400');
    await createProductController(req, res);
  });

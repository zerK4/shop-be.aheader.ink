import { createCategoryService } from '../services/createService';
import { NextApiRequest, NextApiResponse } from 'next';

export const createCategoryController = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { message, status, data } = await createCategoryService(req.body);
  return res.status(status).send({
    message,
    data,
    status,
  });
};

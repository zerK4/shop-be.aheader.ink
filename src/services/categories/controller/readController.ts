import { NextApiRequest, NextApiResponse } from 'next';
import { readAllCategoriesService } from '../services/readService';

export const readAllCategoriesController = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { message, data, status } = await readAllCategoriesService();

  return res.status(status).send({
    message,
    data,
    status,
  });
};

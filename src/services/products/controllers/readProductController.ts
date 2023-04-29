import { NextApiRequest, NextApiResponse } from 'next';
import { getAllProducts } from '../services/readProductService';

export const readProductController = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { message, data, status } = await getAllProducts();

  return res.status(status).send({
    message, data, status
  });
};

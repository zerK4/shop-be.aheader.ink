import { NextApiRequest, NextApiResponse } from 'next';
import { createProductService } from '../services/createProductService';

export const createProductController = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { message, data, status } = await createProductService(req.body);

  return res.status(status).send({
    message, data, status
  });
};

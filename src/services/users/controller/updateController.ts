import { getSession } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { updateUserService } from '../services/updateService';

export const updateUserController = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getSession(req, res);
  const user = session?.user;
  const updatedUser = req.body;

  const { message, data, status } = await updateUserService(updatedUser, user);

  return res.status(status).send({
    message,
    data,
    status,
  });
};

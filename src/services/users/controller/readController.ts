import { NextApiRequest, NextApiResponse } from 'next';
import { getAllUsersService, getUserBySid } from '../services/readService';
import { getSession } from '@auth0/nextjs-auth0';

export const getAllUsers = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { message, data, status } = await getAllUsersService();

  return res.status(status).send({
    message,
    data,
    status,
  });
};

export const getCurrentUser = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getSession(req, res);
  const user = session?.user;

  const { message, data, status } = await getUserBySid(user);

  return res.status(status).send({
    message,
    data,
    status,
  });
};

import prisma from '@/lib/prismaFunctions/prisma';
import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, {
        async afterCallback(req, res, session) {
          console.log(session.user);
          const {
            user: { email, given_name, family_name, sub },
          } = session;
          const user = await prisma.user.findFirst({
            where: {
              sid: sub as string,
            },
          });
          if (!user) {
            const data = await prisma.user.create({
              data: {
                email: email ? email : '',
                firstName: given_name,
                lastName: family_name,
                sid: sub,
              },
            });
            console.log(data, 'new user');
          }

          console.log(user, 'session hit');

          return session;
        },
      });
    } catch (err: any) {
      res.status(err.status || 500).end(err.message);
    }
  },
});

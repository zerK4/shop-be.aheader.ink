import { createAfterLogin } from '@/services/users/services/createService';
import { getUserBySid } from '@/services/users/services/readService';
import { handleAuth, handleCallback, handleLogin } from '@auth0/nextjs-auth0';

export default handleAuth({
  async login(req, res) {
    await handleLogin(req, res, {
      returnTo: '/checks',
    });
  },
  async callback(req, res) {
    try {
      await handleCallback(req, res, {
        async afterCallback(req, res, session) {
          console.log('something here');

          const { user } = session;
          const { data } = await getUserBySid(user);
          if (!data) {
            await createAfterLogin(user);
          }
          return session;
        },
      });
    } catch (err: any) {
      res.status(err.status || 500).end(err.message);
    }
  },
});

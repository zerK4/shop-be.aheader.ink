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
          return session;
        },
      });
    } catch (err: any) {
      res.status(err.status || 500).end(err.message);
    }
  },
});

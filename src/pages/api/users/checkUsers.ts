import handler from '@/lib/handlers/routeHandler';
import prisma from '@/lib/prismaFunctions/prisma';

export default handler.post(async (req, res) => {
  const { user: id } = req.body;
  if (id) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          sid: id,
        },
      });
      if (user?.email === '') {
        res.status(200).send({
          message: `Please provide a valid email address!`,
          user: user,
        });
      }
    } catch (err: any) {
      console.error(err);
      res.status(500).send({
        message: `Ooops, got an error checking the user: ${err.message}`,
      });
    }
  }
});

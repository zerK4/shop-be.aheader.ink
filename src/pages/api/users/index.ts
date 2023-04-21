import handler from '@/lib/handlers/routeHandler';
import prisma from '@/lib/prismaFunctions/prisma';

export default handler.post(async (req, res) => {
  const { email, sid } = req.body;
  console.log(email, sid);

  try {
    const data = await prisma.user.updateMany({
      where: {
        sid: sid,
      },
      data: {
        email: email,
      },
    });
    console.log(data, 'sadasd');

    return res.status(200).send({
      message: `Email address updated successfully!`,
    });
  } catch (err: any) {
    console.log(err.message);
    return res.status(500).send({
      message: `Could not update email address! ${err.message}`,
    });
  }
});

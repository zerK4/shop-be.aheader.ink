import handler from '@/lib/handlers/routeHandler';
import { getCurrentUser } from '@/services/users/controller/readController';
import { updateUserController } from '@/services/users/controller/updateController';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(
  handler
    .post(async (req, res) => {})
    .get(async (req, res) => {
      const {
        query: { scope },
      } = req;

      if (scope === 'current_user') {
        await getCurrentUser(req, res);
      }
    })
    .put(async (req, res) => {
      const {
        query: { scope },
      } = req;

      if (scope === 'update_current_user') {
        await updateUserController(req, res);
      }
    })
);

//kjads hba

import handler from "@/lib/handlers/routeHandler";
import { createProductController } from "@/services/products/controllers/createProductController";
import { readProductController } from "@/services/products/controllers/readProductController";

export default handler.get(async (req, res) => {
    await readProductController(req, res)
}).post(async (req, res) => {
    await createProductController(req, res)
})
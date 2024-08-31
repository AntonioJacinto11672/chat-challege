import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { AuthController } from "./controllers/AuthController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {


    /* Route of teste */
    fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
        return {
            Teste: true
        }
    })

    /* Route of Login */
    fastify.post("/login", async (request: FastifyRequest, reply: FastifyReply) => {
        return new AuthController().login(request, reply)
    })

}
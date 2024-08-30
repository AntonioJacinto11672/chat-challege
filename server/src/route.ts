import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    
    /* Route of teste */
    fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
        return {
            Teste: true
        }
    })

}
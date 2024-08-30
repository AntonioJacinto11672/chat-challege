import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { MessageController } from "../controllers/MessageController";


/* Route para utilizador */
const messageController = new MessageController()
export async function messageRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
     /* Route of get All message */
     fastify.get("/message", async (request: FastifyRequest, reply: FastifyReply) => {
        return await messageController.getAllMessage(request, reply)
    })

    /* router create message */
    fastify.post("/message", async (request: FastifyRequest, reply: FastifyReply) => {
        return await messageController.ceateMessage(request, reply)
    })

     /* router Update user */
     fastify.put("/message", async (request: FastifyRequest, reply: FastifyReply) => {
        return await messageController.updateMessages(request, reply)
    })

    

     /* router Delete user */
     fastify.delete("/message", async (request: FastifyRequest, reply: FastifyReply) => {
        return await messageController.deleteMessage(request, reply)
    })

    
    
}
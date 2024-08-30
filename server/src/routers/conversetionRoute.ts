import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { ConversationController } from "../controllers/ConversationController";


export async function conversationRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    const conversationController = new ConversationController()
    
    /* Route of conversation */
    fastify.get("/conversation", async (request: FastifyRequest, reply: FastifyReply) => {
        return await conversationController.getAllConversetionById(request, reply)
    })

     /* Create of conversation */
     fastify.post("/conversation", async (request: FastifyRequest, reply: FastifyReply) => {
        return await conversationController.ceateConversetion(request, reply)
    })

     /* Delete of conversation */
     fastify.delete("/conversation", async (request: FastifyRequest, reply: FastifyReply) => {
        return await conversationController.deleteMessage(request, reply)
    })

}
import { FastifyReply, FastifyRequest } from "fastify";
import { Conversetion, Message, User } from "@prisma/client";
import bcrypt from "bcrypt";
import { validatePassword } from "../../validation/password";
import { validateEmail } from "../../validation/email";
import { ConversetionService } from "../services/conversationService";

export interface Membersprops {
    senderId: string,
    receiverId: string
}


const conversationService = new ConversetionService()

class ConversationController {
    /* get all conversation  */
    async getAllConversetionById(request: FastifyRequest, reply: FastifyReply) {
        /* const { searchTerm } = request.query as { searchTerm: string } */
        const { id } = request.query as { id: string }

        if (!id) {
            throw new Error("Do not have Conversetion")
        }

        const resbyId = await conversationService.getConversetionById({ id })

        return reply.send(resbyId)
    }

    /* add Conversetions  */
    async ceateConversetion(request: FastifyRequest, reply: FastifyReply) {
        const members: Membersprops = request.body as Membersprops

        //console.log("Data ", data)

        /* Verificar se os dados estão vazio */
        if (!members) {
            throw new Error("All Membres is required!")
        } else {
            if (!members.senderId) {
                throw new Error("Sender is missing!")
            } else if (!members.receiverId) {
                throw new Error("Receiver is missing!")
            }
        }

        
        const responseControllerConversetions = await conversationService.ceateConversetion(members)


        reply.send(responseControllerConversetions)

    }

    /* delete Message */
    async deleteMessage(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as { id: string }



        if (!id) {
            throw new Error("Message unkwon!")
        }

        try {
            const responseControllerUser = await conversationService.deleteConversetion({ id })

            reply.send(responseControllerUser)
        } catch (error) {
            console.log(error)

        }

    }

}

export { ConversationController }
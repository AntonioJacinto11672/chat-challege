import { FastifyReply, FastifyRequest } from "fastify";
import { Message, User } from "@prisma/client";
import { MessageService } from "../services/messageService";

const messageService = new MessageService()

class MessageController {
    /* get all users  */
    async getAllMessage(request: FastifyRequest, reply: FastifyReply) {
        /* const { searchTerm } = request.query as { searchTerm: string } */
        const { id } = request.query as { id: string }

        if (!id) {
            throw new Error("Do not have Message")
        }

        /*  if (searchTerm) {
             const search = await messageService.getMessageTermSearch({ searchTerm })
 
             return reply.send(search)
         } */

        const resbyId = await messageService.getMessageById({ id })

        return reply.send(resbyId)
    } 
    /* get all Messages  */
    async getATermSearchMessages(request: FastifyRequest, reply: FastifyReply) {
        const { searchTerm } = request.query as { searchTerm: string }

        console.log("O Termos que vai pesquisar", searchTerm)

        const resControllerUser = await messageService.getMessageTermSearch({ searchTerm })
        reply.send(resControllerUser)
    }

    /* add Messages  */
    async ceateMessage(request: FastifyRequest, reply: FastifyReply) {
        const data: Message = request.body as Message

        //console.log("Data ", data)

        /* Verificar se os dados estão vazio */
        if (!data) {
            throw new Error("All field is required!")
        } else {
            if (!data.conversetiionId) {
                throw new Error("conversation field is missing!")
            } else if (!data.sender) {
                throw new Error("sender field is missing!")
            } else if (!data.text) {
                throw new Error("Text field is missing!")
            }
        }

        const responseControllerMessages = await messageService.ceateMessage(data)


        reply.send(responseControllerMessages)

    }

    /* Update Messages */
    async updateMessages(request: FastifyRequest, reply: FastifyReply) {
        const data: Message = request.body as Message

        //console.log("Data ", data)

        /* Verificar se os dados estão vazio */
        if (!data) {
            throw new Error("All field is required!")
        } else {
            if (!data.id) {
                throw new Error("Message is missing!")
            }

            else if (!data.text) {
                throw new Error("email is missing!")
            }
        }

        const MessageRes = await messageService.updateMessage(data)

        reply.send(MessageRes)

    }



    /* delete Message */
    async deleteMessage(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as { id: string }

        

        if (!id) {
            throw new Error("Message unkwon!")
        }

        try {
            const responseControllerUser = await messageService.deleteMessage({ id })

            reply.send(responseControllerUser)
        } catch (error) {
            console.log(error)

        }

    }

}

export { MessageController }
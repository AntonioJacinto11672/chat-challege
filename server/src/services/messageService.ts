import { Message } from "@prisma/client";
import prismaClient from "../prisma";

interface IdParams {
    id: string
}

export interface IMessageParams {
    searchTerm?: string
}


class MessageService {

    /* create a new message */
    async ceateMessage(data: Message) {
        console.log(data)
        const responseServiceMessage = await prismaClient.message.create({
            data: {
                ...data
            }
        })


        return responseServiceMessage
    }

  


    /* get a Message  */
    async getMessageTermSearch({ searchTerm }: IMessageParams) {
        try {
            if (!searchTerm) {
                throw new Error("Not search Value")
            }


            const resMessage = await prismaClient.message.findMany({
                where: {
                    OR: [
                        {
                            sender: {
                                contains: searchTerm,
                                mode: 'insensitive', // case-insensitive
                            },
                        },
                        {
                            text: {
                                contains: searchTerm,
                                mode: 'insensitive',
                            },
                        },
                        
                    ],
                
                },
                orderBy: {
                    createdAt: 'desc'
                }
            })
            //console.log(" Retorando algo", resMessage)
            return resMessage
        } catch (error: any) {
            throw new Error(error)
        }
    }

    /* get message by Id */
    async getMessageById({ id }: IdParams) {
        try {
            const findMessage = await prismaClient.message.findMany({
                where: {
                    conversetiionId: id
                }
            })

            if (!findMessage) {
                throw new Error("message  not found!")
            }

            return findMessage
        } catch (error) {
            console.log(error)
        }
    }

    /* Update Message  */
    async updateMessage(data: Message) {

        try {
            const findMessage = await prismaClient.message.findFirst({
                where: {
                    id: data.id
                }
            })

            if (!findMessage) {
                throw new Error("message not found!")
            }

            console.log("Dados na model", data)
            const resmessage = await prismaClient.message.update({
                where: {
                    id: findMessage.id
                },
                data: {
                    text: data.text,
                }
            })

            return resmessage
        } catch (error) {
            console.log(error)
        }



    }

    /* Delete message */

    /* Apagar uma tarefa */
    async deleteMessage({ id }: IdParams) {

        try {
            const findMessage = await prismaClient.message.findFirst({
                where: {
                    id: id
                }
            })

            if (!findMessage) {
                throw new Error("Message  not found!")
            }

            await prismaClient.message.delete({
                where: {
                    id: findMessage.id
                }
            })
            return { message: "message delete with Sucecss!" }
        } catch (error) {
            console.log(error)
        }
    }


}

export { MessageService }
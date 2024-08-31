
import prismaClient from "../prisma";
import { Membersprops } from "../controllers/ConversationController";

interface IdParams {
    id: string
}

export interface IConversetionParams {
    searchTerm?: string
}


class ConversetionService {

    /* create a new Conversetion */
    async  ceateConversetion(data: Membersprops) {
        console.log(data)
        const responseServiceConversetion = await prismaClient.conversetion.create({
            data: {
                members: [data.senderId, data.receiverId]
            }
        })


        return responseServiceConversetion
    }

  

    /* get Conversetion by Id */
    async getConversetionById({ id }: IdParams) {
        try {
            const findConversetion = await prismaClient.conversetion.findMany({
                where: {
                    members: {
                        has: id
                    }
                }
            })

            if (!findConversetion) {
                throw new Error("Conversetion  not found!")
            }

            return findConversetion
        } catch (error) {
            console.log(error)
        }
    }

    

    /* Delete Conversetion */

    /* Apagar uma tarefa */
    async deleteConversetion({ id }: IdParams) {

        try {
            const findConversetion = await prismaClient.conversetion.findFirst({
                where: {
                    id: id
                }
            })

            if (!findConversetion) {
                throw new Error("Conversetion  not found!")
            }

            await prismaClient.conversetion.delete({
                where: {
                    id: findConversetion.id
                }
            })
            return { Conversetion: "Conversetion delete with Sucecss!" }
        } catch (error) {
            console.log(error)
        }
    }


}

export { ConversetionService }
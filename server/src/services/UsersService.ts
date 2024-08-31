import { User } from "@prisma/client";
import prismaClient from "../prisma";
import client from "../prisma";

interface IdParams {
    id: string
}

export interface IUsersParams {
    searchTerm?: string
}


class UserService {

    /* create a new user */
    async ceateUsers(data: User) {
        //console.log(data)

        //await this.emailDb(data)
        const responseServiceUser = await prismaClient.user.create({
            data: {
                ...data
            }
        })


        return responseServiceUser
    }

    /* get all users */
    async getAllUsers() {
        try {
            const resUser = await prismaClient.user.findMany()

            return resUser
        } catch (err) {
            console.log(err)
        }
    }

    /* get user by Email */

    async getUserByEmail({ searchTerm }: IUsersParams) {
        if (!searchTerm) {
            return false
        }

        const email = await client.user.findFirst({
            where: {
                email: searchTerm
            }
        })

        if (!email) {
            return false
        } 

        return true



    }

    /* get a users  */
    async getUsersTermSearch({ searchTerm }: IUsersParams) {
        try {


            if (!searchTerm) {
                throw new Error("Not search Value")
            }

            console.log("Termos, ", searchTerm)
            let query: any = {}

            const resUsers = await prismaClient.user.findMany({
                where: {
                    OR: [
                        {
                            email: {
                                contains: searchTerm,
                                mode: 'insensitive', // case-insensitive
                            },
                        },
                        {
                            name: {
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
            console.log(" Retorando algo", resUsers)
            return resUsers
        } catch (error: any) {
            throw new Error(error)
        }
    }

    /* get user by Id */
    async getUserById({ id }: IdParams) {
        try {
            const findUser = await prismaClient.user.findFirst({
                where: {
                    id: id
                }
            })

            if (!findUser) {
                throw new Error("User  not found!")
            }

            return findUser
        } catch (error) {
            console.log(error)
        }
    }

    /* Update user  */
    async updateUser(data: User) {

        try {
            const findUsers = await prismaClient.user.findFirst({
                where: {
                    id: data.id
                }
            })

            if (!findUsers) {
                throw new Error("User not found!")
            }

            console.log("Dados na model", data)
            const resUser = await prismaClient.user.update({
                where: {
                    id: findUsers.id
                },
                data: {
                    name: data.name,
                    email: data.email,
                }
            })

            return resUser
        } catch (error) {
            console.log(error)
        }



    }

    /* Update user Image */
    async updateImage(data: User) {
        try {
            const resid = await prismaClient.user.findUnique({
                where: {
                    id: data.id
                }
            })

            if (!resid) {
                throw new Error("User not found!")
            }

            const resUser = await prismaClient.user.update({
                where: {
                    id: resid.id
                },
                data: {
                    image: data.image,
                }
            })

            return resUser

        } catch (error) {
            console.log(error)
        }

    }

    /* Update user Password  */
    async updateUserHashPassword(data: User) {
        try {
            const resid = await prismaClient.user.findUnique({
                where: {
                    id: data.id
                }
            })

            if (!resid) {
                throw new Error("User not found!")
            }

            console.log("New hash", data.hashedPassword)
            const resUser = await prismaClient.user.update({
                where: {
                    id: resid.id
                },
                data: {
                    hashedPassword: data.hashedPassword,
                }
            })

            return resUser
        } catch (error) {
            console.log(error)
        }

    }

    /* Delete user */

    /* Apagar uma tarefa */
    async deleteUsers({ id }: IdParams) {

        try {
            const findTask = await prismaClient.user.findFirst({
                where: {
                    id: id
                }
            })

            if (!findTask) {
                throw new Error("User  not found!")
            }

            await prismaClient.user.delete({
                where: {
                    id: findTask.id
                }
            })
            return { message: "user delete with Sucecss!" }
        } catch (error) {
            console.log(error)
        }
    }

}

export { UserService }
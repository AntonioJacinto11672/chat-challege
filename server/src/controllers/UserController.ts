import { FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "../services/UsersService";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { validatePassword } from "../../validation/password";
import { validateEmail } from "../../validation/email";
import jwt from "jsonwebtoken"


const userService = new UserService()

class UserController {
    /* get all users  */
    async getAllUsers(request: FastifyRequest, reply: FastifyReply) {
        const { searchTerm } = request.query as { searchTerm: string }
        const { id } = request.query as { id: string }

        if (id) {
            console.log("Vai pesquisar por id")
            const resbyId = await userService.getUserById({ id })

            return reply.send(resbyId)
        }

        if (searchTerm) {
            const search = await userService.getUsersTermSearch({ searchTerm })

            return reply.send(search)
        }
        const resControllerUser = await userService.getAllUsers()
        return reply.send(resControllerUser)
    }

    /* get all users  */
    async getATermSearchUsers(request: FastifyRequest, reply: FastifyReply) {
        const { searchTerm } = request.query as { searchTerm: string }

        console.log("O Termos que vai pesquisar", searchTerm)

        const resControllerUser = await userService.getUsersTermSearch({ searchTerm })
        reply.send(resControllerUser)
    }

    /* add users  */
    async ceateUsers(request: FastifyRequest, reply: FastifyReply) {
        const data: User = request.body as User

        //console.log("Data ", data)

        /* Verificar se os dados estão vazio */
        if (!data) {
            throw new Error("All field is required!")
        } else {
            if (!data.email) {
                return reply.status(401).send({ message: "email is missing!" })
            } else if (!data.hashedPassword) {
                return reply.status(401).send({ message: "Passwor is missing..." })
            } else if (!validatePassword(data.hashedPassword)) {
                return reply.status(401).send({ message: validatePassword(data.hashedPassword).messages[0] })
            } else if (!validateEmail(data.email)) {
                return reply.status(401).send({ message: "Email is not valid" })
            }
            const searchTerm = data.email
            const emailUnique = await userService.getUserByEmail({ searchTerm })
            console.log("Email is unique", emailUnique)
            if (emailUnique) {
                return reply.status(401).send({ message: "We have acount associate this email, please try other" })
            }
        }

        const salt = await bcrypt.genSalt(10);
        data.hashedPassword = await bcrypt.hash(data.hashedPassword, salt)


        const responseControllerUsers = await userService.ceateUsers(data)

        // Create JWT token
        const token = jwt.sign(
            { id: responseControllerUsers.id, email: responseControllerUsers.email }, // payload
            process.env.JWT_SECRET!, // secret key (make sure to store it securely)
            { expiresIn: '1d' } // token expiration time
        );



        return reply.status(200).send({ responseControllerUsers, token })

    }

    /* Update Users */
    async updateUsers(request: FastifyRequest, reply: FastifyReply) {
        const data: User = request.body as User

        //console.log("Data ", data)

        /* Verificar se os dados estão vazio */
        if (!data) {
            throw new Error("All field is required!")
        } else {
            if (!data.id) {
                throw new Error("id is missing!")
            }

            else if (!data.email) {
                throw new Error("email is missing!")
            }

            else if (!validateEmail(data.email)) {
                throw new Error("Email is not valid")
            }
        }

        const userRes = await userService.updateUser(data)

        reply.send(userRes)

    }

    /* Update password */
    async updatePassword(request: FastifyRequest, reply: FastifyReply) {
        const data: User = request.body as User

        //console.log("Data ", data)

        /* Verificar se os dados estão vazio */
        if (!data) {
            throw new Error("All field is required!")
        } else {
            if (!data.id) {
                throw new Error("user is unknown!")
            } else if (!data.hashedPassword) {
                throw new Error("Password is missing...")
            } else if (!validatePassword(data.hashedPassword).isValid) {


                throw new Error(validatePassword(data.hashedPassword).messages[0])
            }
        }


        data.hashedPassword = await bcrypt.hash(data.hashedPassword, 10)



        const responseControllerUsers = await userService.updateUserHashPassword(data)


        reply.send(responseControllerUsers)

    }

    /* Update Image */
    async updateImage(request: FastifyRequest, reply: FastifyReply) {
        const data: User = request.body as User

        if (!data) {
            throw new Error("All field is required!")
        } else {
            if (!data.id) {
                throw new Error("user is unknown!")
            } else if (!data.image) {
                throw new Error("image is missing...")
            }
        }



        const responseControllerUsers = await userService.updateImage(data)


        reply.send(responseControllerUsers)

    }


    /* delete task */
    async deleteUsers(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as { id: string }

        console.log("O Id", id)

        if (!id) {
            throw new Error("user unkwon!")
        }

        try {
            const responseControllerUser = await userService.deleteUsers({ id })


            reply.send(responseControllerUser)
        } catch (error) {
            console.log(error)

        }

    }
}

export { UserController }
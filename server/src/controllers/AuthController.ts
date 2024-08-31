import bcrypt from "bcrypt";
import { FastifyReply, FastifyRequest } from "fastify";
import { LoginType } from "../types/loginType";
import { validateEmail } from "../../validation/email";
import { AuthService } from "../services/authService";
import jwt from "jsonwebtoken"

const useAuth = new AuthService()
class AuthController {

    async login(request: FastifyRequest, reply: FastifyReply) {
        const data: LoginType = request.body as LoginType

        if (!data) {
            throw new Error("Email And Password is required!")
        }

        if (!data.email) {
            throw new Error("Email is required!")
        } else if (!validateEmail(data.email)) {
            throw new Error("Email not have valid format!")
        }
        if (!data.hashedPassword) {
            throw new Error("Password is required!")
        }


        const user = await useAuth.login(data)

        if (!user || !user.hashedPassword) {
            throw new Error("Invalid email ou Password")
        }
        const isCorrectPassword = await bcrypt.compare(
            data.hashedPassword,
            user.hashedPassword
        )
        if (!isCorrectPassword) {
            throw new Error("Invalid email or password")
        }

        // Create JWT token
        const token = jwt.sign(
            { id: user.id, email: user.email }, // payload
            process.env.JWT_SECRET!, // secret key (make sure to store it securely)
            { expiresIn: '1d' } // token expiration time
        );



        return reply.send({ user, token })
    }

}

export { AuthController }
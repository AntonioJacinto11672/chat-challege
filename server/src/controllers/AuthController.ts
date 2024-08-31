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
        console.log("Requisição chegou sim ")

        if (!data) {
            console.error("Email And Password is required!")
            return reply.status(401).send({ message: 'Email And Password is required!' });
        }

        if (!data.email) {
            console.error("Email is required!")
        } else if (!validateEmail(data.email)) {
            console.error("Email not have valid format!")
            return reply.status(401).send({ message: 'Email not have valid format!' });

        }
        if (!data.hashedPassword) {
            console.error("Password is required!")
            return reply.status(401).send({ message: 'Password is required!' });

        }


        const user = await useAuth.login(data)

        if (!user || !user.hashedPassword) {
            console.log("Invalid email ou Password")
            return reply.status(401).send({ message: "Invalid email ou Password" });

        }
        const isCorrectPassword = await bcrypt.compare(
            data.hashedPassword,
            user.hashedPassword
        )
        if (!isCorrectPassword) {
            console.log("Invalid email or password")
            return reply.status(401).send({ message: 'Invalid email or password' });

        }

        // Create JWT token
        const token = jwt.sign(
            { id: user.id, email: user.email }, // payload
            process.env.JWT_SECRET!, // secret key (make sure to store it securely)
            { expiresIn: '1d' } // token expiration time
        );


        
        return reply.status(200).send({ user, token })
    }

}

export { AuthController }
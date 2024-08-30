import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { UserController } from "../controllers/UserController";

/* Route para utilizador */
const userController = new UserController()
export async function userRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
     /* Route of get All users */
     fastify.get("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        return await userController.getAllUsers(request, reply)
    })

   

    

    /* router create users */
    fastify.post("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        return await userController.ceateUsers(request, reply)
    })

     /* router Update user */
     fastify.put("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        return await userController.updateUsers(request, reply)
    })

      /* router Update user Password */
      fastify.put("/users/password", async (request: FastifyRequest, reply: FastifyReply) => {
        return await userController.updatePassword(request, reply)
    })

     /* router Update user Image */
     fastify.put("/users/image", async (request: FastifyRequest, reply: FastifyReply) => {
        return await userController.updateImage(request, reply)
    })

     /* router Delete user */
     fastify.delete("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        return await userController.deleteUsers(request, reply)
    })

    
    
}
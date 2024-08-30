import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./route";
import { userRoutes } from "./routers/usersRoutes";
import { messageRoutes } from "./routers/messageRoutes";
import { conversationRoutes } from "./routers/conversetionRoute";

//Init server

const app = Fastify({
    logger: true
})

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message })
})


const start = async () => {
    //fetch routes and acept cors comunication with athor app
    await app.register(cors)
    await app.register(routes)
    await app.register(userRoutes)
    await app.register(messageRoutes)
    await app.register(conversationRoutes)

    try {

        //app backend listem port 8000

        await app.listen({ port: 8000 })
    } catch (error) {
        process.exit()
    }
}


start()
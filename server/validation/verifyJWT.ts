import jwt  from 'jsonwebtoken';
import { FastifyReply, FastifyRequest } from 'fastify';

async function verifyJWT(request: FastifyRequest, reply: FastifyReply, next: () => void) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        return reply.status(401).send({ message: 'Token is missing!' });
    }

    const token = authHeader.split(' ')[1]; // Assuming Bearer token format

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        //request.user = decoded; // Attach decoded user data to request
        next();
    } catch (err) {
        return reply.status(401).send({ message: 'Invalid token!' });
    }
}

export default verifyJWT;

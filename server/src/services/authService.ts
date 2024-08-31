import client from "../prisma";
import { LoginType } from "../types/loginType";

class AuthService {

    

    /* login User */

    async login(data: LoginType) {
        try {
            const res = client.user.findFirst({ 
                where: {
                    email: data.email
                }
            })

            return res
        } catch (error) {
            console.log(error)
        }
    }
}

export { AuthService }
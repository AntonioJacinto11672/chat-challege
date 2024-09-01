import { createContext, useEffect, useState } from "react"
import Cookies from 'js-cookie';

export const getUserLogin = () => {
    const [userData, setUserData] = useState<User>()

    useEffect(() => {
        const userCookies: any = Cookies.get('user')
        const userCokies2: User = JSON.parse(userCookies)

        setUserData(userCokies2)
    }, [])



    return { userData }
}


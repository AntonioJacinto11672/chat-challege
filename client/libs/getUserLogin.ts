import { createContext, useEffect, useState } from "react"
import Cookies from 'js-cookie';

export const getUserLogin = () => {
    const [userData, setUserData] = useState<User | null>(null)

    useEffect(() => {
        const userCookies: any = Cookies.get('user')
        const userCokies2: User | null = JSON.parse(userCookies)

        setUserData(userCokies2)
    }, [])



    return { userData }
}


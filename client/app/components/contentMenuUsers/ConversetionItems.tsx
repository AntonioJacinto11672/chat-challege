import { getUserLogin } from "@/libs/getUserLogin";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie"
import { Avatar } from "flowbite-react";
import { format } from "timeago.js";

interface ConversetionItemsProps {
    conversation: ConversetionType
}

const ConversetionItems: React.FC<ConversetionItemsProps> = ({ conversation }) => {
    const [user, setUser] = useState<User>()
    const { userData } = getUserLogin()


    /* Pegar outro membro da convera */
    console.log("Aqui não faz nada")

    useEffect(() => {

        const findFriend = conversation.members.find((member) => member !== userData?.id)

        const getUser = async () => {
            try {

                const response = await fetch(`http://localhost:8000/users?id=${findFriend}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${Cookies.get('token')}`,
                    }
                });
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Something went wrong');
                }

                const data = await response.json();

                console.log("OS members ", data)
                setUser(data)
            } catch (error) {
                console.log(error)
            }
        }
        /* Instance de classe */
        if (userData?.id) {
            getUser()
        }

    }, [userData?.id, conversation])



    return (<>
        <li className="px-5 py-[15px] hover:bg-slate-100  group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
            <a href="#">
                <div className="flex">
                    <div className="relative self-center ltr:mr-3 rtl:ml-3">
                        {user?.image ?
                            <>
                                <img
                                    src={user.image}
                                    className="rounded-full w-9 h-9"
                                    alt={`${user.name && user.name}`}

                                />
                            </> :
                            <>
                                <Avatar rounded />
                            </>}


                        <span className="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600" />
                    </div>
                    <div className="flex-grow overflow-hidden">
                        <h5 className="mb-1 text-base truncate dark:text-gray-50">
                            {user?.name}
                        </h5>
                        <p className="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">
                            {user?.email}
                        </p>
                    </div>
                    <div className="text-gray-500 text-11 dark:text-gray-300">
                        {user?.createdAt && user.createdAt ? format(user.createdAt) : ''}
                    </div>
                </div>
            </a>
        </li>
    </>);
}

export default ConversetionItems;
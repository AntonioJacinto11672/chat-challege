'use client'
import { ReactNode, useState } from "react";
import ConversetionItems from "./ConversetionItems";

interface ChatsProps {
    children: ReactNode,
}

const Chats: React.FC<ChatsProps> = ({ children }) => {

    return (<>
        <div className="tab-content active">
            {/* Start chat content */}
            <div>
                <div className="px-6 pt-6 ">
                    <h4 className="mb-0 text-gray-700 dark:text-gray-50">Chats</h4>
                    <div className="py-1 mt-5 mb-5 rounded bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                        <span
                            className="bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 pe-1 ps-3 dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600"
                            id="basic-addon1"
                        >
                            <i className="text-lg text-gray-400 ri-search-line search-icon dark:text-gray-200" />
                        </span>
                        <input
                            type="text"
                            className="border-0 bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 placeholder:text-[14px] focus:ring-offset-0 focus:outline-none focus:ring-0 dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600 placeholder:text-gray-400"
                            placeholder="Search messages or users"
                            aria-label="Search messages or users"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                </div>

                {/* end user status */}
                {/* Start chat-message-list */}
                <div>
                    <h5 className="px-6 mb-4 text-16 dark:text-gray-50">Recent</h5>
                    <div className="h-[610px] px-2" data-simplebar="">
                        <ul className="  max-h-[465px]  overflow-y-auto  mb-20">
                            {children}
                        </ul>
                    </div>
                </div>
                {/* End chat-message-list */}
            </div>
        </div>

    </>);
}

export default Chats;
import { IoMenuSharp, IoSearch } from "react-icons/io5";
import { VscKebabVertical } from "react-icons/vsc";

interface MessageHeaderProps {

}

const MessageHeader: React.FC<MessageHeaderProps> = () => {
    return (<div>
        {/* Start Message Header */}
        <div className="Message-header  row-span-1 p-4 shadow-sm  border-b-2 dark:border-b-slate-800  dark:bg-slate-700 flex justify-between items-center">
            <div>
                <div className="flex items-center gap-4">
                    <div className="lg:hidden text-2xl font-medium cursor-pointer"><IoMenuSharp /></div>
                    <img
                        className="w-10 h-10 rounded-full"
                        src="avatar2.png"
                        alt=""
                    />
                    <div className="font-medium dark:text-white">
                        <div>Jese Leos</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            Joined in August 2014
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex  font-bold items-center justify-center content-center gap-4 text-xl">
                <div> <IoSearch /> </div>
                <div> <VscKebabVertical /> </div>
            </div>
        </div>
        {/* End Message Header */}
    </div>);
}

export default MessageHeader;
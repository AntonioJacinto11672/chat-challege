import { CiMenuKebab } from "react-icons/ci";
import { IoMenuSharp, IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { VscKebabVertical } from "react-icons/vsc";

interface MenssageContentProps {
    openMenu: () => void
}
const MenssageContent: React.FC<MenssageContentProps> = ({ openMenu }) => {
    return (<>
        <div className="grid grid-rows-12  h-full ">
            {/* Start Message Header */}
            <div className="Message-header  row-span-1 p-4 shadow-sm  border-b-2 dark:border-b-slate-800  dark:bg-slate-700 flex justify-between items-center">
                <div>
                    <div className="flex items-center gap-4">
                        <div className="lg:hidden text-2xl font-medium cursor-pointer" onClick={openMenu}><IoMenuSharp /></div>
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
            {/* Start Message Content */}
            <div className="Message-Content  row-span-9 overflow-auto p-4">

                <div className="flex items-start gap-2.5 ">
                    <img
                        className="w-8 h-8 rounded-full"
                        src="avatar2.png"
                        alt="Jese image"
                    />
                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                Bonnie Green
                            </span>
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                11:46
                            </span>
                        </div>
                        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                            That's awesome. I think our users will really appreciate the improvements.
                        </p>
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Delivered
                        </span>
                    </div>

                </div>

                <div className="flex items-start gap-2.5 flex-row-reverse mt-3">
                    <img
                        className="w-8 h-8 rounded-full"
                        src="avatar2.png"
                        alt="Jese image"
                    />
                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                Bonnie Green
                            </span>
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                11:46
                            </span>
                        </div>
                        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                            That's awesome. I think our users will really appreciate the improvements.
                        </p>
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Delivered
                        </span>
                    </div>

                </div>


            </div>
            {/* End Message Content */}
            {/* Start Message Footer Send Message */}
            <div className="Message-footer  row-span-2 ">
                <form>
                    <label htmlFor="chat" className="sr-only">
                        Your message
                    </label>
                    <div className="flex  items-center px-3 pt-4 pb-8 my-3 bg-gray-50 dark:bg-gray-700">
                        <textarea
                            id="chat"
                            rows={1}
                            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your message..."
                            defaultValue={""}
                        />
                        <button
                            type="submit"
                            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                        >
                            <svg
                                className="w-5 h-5 rotate-90 rtl:-rotate-90"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 20"
                            >
                                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                            </svg>
                            <span className="sr-only">Send message</span>
                        </button>
                    </div>
                </form>

            </div>
            {/* Start Message Footer Send Message */}
        </div>
    </>);
}

export default MenssageContent;
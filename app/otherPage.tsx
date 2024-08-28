import Image from "next/image";
import { AiFillMessage, AiOutlineMessage } from "react-icons/ai";
import { FaRegUser, FaUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { RiContactsLine, RiLogoutCircleLine, RiProfileLine } from "react-icons/ri";
import Myprofile from "./components/MyProfile";

const componets = [

]

export default function OtherPage() {
  return (
    <main className="flex content-center h-full dark:bg-black">
      {/* Main COntent */}
      <div className="w-[5%] font-semibold bg-white dark:bg-slate-400 text-2xl text-gray-500 shadow-md z-50 border border-r-2  border-r-slate-200 h-full lg:my-auto flex  flex-col justify-between content-center items-center p-7 ">
        <div> <AiFillMessage className=" text-indigo-600" /> </div>
        <div className="">

          <ul>
            <li className="flex-grow lg:flex-grow-0">
              <a id="default-tab" href="#first" className="tab-button flex relative items-center justify-center mx-auto h-12 w-12 leading-[14px] group/tab my-2 rounded-lg bg-indigo-200 bg-opacity-90">
                <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                  <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg " >Profile</span>
                </div>
                <FaRegUser className="" />
              </a>
            </li>
            <li className="flex-grow lg:flex-grow-0">
              <a id="default-tab" href="#first" className="tab-button flex relative items-center justify-center mx-auto h-12 w-12 leading-[14px] group/tab my-2 rounded-lg hover:bg-indigo-200 hover:bg-opacity-90 hover:transition-all">
                <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                  <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Chats</span>
                </div>
                <AiOutlineMessage className="" />
              </a>
            </li>
            <li className="flex-grow lg:flex-grow-0">
              <a id="default-tab" href="#first" className="tab-button flex relative items-center justify-center mx-auto h-12 w-12 leading-[14px] group/tab my-2 rounded-lg hover:bg-indigo-200 hover:bg-opacity-90 hover:transition-all">
                <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                  <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">ConctactS</span>
                </div>
                <RiContactsLine className="" />
              </a>
            </li>
            <li className="flex-grow lg:flex-grow-0">
              <a id="default-tab" href="#first" className="tab-button flex relative items-center justify-center mx-auto h-12 w-12 leading-[14px] group/tab my-2 rounded-lg hover:bg-indigo-200 hover:bg-opacity-90 hover:transition-all">
                <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                  <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Settings</span>
                </div>
                <IoSettingsOutline className="" />
              </a>
            </li>

          </ul>

        </div>

        <div className="pt-4">
          <ul>
            <li className="flex-grow lg:flex-grow-0">
              <a id="default-tab" href="#first" className="tab-button flex relative items-center justify-center mx-auto h-12 w-12 leading-[14px] group/tab my-2 rounded-lg hover:bg-indigo-200 hover:bg-opacity-90 hover:transition-all">
                <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                  <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Settings</span>
                </div>
                <MdDarkMode className="" />
              </a>
            </li>
            <li className="flex-grow lg:flex-grow-0">
              <a id="default-tab" href="#first" className="tab-button flex relative items-center justify-center mx-auto h-12 w-12 leading-[14px] group/tab my-2 rounded-lg hover:bg-indigo-200 hover:bg-opacity-90 hover:transition-all">
                <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                  <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Settings</span>
                </div>
                <RiLogoutCircleLine  className="" />
              </a>
            </li>
          </ul>
         


        </div>

      </div>
      <div className="w-[30%] bg-zinc-100 h-full overflow-auto">
        <Myprofile />
      </div>
      <div className="w-[65%] bg-white h-full overflow-auto">
        Menssage Contact
      </div>
    </main>
  );
}

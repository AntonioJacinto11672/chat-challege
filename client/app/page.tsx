'use client'
import { useTheme } from "next-themes";

import Image from "next/image";
import { AiFillMessage, AiOutlineMessage } from "react-icons/ai";
import { FaRegUser, FaUserCircle } from "react-icons/fa";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import { MdDarkMode, MdMessage, MdOutlineLightMode } from "react-icons/md";
import { RiContactsLine, RiLogoutCircleLine, RiProfileLine, RiRefreshFill } from "react-icons/ri";
import Myprofile from "./components/contentMenuUsers/MyProfile";
import { useState } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Chats from "./components/contentMenuUsers/Chats";
import Settings from "./components/contentMenuUsers/Settings";
import MenssageContent from "./components/MessageContent";
import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiLogout,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
import { CgDarkMode } from "react-icons/cg";

const componets = [

]

export default function Home() {
  const { theme, setTheme, systemTheme, } = useTheme()
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const currentTheme = theme === 'system' ? systemTheme : theme


  return (
    <>
      <main className="grid grid-cols-12 h-screen">
        {/* start Main COntent */}
        {/* Start Sidebar  */}
        <div className="hidden lg:block lg:col-span-1 font-semibold bg-white h-full dark:bg-slate-700 text-2xl text-gray-600 dark:text-gray-100 shadow-md z-50  border-r-2  border-r-slate-200 dark:border-r-slate-800  lg:my-auto p-7 ">
          <div className="">

            <ul>
              <li className="flex-grow lg:flex-grow-0">
                <a id="default-tab" href="#first" className="tab-button flex relative items-center justify-center mx-auto h-12 w-12 leading-[14px] group/tab my-2 rounded-lg text-indigo-600 bg-indigo-200 bg-opacity-90">
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
              <ThemeSwitcher />
              <li className="flex-grow lg:flex-grow-0">
                <a id="default-tab" href="#first" className="tab-button flex relative items-center justify-center mx-auto h-12 w-12 leading-[14px] group/tab my-2 rounded-lg hover:bg-indigo-200 hover:bg-opacity-90 hover:transition-all">
                  <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                    <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Settings</span>
                  </div>
                  <RiLogoutCircleLine className="text-red-600" />
                </a>
              </li>
            </ul>



          </div>

        </div>
        {/* End SideBar */}
        {/* Start  profile ( chat list/ config  */}
        <div className="hidden lg:block lg:col-span-4 bg-gray-50 text-black dark:text-white dark:bg-slate-800  overflow-y-hidden mb-[80px] lg:mb-0 ">
          <Chats />
        </div>
        {/* End  profile ( chat list/ config  */}
        {/* Start Message Content */}

        <div className="col-span-12 lg:col-span-7 bg-white dark:bg-slate-900  overflow-hidden">
          <MenssageContent openMenu={() => setIsOpen(true)} />
        </div>

        {/* End Message Content */}


        <Drawer open={isOpen} onClose={handleClose}>
          <Drawer.Header title="MENU" titleIcon={() => <></>} />
          <Drawer.Items>
            <Sidebar
              aria-label="Sidebar with multi-level dropdown example"
              className="[&>div]:bg-transparent [&>div]:p-0"
            >
              <div className="flex h-full flex-col justify-between py-2">
                <div>
                  <form className="pb-3 md:hidden">
                    <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} />
                  </form>
                  <Sidebar.Items>
                    <Sidebar.ItemGroup>
                      <Sidebar.Item href="/" icon={RiRefreshFill}>
                        Refresh
                      </Sidebar.Item>
                      <Sidebar.Item href="/e-commerce/products" icon={HiUsers}>
                        Profile
                      </Sidebar.Item>
                      <Sidebar.Item href="/users/list" icon={MdMessage}>
                        Chat
                      </Sidebar.Item>
                      <Sidebar.Item href="/authentication/sign-up" icon={IoSettingsSharp}>
                        Settings
                      </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                      <Sidebar.Item href="https://github.com/themesberg/flowbite-react/" icon={CgDarkMode}>
                        Dark Mode
                      </Sidebar.Item>

                      <Sidebar.Item href="https://github.com/themesberg/flowbite-react/issues" icon={HiInformationCircle}>
                        Help
                      </Sidebar.Item>
                      <Sidebar.Item href="https://flowbite-react.com/" icon={HiLogout}>
                        Sign Out
                      </Sidebar.Item>
                    </Sidebar.ItemGroup>
                  </Sidebar.Items>
                </div>
              </div>
            </Sidebar>
          </Drawer.Items>
        </Drawer>
      </main>
    </>
  );
}
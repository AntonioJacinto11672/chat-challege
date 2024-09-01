'use client'
import { useTheme } from "next-themes";

import Image from "next/image";
import { AiFillMessage, AiOutlineMessage } from "react-icons/ai";
import { FaRegUser, FaUserCircle } from "react-icons/fa";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import { MdDarkMode, MdMessage, MdOutlineLightMode } from "react-icons/md";
import { RiContactsLine, RiLogoutCircleLine, RiProfileLine, RiRefreshFill } from "react-icons/ri";
import Myprofile from "./components/contentMenuUsers/MyProfile";
import { useCallback, useContext, useEffect, useState } from "react";
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
import Cookies from 'js-cookie';
import { redirect, useRouter } from "next/navigation";
import Contacts from "./components/contentMenuUsers/Contacts";
import { getUserLogin } from "@/libs/getUserLogin";
import ConversetionItems from "./components/contentMenuUsers/ConversetionItems";
import MessageItems from "./components/message/MessageItems";



export default function Home() {
  const { theme, setTheme, systemTheme, } = useTheme()
  const [isOpen, setIsOpen] = useState(false);
  const [conversation, setConversation] = useState<ConversetionType[]>([])
  const [member, setMember] = useState()
  const [messages, setMessages] = useState<MessageType[]>([])
  const [newMessages, setNewMessages] = useState<MessageType>()
  const [currentchat, setCurrentChat] = useState<ConversetionType>()




  const router = useRouter();

  /* logic for change sidebar menu content */
  const [currentComponetMenu, setCurrentComponetMenu] = useState<number>(0)
  const componetsSideBar = [
    <Myprofile />,
    <Chats>
      {
        conversation && conversation.map(value => {
          return (
            <div onClick={() => setCurrentChat(value)}>
              <ConversetionItems conversation={value} key={value.id} />
            </div>
          )
        })
      }
    </Chats>,
    <Contacts />,
    <Settings />
  ]

  const handleCurrentComponent = useCallback((value: number) => {
    setCurrentComponetMenu(value)

  }, [currentComponetMenu])


  const handleClose = () => setIsOpen(false);

  const token = Cookies.get('token')
  //console.log("Token avaliable", token)
  if (!token) {
    console.log("Token avaliable 2", token)

    redirect('/login')
  }

  const currentTheme = theme === 'system' ? systemTheme : theme
  /* Logut  */
  const handleLogout = () => {
    /* Clear Cookeas */
    Cookies.remove('token', { path: '/' });
    Cookies.remove('user', { path: '/' });
    router.replace('/login');
  };

  /* Get user logged */

  const { userData } = getUserLogin()
  /* Create a chat */
  useEffect(() => {
    if (userData?.id) {
      getConversation()
    }
  }, [userData?.id])

  /* Pegar conversa */
  const getConversation = async () => {
    try {
      console.log(userData?.id)
      const response = await fetch(`http://localhost:8000/conversation?id=${userData?.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      const data = await response.json();

      //console.log("As conversas ", data)
      setConversation(data)

    } catch (error) {
      console.log(error)
    }
  }

  /* Pegar outro membro da convera */
  /* 
    verificar ddepois como pegar os membros
  */


  /* pegar messages */

  const getMessage = async () => {
    try {
      console.log("CurrenrtChat id ", currentchat?.id)
      const response = await fetch(`http://localhost:8000/message?id=66d1f9d30de49438256f47cd`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      const data = await response.json();

      console.log("As Messages ", data)
      setMessages(data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (userData?.id) {
      getMessage()
    }
  }, [currentchat])

  return (
    <>
      <main className="grid grid-cols-12 h-screen">
        {/* start Main COntent */}
        {/* Start Sidebar  */}
        <div className="hidden lg:block lg:col-span-1 font-semibold bg-white h-full dark:bg-slate-700 text-2xl text-gray-600 dark:text-gray-100 shadow-md z-50  border-r-2  border-r-slate-200 dark:border-r-slate-800  lg:my-auto p-7 ">
          <div className="">

            <ul>
              <li className="flex-grow lg:flex-grow-0" onClick={() => { handleCurrentComponent(0) }}>
                <a id="default-tab" href="#first" className={`tab-button flex relative items-center justify-center mx-auto h-12 w-12 leading-[14px] group/tab my-2 rounded-lg ${currentComponetMenu == 0 ? 'text-indigo-600 bg-indigo-200 bg-opacity-90' : 'hover:bg-indigo-200 hover:bg-opacity-90 hover:transition-all'}`}>
                  <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                    <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg " >Profile</span>
                  </div>
                  <FaRegUser className="" />
                </a>
              </li>
              <li className="flex-grow lg:flex-grow-0" onClick={() => { handleCurrentComponent(1) }}>
                <a id="default-tab" href="#one " className={`tab-button flex relative items-center justify-center mx-auto h-12 w-12 leading-[14px] group/tab my-2 rounded-lg ${currentComponetMenu == 1 ? 'text-indigo-600 bg-indigo-200 bg-opacity-90' : 'hover:bg-indigo-200 hover:bg-opacity-90 hover:transition-all'}`}>
                  <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                    <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Chats</span>
                  </div>
                  <AiOutlineMessage className="" />
                </a>
              </li>
              <li className="flex-grow lg:flex-grow-0" onClick={() => { handleCurrentComponent(2) }}>
                <a id="default-tab" href="#second" className={`tab-button flex relative items-center justify-center mx-auto h-12 w-12 leading-[14px] group/tab my-2 rounded-lg ${currentComponetMenu == 2 ? 'text-indigo-600 bg-indigo-200 bg-opacity-90' : 'hover:bg-indigo-200 hover:bg-opacity-90 hover:transition-all'}`}>
                  <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                    <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">ConctactS</span>
                  </div>
                  <RiContactsLine className="" />
                </a>
              </li>
              <li className="flex-grow lg:flex-grow-0" onClick={() => { handleCurrentComponent(3) }}>
                <a id="default-tab" href="#third" className={`tab-button flex relative items-center justify-center mx-auto h-12 w-12 leading-[14px] group/tab my-2 rounded-lg ${currentComponetMenu == 3 ? 'text-indigo-600 bg-indigo-200 bg-opacity-90' : 'hover:bg-indigo-200 hover:bg-opacity-90 hover:transition-all'}`}>
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
              <li className="flex-grow lg:flex-grow-0" onClick={handleLogout}>
                <a id="default-tab" href="#first" className="tab-button flex relative items-center justify-center mx-auto h-12 w-12 leading-[14px] group/tab my-2 rounded-lg hover:bg-indigo-200 hover:bg-opacity-90 hover:transition-all">
                  <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                    <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">logout</span>
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
          {componetsSideBar[currentComponetMenu]}
        </div>
        {/* End  profile ( chat list/ config  */}
        {/* Start Message Content */}

        <div className="col-span-12 lg:col-span-7 bg-white dark:bg-slate-900  overflow-hidden">
          
          {currentchat && currentchat ? <MenssageContent sender={currentchat}>
            {messages && messages.map((message) => {
              return <MessageItems key={message.id} message={message} own={message.sender === userData?.id} />
            })}
          </MenssageContent> : <h1 className="text-2xl text-center my-auto flex justify-center items-center content-center"> Open a conversation to start a chat</h1>}

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
                      <Sidebar.Item href="" icon={HiLogout} onClick={handleLogout}>
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

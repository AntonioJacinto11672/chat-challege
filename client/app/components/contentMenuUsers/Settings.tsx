import { CiMenuKebab } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { AccordionItemProps } from "@/types/AccordionItemProps";
import AccordionComponent from "../flowbite/AcordionComponent";

/* Items fot acordition */
const items: AccordionItemProps[] = [
    {
        id: 'accordion-example-heading-1',
        title: 'Personal Info',
        content: (
            <>
                <div className="p-5">
                    <div>
                        <div className="ltr:float-right rtl:float-left">
                            <button
                                type="button"
                                className="py-1.5 btn bg-slate-100 border-transparent rounded hover:bg-gray-50 transition-all ease-in-out dark:bg-zinc-600 dark:text-gray-50 dark:hover:bg-zinc-500/50"
                            >
                                <i className="mr-1 align-middle ri-edit-fill" /> Edit
                            </button>
                        </div>
                        <p className="mb-1 text-gray-500 dark:text-gray-300">Name</p>
                        <h5 className="text-sm dark:text-gray-50">Patricia Smith</h5>
                    </div>
                    <div className="mt-5">
                        <p className="mb-1 text-gray-500 dark:text-gray-300">Email</p>
                        <h5 className="text-sm dark:text-gray-50">adc@123.com</h5>
                    </div>
                    <div className="mt-5">
                        <p className="mb-1 text-gray-500 dark:text-gray-300">Time</p>
                        <h5 className="text-sm dark:text-gray-50">11:40 AM</h5>
                    </div>
                    <div className="mt-5">
                        <p className="mb-1 text-gray-500 dark:text-gray-300">Location</p>
                        <h5 className="text-sm dark:text-gray-50">California, USA</h5>
                    </div>
                </div>
            </>
        ),
        isActive: true,
    },
    {
        id: 'accordion-example-heading-2',
        title: 'Privacy',
        content: (
            <>
                <label className="flex items-center justify-between cursor-pointer pb-4">
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                        status
                    </span>
                    <input
                        type="checkbox"
                        defaultValue=""
                        className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                   
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                        last seen
                    </span>
                    <input
                        type="checkbox"
                        defaultValue=""
                        className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                   
                </label>

            </>
        ),
        isActive: false,
    },
    {
        id: 'accordion-example-heading-3',
        title: 'Help',
        content: (
            <>
                <div className="p-5">
                    <div className="py-3">
                        <h5 className="mb-0 text-gray-700 text-13 dark:text-gray-300">
                            <a href="#" className="block text-body">
                                FAQs
                            </a>
                        </h5>
                    </div>
                    <div className="py-3 border-t border-gray-100 dark:border-zinc-600">
                        <h5 className="mb-0 text-gray-700 text-13 dark:text-gray-300">
                            <a href="#" className="text-body d-block">
                                Contact
                            </a>
                        </h5>
                    </div>
                    <div className="py-3 border-t border-gray-100 dark:border-zinc-600">
                        <h5 className="mb-0 text-gray-700 text-13 dark:text-gray-300">
                            <a href="#" className="text-body d-block">
                                Terms &amp; Privacy policy
                            </a>
                        </h5>
                    </div>
                </div>

            </>
        ),
        isActive: false,
    },

];

const Settings = () => {
    
    return (<>
        <div className="flex flex-col  p-4 ">
            <div className=" flex justify-between text-lg font-semibold">
                <h4 className="mb-0 text-gray-700 dark:text-gray-50"> <a href="">Settings</a> </h4>
                <nav>
                    <a href=""><CiMenuKebab /></a>
                </nav>
            </div>
            <div className="mx-auto flex flex-col items-center p-[0.5rem]  ">
                <div className="w-16 h-16 border-[1px] rounded-[100%] border-slate-400 border-opacity-90 border-solid p-1">
                    <img src="/avatar2.png" alt="" className="object-cover h-full w-full rounded-[100%]" />
                </div>
                <div className="text-sm font-bold pt-1">
                    <p>António Jacinto</p>
                </div>
                <div className="flex items-center content-center pt-1">
                    <small><FaCircle className="text-green-600 text-xs mx-1" /></small> <small>Active</small>
                </div>

            </div>
            <hr className="border-2 w-full text-center rounded-md my-1" />


            <div className=" my-4">
                <AccordionComponent
                    items={items}
                    options={{
                        alwaysOpen: true,
                        activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
                        inactiveClasses: 'text-gray-500 dark:text-gray-400',
                    }}
                />
            </div>
        </div>

    </>);
}

export default Settings;
import { CiMenuKebab } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";

const Myprofile = () => {
    return (<>
        <div className="flex flex-col  p-4 ">
            <div className=" flex justify-between text-lg font-semibold">
                <h4 className="mb-0 text-gray-700 dark:text-gray-50"> <a href="">My Profile</a> </h4>
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

            
            <div>
                <div className="text-gray-700  my-4">
                    <h2>
                        <button
                            type="button"
                            className="flex items-center justify-between w-full px-3 py-2 font-medium text-left border border-gray-100 rounded-t accordion-header group active dark:border-b-zinc-600 dark:bg-zinc-600 dark:border-zinc-600"
                        >
                            <span className="m-0 text-[14px] dark:text-gray-50 font-semibold ltr:hidden rtl:block">
                                About{" "}

                            </span>
                            <i className="mdi mdi-chevron-down text-lg group-[.active]:rotate-180 dark:text-gray-50" />
                        </button>
                    </h2>
                    <div className="block bg-white border border-t-0 border-gray-100 accordion-body dark:bg-transparent dark:border-zinc-600 ">
                        <div className="p-4">
                            <div>
                                <p className="mb-1 text-gray-500 dark:text-gray-300">Name</p>
                                <h5 className="text-sm dark:text-gray-50">Patricia Smith</h5>
                            </div>
                            <div className="mt-1">
                                <p className="mb-1 text-gray-500 dark:text-gray-300">Email</p>
                                <h5 className="text-sm dark:text-gray-50">adc@123.com</h5>
                            </div>
                            <div className="mt-1">
                                <p className="mb-1 text-gray-500 dark:text-gray-300">Time</p>
                                <h5 className="text-sm dark:text-gray-50">11:40 AM</h5>
                            </div>
                            <div className="mt-1">
                                <p className="mb-1 text-gray-500 dark:text-gray-300">Location</p>
                                <h5 className="text-sm dark:text-gray-50">California, USA</h5>
                            </div>

                            <div className="mt-1">
                                <p className="mb-1 text-gray-500 dark:text-gray-300">Location</p>
                                <h5 className="text-sm dark:text-gray-50">California, USA</h5>
                            </div>

                            <div className="mt-1">
                                <p className="mb-1 text-gray-500 dark:text-gray-300">Location</p>
                                <h5 className="text-sm dark:text-gray-50">California, USA</h5>
                            </div>

                            <div className="mt-1">
                                <p className="mb-1 text-gray-500 dark:text-gray-300">Location</p>
                                <h5 className="text-sm dark:text-gray-50">California, USA</h5>
                            </div>

                            <div className="mt-1">
                                <p className="mb-1 text-gray-500 dark:text-gray-300">Location</p>
                                <h5 className="text-sm dark:text-gray-50">California, USA</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default Myprofile;
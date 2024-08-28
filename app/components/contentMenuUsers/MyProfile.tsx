import { CiMenuKebab } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";

const Myprofile = () => {
    return (<>
        <div className="flex flex-col  p-7 ">
            <div className=" flex justify-between text-2xl font-semibold">
                <h4 className="mb-0 text-gray-700 dark:text-gray-50"> <a href="">My Profile</a> </h4>
                <nav>
                    <a href=""><CiMenuKebab /></a>
                </nav>
            </div>
            <div className="mx-auto flex flex-col items-center p-[1.5rem]  ">
                <div className="w-24 h-24 border-[1px] rounded-[100%] border-slate-400 border-opacity-90 border-solid p-1">
                    <img src="/avatar2.png" alt="" className="object-cover h-full w-full rounded-[100%]" />
                </div>
                <div className="text-sm font-bold pt-5">
                    <p>António Jacinto</p>
                </div>
                <div className="flex items-center content-center pt-2">
                    <small><FaCircle className="text-green-600 text-xs mx-1" /></small> <small>Active</small>
                </div>

            </div>
            <hr className="border-2 w-full text-center rounded-md my-3" />

            <div>

                <span className="m-0 text-[14px] dark:text-gray-50 font-semibold ltr:hidden rtl:block my-3">
                    Bibliografy{" "}

                </span><a
                    href="#"
                    className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 my-2"
                >

                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in
                        reverse chronological order.
                    </p>
                </a></div>

            <div>
                <div className="text-gray-700 accordion-item my-4">
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
                    <div className="block bg-white border border-t-0 border-gray-100 accordion-body dark:bg-transparent dark:border-zinc-600">
                        <div className="p-5">
                            <div>
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
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default Myprofile;
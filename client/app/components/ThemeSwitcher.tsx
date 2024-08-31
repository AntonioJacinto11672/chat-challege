
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";


const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const renderThemeChanger = () => {
        if (!mounted) return null;
        /* Switch Theme dark or ligth */
        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            
            return (
                <li className="flex-grow lg:flex-grow-0">
                    <a id="default-tab" href="#first" className="tab-button flex relative items-center justify-center mx-auto h-12 w-12 leading-[14px] group/tab my-2 rounded-lg hover:bg-indigo-200 hover:bg-opacity-90 hover:transition-all">
                        <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                            <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                            <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Ligth Mode</span>
                        </div>
                        <MdOutlineLightMode className="" onClick={() => setTheme('ligth')} />
                    </a>
                </li>
            )
        }

        else {
            return (
                <li className="flex-grow lg:flex-grow-0">
                    <a id="default-tab" href="#first" className="tab-button flex relative items-center justify-center mx-auto h-12 w-12 leading-[14px] group/tab my-2 rounded-lg hover:bg-indigo-200 hover:bg-opacity-90 hover:transition-all">
                        <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                            <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                            <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Dark Mode</span>
                        </div>
                        <MdDarkMode className="" onClick={() => setTheme('dark')} />
                    </a>
                </li>
            )
        }
    };

    return (
        <>
            {renderThemeChanger()}
        </>
    );
};

export default ThemeSwitcher;
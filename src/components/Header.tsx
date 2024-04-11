"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MenuIcon, SearchIcon } from "@/assets/icons";
import { navigationList } from "@/utils/navigation";

export default function Header() {
    const [isToggleHeader, setIsToggleHeader] = useState<boolean>(false);

    useEffect(() => {
        const toggleHeader = () => {
            if (window.scrollY > 25) {
                setIsToggleHeader(true);
            } else {
                setIsToggleHeader(false);
            }
        };
        window.addEventListener("scroll", toggleHeader);

        return () => window.removeEventListener("scroll", toggleHeader);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 bg-transparent z-[999] transition-all ${
                isToggleHeader ? "header__toggle" : null
            }`}
        >
            <div className="container flex justify-between items-center h-[60px] mt-0 mb-0 ml-auto mr-auto">
                <div className="w-[30px] h-[30px] text-primary cursor-pointer md:hidden">
                    <MenuIcon />
                </div>
                <div className="flex items-center">
                    <div className="mr-[20px] text-3xl font-bold">
                        <Link href="/" className="no-underline text-white">
                            MOV<span className="text-primary">INE</span>
                        </Link>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex items-center">
                            {navigationList.map((item) => (
                                <li
                                    key={item.path}
                                    className="px-[25px] py-0 font-medium text-[15px] transition-all ease-linear duration-300 no-underline text-white hover:text-primary"
                                >
                                    <Link href={item.path}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center">
                    <div className="w-[30px] h-[30px] mr-[20px] text-white cursor-pointer">
                        <Link href="/search">
                            <SearchIcon />
                        </Link>
                    </div>
                    <Link
                        href="/login"
                        className="text-base bg-primary text-white px-5 py-[10px] rounded-tl-[10px] rounded-br-[10px] rounded-tr-[5px] rounded-bl-[5px]"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
}

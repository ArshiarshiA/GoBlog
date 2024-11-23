'use client'
import Image from "next/image";
import Logo from "../../../public/mainLogo.png"
import Link from "next/link";
import LoginIcon from "./loginIcon";
import { useRef, useState } from "react";
import { TbUsersGroup } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import CheckIsLogin from "../checkIsLogin";

export default function Header() {

    const [isShow, setIsShow] = useState<boolean>(true)
    const menu = useRef<HTMLDivElement>(null)

    const menuHandler = () => {
        isShow ? menu.current?.classList.remove('w-0') : menu.current?.classList.add('w-0')
        setIsShow(isShow == false ? true : false)
    }

    return (
        <nav className="p-7 sticky top-0 z-10 select-none">
            <div className="max-w-[1000px] m-auto bg-gray-100 p-5 py-0 rounded-full">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="flex items-center gap-3">
                            <svg onClick={menuHandler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <LoginIcon hidden={true} />
                        </div>
                    </div>
                    <div>
                        <Link href='/'>
                            <Image width={250} src={Logo} alt="Logo" />
                        </Link>
                    </div>
                </div>
            </div>
            <div ref={menu} className="fixed right-0 top-0 h-full w-0 bg-gray-100 transition ease-in-out delay-150 duration-300">
                <div className="p-5 text-xl capitalize">
                    <ul className="px-5 flex flex-col gap-10 font-extralight">
                        <li>
                            <Link href='/'>
                                <Image className="m-auto" width={250} src={Logo} alt="Logo" />
                            </Link>
                        </li>
                        <li className="flex items-center gap-3 border-b border-b-gray-300 pb-3">
                            <IoHomeOutline />
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className="flex items-center gap-3 border-b border-b-gray-300 pb-3">
                            <CiSearch />
                            <CheckIsLogin link="/explore">Explore</CheckIsLogin>
                        </li>
                        <li className="flex items-center gap-3 border-b border-b-gray-300 pb-3">
                            <GoPencil />
                            <CheckIsLogin link="/addBlog">Create a blog</CheckIsLogin>
                        </li>
                        <li className="flex items-center gap-3 border-b border-b-gray-300 pb-3">
                            <TbUsersGroup />
                            <Link href={'/about'}>About us</Link>
                        </li>
                        <li className="flex items-center gap-3 border-b border-b-gray-300 pb-3">
                            <LoginIcon hidden={false} />
                            {document.cookie.split('=')[1] ? 'Log out' : 'Log in'}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
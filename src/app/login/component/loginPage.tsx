import React, { ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import Bg from '../../../../public/blogWallpaper.jpg'

export default function LoginPage({ children, setUserName, setPassword }: { children: React.ReactNode, setUserName: React.Dispatch<React.SetStateAction<string>>, setPassword: React.Dispatch<React.SetStateAction<string>> }) {

    const checkIsNotEmptyN = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)

    const checkIsNotEmptyP = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

    return (
        <div className="py-20 px-10">
            <div className="flex justify-center max-w-[700px] m-auto rounded-xl overflow-hidden border">
                <div className="w-5/12 select-none max-[648px]:hidden">
                    <Image className="h-full object-cover" src={Bg} alt="bg" />
                </div>
                <div className="w-7/12 px-5 py-5 max-[648px]:w-full">
                    <h1 className="text-center text-xl font-extralight">Login in your account</h1>
                    <form className="py-4" action="">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute left-1 top-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <input onChange={checkIsNotEmptyN} className="w-full border rounded-xl px-5 pl-8 py-1 outline-none" type="email" placeholder="Enter Your User Name" />
                        </div>
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute left-1 top-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                            <input maxLength={6} onChange={checkIsNotEmptyP} className="w-full border rounded-xl px-5 pl-8 py-1 outline-none mt-4" type="password" placeholder="Enter Your Password" />
                        </div>
                        <div className="py-3">
                            <input type="checkbox" name="" id="" />
                            <label className="ml-2" htmlFor="">Remember Me</label>
                        </div>
                        {children}
                    </form>
                    <Link className="text-red-300" href='/'>Forgot Password?</Link>
                    <div>
                        <p>Dont Have An Account? <Link className="text-red-300" href='/signUp'>Click Here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
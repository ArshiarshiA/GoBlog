'use client'
import Link from "next/link"
import { useState } from "react"

export default function LoginIcon({hidden}: {hidden: boolean}) {

    const checkIsLogin = () => {
        if (typeof document !== undefined) {
            if (document.cookie.split('=')[1]) {
                return true
            } else {
                return false
            }
        }
    }
    const [isLogin, setIsLogin] = useState(checkIsLogin)

    const logOutHandler = () => {
        document.cookie = `user=${document.cookie.split('=')[1]}; expires=Thu, 18 Dec 1970 12:00:00 UTC`
        setIsLogin(false)
        location.assign('/')
    }

    return (
        isLogin ? (
            <svg onClick={logOutHandler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 cursor-pointer ${hidden == true ? 'hidden' : ''} min-[575px]:block`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
            </svg>
        ) : (
            <Link href={'/login'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-7 cursor-pointer ${hidden == true ? 'hidden' : ''} min-[575px]:block`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </Link>
        )
    )
}
'use client'
import React from "react"

export default function LoginButton({password ,userName }: { userName: string, password: string }) {

    const postHandler = () => {
        if(userName != '' && password != ''){
            document.cookie = `user=${userName}; expires=Thu, 18 Dec 2025 12:00:00 UTC`
            location.reload()
            location.assign('/') 
        }
    }

    return (
        <input onClick={postHandler} className="w-full text-center bg-gray-200 rounded-full py-2 my-4 cursor-pointer" type="button" value='LOGIN' />
    )
}
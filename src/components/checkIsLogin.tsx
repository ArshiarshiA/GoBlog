'use client'
import Link from "next/link";
import React from "react";

export default function CheckIsLogin({ children, link }: { children: React.ReactNode, link: string }) {
    return (
        // If the user has login, enter the desired page , else enter the login page
        <Link href={`${document.cookie.split('=')[1] ? link : '/login'}`}>
            {children}
        </Link>
    )
}
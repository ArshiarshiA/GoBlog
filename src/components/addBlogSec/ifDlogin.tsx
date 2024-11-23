'use client'
import CheckIsLogin from "../checkIsLogin";

export default function IfDLogin() {
    return (
        <CheckIsLogin link={`${document.cookie.split('=')[1] ? ('/') : '/login'}`}>
            <div className="bg-gray-200 mt-3 rounded-full py-2 verbFont">IF YOU DONT LOGIN</div>
        </CheckIsLogin>
    )
}
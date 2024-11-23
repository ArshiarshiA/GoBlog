'use client'
import LoginButton from "./component/loginButton";
import LoginPage from "./component/loginPage";
import { useState } from "react";

export default function Login() {

    const [userName , setUserName] = useState<string>('')
    const [password , setPassword] = useState<string>('')

    return (
        <LoginPage setPassword={setPassword} setUserName={setUserName}>
            <LoginButton password={password} userName={userName} />
        </LoginPage>
    )
}
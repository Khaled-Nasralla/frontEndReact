import React, {useState} from "react";
import {Container} from "../../global/container/Container.tsx";
import  './sign-up.sass'
import '@styles/mixins.sass'
import './buttons-styles/sign-up.styles.sass'
import InputSignInUp from "../../global/input/Input.tsx";
import {EInputType} from "../../../enums/EInputType.ts";
import ButtonComponent from "../../global/buton/ButtonComponent.tsx";
import {PersonIcon} from "../../../icons/PersonIcon.tsx";
import {LockIcon} from "../../../icons/LockIcon.tsx";
import {signUp} from "../../../api/userApi.ts";

import MainTemplate from "../../template/MainTemplate.tsx";




export function SignUpPage() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setUserName(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleButtonOnClick = async () => {

        try {
            await signUp(userName, password);
            setMessage("✅ Sign Up successful! You can now log in.");
        } catch (err : any) {
            setMessage(`❌ Error: ${err.response?.data || "Something went wrong"}`);
        }
    };

    return (



        <MainTemplate>

            <div className="flex-column-center full-container ">
            <Container>

                    <InputSignInUp type={EInputType.text} value={userName} onChange={handleUserNameChange} children={PersonIcon()} placeholder={"Email Address"}/>
                    <InputSignInUp type={EInputType.password} value={password} onChange={handlePasswordChange} children={LockIcon()} placeholder={"Password"}/>
                    <ButtonComponent onClick={handleButtonOnClick} children={"Sign up"} className={"btn_sign_Up"}></ButtonComponent>

                {message && (
                    <p className="mt-3 text-center text-sm text-black">{message}</p>
                )}
            </Container>
            </div>
            </MainTemplate>



    )
}
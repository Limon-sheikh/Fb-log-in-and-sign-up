import { useState } from "react";
import LoginButton from "./LoginButton";
import CreateButton from "./CreateButton";
import ForgottenLink from "./ForgottenLink";
import { LiaEyeSolid } from "react-icons/lia";
import { LiaEyeSlashSolid } from "react-icons/lia";
import { useTranslation } from "react-i18next";

const LoginForm = () => {

    const {t} = useTranslation();

    const [emailOrPhone, setemailOrPhone] = useState('') // input email or phone number store korbe
    const [password, setpassword] = useState('') // input password store korbe
    const phoneRegex = /^\+?(88)?01[3-9][0-9]{8}$/; //phone number check korbe
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // email check korbe
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // pssword ti strong ki na seti check korbe

    // form submit hendle start 
    const hendleSubmit = (e) => {
        e.preventDefault();
        
        if (emailRegex.test(emailOrPhone) || phoneRegex.test(emailOrPhone)){
            if (passwordRegex.test(password)){
                alert("লগ ইন সাক্সেস")
            }
            else {
                alert("পাসওয়ার্ডে অন্তত একটি বড় হাতের অক্ষর (A-Z), একটি ছোট হাতের অক্ষর (a-z), একটি সংখ্যা (0-9), এবং একটি বিশেষ অক্ষর (@$!%*?&) থাকতে হবে। পাসওয়ার্ডের দৈর্ঘ্য কমপক্ষে ৮ অক্ষর হতে হবে।");
            }
        }
        else {
            alert("ইমেইল বা ফোন নম্বর সঠিক নয়");
        }
    };
    // form submit hendle end 

    // password show and hide hendle start
    const [showPassword, setShowPassword] = useState(false); 
    const hendleToggolePassword = (e) =>{
        e.preventDefault();
        setShowPassword(!showPassword)
    }
    // password show and hide hendle end

    return (
        <div className="font-custom relative top-12 w-[397px] pt-4 py-6 px-4 bg-[#ffffff] rounded-[10px] shadow-[0px_8px_12px_0px_rgba(0,_0,_0,_0.1)]">
            <form onSubmit={hendleSubmit}>
                <input id="emailOrPhone"  placeholder= {t('FormPlaceholder')} type="text" required 
                    onChange={(e) => setemailOrPhone(e.target.value)}
                    className="border caret-blue-500 border-solid border-[#dddfe2] outline-none rounded-md focus:border-blue-600 placeholder-[#8D949E] placeholder:tracking-wide focus:placeholder-[#BEC3C9] focus:outline focus:outline-[#ECF3FF] focus:outline-offset-[1px] text-[16px] w-full py-[12px] px-[16px] block"
                />
                <input id="password" placeholder= {t('Password')} required
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setpassword(e.target.value)}
                    className="border caret-blue-500 border-solid border-[#dddfe2] outline-none rounded-md focus:border-blue-600 placeholder-[#8D949E] placeholder:tracking-wide focus:placeholder-[#BEC3C9] focus:outline focus:outline-[#ECF3FF] focus:outline-offset-[1px] text-[16px] w-full py-[12px] px-[16px] mt-3 block"
                />
                {password ? 
                    <div id="showAndHideIcon" onClick={hendleToggolePassword} className="absolute top-[90px] left-[340px] rounded-[50%] hover:bg-gray-200 transition duration-300 text-[18px] text-gray-700 inline-block p-1">
                        {showPassword ? <LiaEyeSolid /> : <LiaEyeSlashSolid />}
                    </div>
                : null}
                <div><LoginButton/></div>
                <div><ForgottenLink/></div>
                <hr className="mt-5 border-t-1 border-[#dddfe2] bg-violet-400 mx-auto" />
                <div><CreateButton/></div>
            </form>
        </div>
    );
};

export default LoginForm;
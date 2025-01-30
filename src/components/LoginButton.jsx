import { useTranslation } from "react-i18next";

const LoginButton = () => {

    const {t} = useTranslation();

    return (
        <div>
            <button type="submit" className="w-full bg-[#0866ff] hover:bg-[#1877f2] transition duration-500 text-white font-bold p-[9px] mt-4 rounded-md text-[20px]">{t('LogIn')}</button>
        </div>
    );
};

export default LoginButton;
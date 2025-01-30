
import { useTranslation } from "react-i18next";

const FbLogoAndText = () => {
    
    const {t} = useTranslation();

    return (
        <div className="relative top-[23%]">
            <div className=" ">
                <img className="relative top-[10px] left-[-32px] p-0 m-0" src="/facebook.svg" alt="icon" width="321" height="50" />
            </div>
            <h1 className=" text-[#1c1e21] relative left-[-4px] text-[28px] leading-8 w-[500px] font-normal pt-[2px]">{t('FbHelpText')}</h1>
        </div>
    );
};

export default FbLogoAndText;
import { useTranslation } from "react-i18next";


const CreateButton = () => {

    const {t} = useTranslation();

    return (
        <div>
            <div className=" w-full flex justify-center ">
                <a href="https://www.facebook.com/r.php?entry_point=login" className="mx-auto  bg-[#42b72a] hover:bg-[#36a420] transition duration-500 text-white font-bold px-[18px] py-[12px] mt-[30px] rounded-md text-[16px]">{t('CreateButton')}</a>
            </div>
        </div>
    );
};

export default CreateButton;
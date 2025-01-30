import { useTranslation } from "react-i18next";


const ForgottenLink = () => {

    const {t} = useTranslation();

    return (
        <div id="forgotLink" className="text-center mt-3">
            <a className="text-blue-600 text-[14px] hover:underline decoration-blue-600 decoration-1" href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">{t('Forgotten')}</a>
        </div>
    );
};

export default ForgottenLink;

import FbLogoAndText from "../../components/FbLogoAndText";
import LoginForm from "../../components/LoginForm";
import CreatePage from "../../components/CreatePage";
import LangAndOtherService from "../../components/LangAndOtherService";

const LoginAndSignupPage = () => {
    return (
        <div>
            <div className="bg-[#f2f4f7] flex justify-center items-center font-custom">
                <div className="w-full">
                    <div id="container" className="w-[980px] mx-auto">
                        <div className=" flex justify-between mt-20 my-[17rem]">
                            <div><FbLogoAndText/></div>
                            <div><LoginForm/><CreatePage/></div>
                        </div>
                    </div>
                    <div id="lang and other service" className=" bg-white pt-[22px] py-[20px]">
                        <LangAndOtherService/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginAndSignupPage;
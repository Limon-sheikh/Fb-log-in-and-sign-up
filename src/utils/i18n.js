import i18n from "i18next";
import { initReactI18next } from "react-i18next";


//language switching configuration
const resources = {
  en: {
    translation: {
      FbHelpText: "Facebook helps you connect and share with the people in your life.",
      FormPlaceholder: "Email address or phone number",
      Password: "Password",
      LogIn: "Log in",
      Forgotten: "Forgotten Password?",
      CreateButton: "Create new account",
      CreateAPage: "Create a Page for a celebrity, brand or business.",
    }
  },
  bn: {
    translation: {
      FbHelpText: "Facebook আপনাকে আপনার জীবনের মানুষদের সাথে সংযোগ স্থাপন এবং ভাগ করে নিতে সাহায্য করে।",
      FormPlaceholder: "ইমেল বা ফোন নম্বর:",
      Password: "পাসওয়ার্ড",
      LogIn: "লগ ইন করুন",
      Forgotten: "পাসওয়ার্ড ভুলে গেছেন?",
      CreateButton: "নতুন অ্যাকাউন্ট তৈরি করুন",
      CreateAPage: "একটি পেজ তৈরি করুন।",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", //default language setup
    fallbackLng: "en", //This will be a fallback if there is no translation for a specific language.
    interpolation: {
      escapeValue: false, // react already safes from xss
    }
  });

  export default i18n;
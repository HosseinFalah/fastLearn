import { BiArrowBack } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { RiTelegramLine } from "react-icons/ri";
import { HiViewGrid } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className="container m-auto bg-[#3c3e45] text-white py-8">
            <section className="flex items-center justify-between border-b-2 border-gray-800">
                <div className="w-32">
                    <img src={'/Assets/LogoCompany.ico'} className="max-w-full h-auto object-cover" alt="Logo" />
                </div>
                <div>
                    <p>آدرس : اصفهان – شهرضا</p>
                </div>
                <div>
                    <p>شماره تماس : ۰۹۳۶۱۴۱۶۹۵۲</p>
                </div>
                <div>
                    <a className="flex items-center py-3 px-6 bg-[#1f212a] rounded-xl transition-colors delay-75 ease-linear hover:bg-inherit" href="tel:+989361416952">
                        تماس با پشتیبانی
                        <BiArrowBack className="mr-2" size={25}/>
                    </a>
                </div>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2 my-8">
                <div className="flex items-center justify-around">
                    <div>
                        <div className="flex items-center">
                            <HiViewGrid className="text-gray-400 ml-2" size={20}/>
                            <p>دسترسی سریع</p>
                        </div>
                        <ul className="leading-8 mt-2">
                            <li className="text-[#717070]">
                                <a className="transition-colors delay-75 ease-linear hover:text-green-500" href="!#">صفحه اصلی</a>
                            </li>
                            <li className="text-[#717070]">
                                <a className="transition-colors delay-75 ease-linear hover:text-green-500" href="!#">فروشگاه</a>
                            </li>
                            <li className="text-[#717070]">
                                <a className="transition-colors delay-75 ease-linear hover:text-green-500" href="!#">آموزش های وردپرس</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <HiViewGrid className="text-gray-400 ml-2" size={20}/>
                            <p>لیست مدرسان</p>
                        </div>
                        <ul className="leading-8 mt-2">
                            <li className="text-[#717070]">
                                <a className="transition-colors delay-75 ease-linear hover:text-green-500" href="!#">محمد امین سعیدی راد</a>
                            </li>
                            <li className="text-[#717070]">
                                <a className="transition-colors delay-75 ease-linear hover:text-green-500" href="!#">قدیر یلمه</a>
                            </li>
                            <li className="text-[#717070]">
                                <a className="transition-colors delay-75 ease-linear hover:text-green-500" href="!#">اشکان مقدس</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className="text-lg">با ما همراه باشید</p>
                    <div className="flex items-center justify-between gap-x-4 my-4">
                        <div className="bg-gradient-to-l w-1/2 from-purple-700 via-red-500 to-orange-300 rounded-3xl flex items-center justify-around py-4">
                            <div>
                                <p>صفحه اینستاگرامی مـا</p>
                                <p>@pishtazweb</p>
                            </div>
                            <div className="bg-white rounded-full p-2">
                                <BsInstagram className="text-red-500" size={25}/>
                            </div>
                        </div>
                        <div className="bg-gradient-to-l w-1/2 from-blue-700 to-sky-400 rounded-3xl flex items-center justify-around py-4">
                            <div>
                                <p>کانـال تلـگرامی مـا</p>
                                <p>@pishtazweb</p>
                            </div>
                            <div className="bg-white rounded-full p-2">
                                <RiTelegramLine className="text-sky-500" size={25}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer
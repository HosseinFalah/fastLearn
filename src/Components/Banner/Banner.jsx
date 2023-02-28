import { SlGraduation } from "react-icons/sl"
import { BsArrowLeftShort } from "react-icons/bs"
import { FiPhoneCall } from "react-icons/fi"
import { BiEdit } from "react-icons/bi"
import { GiTakeMyMoney } from "react-icons/gi"

const Banner = () => {
    return (
        <div className="container p-4 md:p-0 grid items-center grid-cols-1 lg:grid-cols-2">
            <div>
                <h2 className="font-Lalezar text-gray-600 text-3xl">داستان برنامه‌نویس شدنت از اینجا شروع میشه!</h2>
                <h4 className="font-IranSansDN leading-8 text-gray-500 text-base my-5">یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست، تلاش و تمرین داشته <br /> باشید، بقیه‌اش با استاد شو</h4>
                <div className="flex gap-x-4 font-Lalezar">
                    <button className="flex items-center py-5 px-5 rounded-lg text-white bg-[#52ac66] transition-colors delay-75 ease-linear hover:bg-[#52ac661f] hover:text-[#52ac66]">
                        شروع یادگیری برنامه نویسی
                        <BsArrowLeftShort size={30}/>
                    </button>
                    <button className="flex items-center py-5 px-5 rounded-lg transition-colors delay-75 ease-linear bg-[#52ac661f] text-[#52ac66] hover:bg-[#52ac66] hover:text-white">
                        درباره تیم استاد شو
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 my-8">
                    <div className="flex items-center gap-x-6">
                        <SlGraduation className="text-red-600 shadow-md" size={25}/>
                        <p className="font-Lalezar text-gray-600 text-xl">بیش از 80 دوره آموزشی</p>
                    </div>
                    <div className="flex items-center gap-x-6">
                        <GiTakeMyMoney className="text-gray-600 shadow-md" size={25}/>
                        <p className="font-Lalezar text-gray-600 text-xl">ضمانت بازگشت وجه</p>
                    </div>
                    <div className="flex items-center gap-x-6">
                        <BiEdit className="text-purple-700 shadow-md" size={25}/>
                        <p className="font-Lalezar text-gray-600 text-xl">یادگیری با تمرین و آزمون</p>
                    </div>
                    <div className="flex items-center gap-x-6">
                        <FiPhoneCall className="text-blue-400 shadow-md" size={25}/>
                        <p className="font-Lalezar text-gray-600 text-xl">پشتیبانی ۲۴ساعته</p>
                    </div>
                </div>
            </div>
            <img 
                src="/Assets/programming-skills-1946874-1649524.png" 
                className="max-w-full h-auto"
                alt="Logo" 
            />
        </div>
    )
}

export default Banner
import { useState } from "react";
import { Link } from "react-router-dom";
import { courses as mainCourses } from "../Constants/course";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { GiWorld } from "react-icons/gi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaAddressCard, FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Card from "../Components/Common/Card";

const Teacher = () => {
    const [beio, setbeio] = useState('امیرعماد میرمیرانی[۱][۲] (زاده ۱۳۵۶) که با نام مستعار جادی شناخته می‌شود، برنامه‌نویس و فعال حوزهٔ تکنولوژی‌های جدید و جامعهٔ نرم‌افزار آزاد و متن‌باز اهل ایران است. او مجری پادکستی با عنوان «رادیو گیک» است.');
    const [courses, setCourses] = useState([]);
    const [skils, setSkils] = useState([]);
    const [about, setAbout] = useState([]);

    const handleBeio = () => {
        setbeio('امیرعماد میرمیرانی[۱][۲] (زاده ۱۳۵۶) که با نام مستعار جادی شناخته می‌شود، برنامه‌نویس و فعال حوزهٔ تکنولوژی‌های جدید و جامعهٔ نرم‌افزار آزاد و متن‌باز اهل ایران است. او مجری پادکستی با عنوان «رادیو گیک» است.')
        setCourses([])
        setSkils([])
        setAbout([])
    }

    const handleCourses = () => {
        setbeio([]);
        setCourses(mainCourses);
        setSkils([])
        setAbout([])
    }
    const handleSkils = () => {
        setbeio('');
        setCourses([])
        setSkils([
            {id: 1, name: 'طراحی قالب', total: 75},
            {id: 2, name: 'هک و امنیت', total: 100},
            {id: 3, name: 'html & css', total: 45},
            {id: 4, name: 'طراحی گرافیک', total: 40},
            {id: 5, name: 'nodejs', total: 45}
        ])
        setAbout([])
    }
    const handleAbout = () => {
        setbeio([]);
        setCourses([]);
        setSkils([])
        setAbout([
            {id: 1, name: 'https://pishtaz-web.com', icon: <GiWorld className="text-zinc-600" size={20}/>},
            {id: 2, name: 'info@pishtaz-web.com', icon: <AiOutlineMail className="text-zinc-600" size={20}/>},
            {id: 3, name:  9123004545, icon: <AiOutlinePhone className="text-zinc-600" size={20}/>},
            {id: 4, name: 'تهران، خیابان آزادی، خیابان بهبودی، پلاک 49', icon: <FaAddressCard className="text-zinc-600" size={20}/>},
            {id: 5, name: '@jadimir', icon: <BsInstagram className="text-zinc-600" size={20}/>},
            {id: 6, name: '@jadimir', icon: <FaTelegramPlane className="text-zinc-600" size={20}/>}
        ])
    }

    return (
        <div className="container m-auto">
            <div className=" bg-[#52ac66] shadow-lg rounded-xl flex items-center justify-between py-4 px-6 my-4">
                <ul className="flex">
                    <li className="flex items-center text-white">
                        <CiLocationOn size={25}/>
                        <Link to={`/`} className="text-[#FFFFFF99] mr-6 ml-3">خانه</Link>
                    </li>
                    <li className="flex items-center text-white">
                        <IoIosArrowBack className="ml-3" size={20}/>
                        <Link to={`/`} className="text-white">وبلاگ</Link>
                    </li>
                </ul>
            </div>
            <div>
                <div className="flex items-center gap-x-6">                    
                    <img src="/Assets/Teacher_1.jpg" className="w-32 h-32 object-cover rounded-full" alt="teacher_jadi" />
                    <h1 className="font-Vazir text-2xl font-bold text-zinc-600">جادی میرمیرانی</h1>
                </div>
                <div className="grid grid-cols-6 gap-x-6 my-5">
                    <div className="flex flex-col space-y-4">
                        <button className="p-4 rounded-lg shadow-lg" onClick={handleBeio}>بیوگرافی</button>
                        <button className="p-4 rounded-lg shadow-lg" onClick={handleCourses}>دوره ها</button>
                        <button className="p-4 rounded-lg shadow-lg" onClick={handleSkils}>مهارت ها</button>
                        <button className="p-4 rounded-lg shadow-lg" onClick={handleAbout}>ارتباط</button>
                    </div>
                    <div className="col-span-5">
                        {beio && <div><p className="text-base font-semibold text-stone-700 leading-9">{beio}</p></div>}
                        {courses && (
                            <div className="grid grid-cols-3 gap-x-4">
                                {courses.slice(0, 2).map(course => (
                                    <Card key={course.id} {...course}/>
                                ))}
                            </div>
                        )}
                        {skils && (
                            <div className="grid grid-cols-2 gap-x-4">
                                {skils.map(skil => (
                                    <div key={skil.id} className="space-y-3 my-3">
                                        <div className="flex items-center justify-between">
                                            <p>{skil.name}</p>
                                            <p>{skil.total} <span className="bg-[#52ac66] text-white w-5 h-5 text-center inline-block rounded-full">%</span></p>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                                            <div className="bg-[#52ac66] h-1.5 rounded-full" style={{width: '45%'}}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {about && (
                            <div className="grid grid-cols-3 gap-4">
                                {
                                    about.map(item => (
                                        <div key={item.id} className="flex items-center gap-x-3 p-2 rounded-lg border-2">
                                            {item.icon}
                                            <p className="text-sm text-zinc-700">{item.name}</p>
                                        </div>
                                    ))
                                }   
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teacher
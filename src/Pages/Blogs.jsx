import { Link } from "react-router-dom";

import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";

import { CardWeblog } from "../Components/index";

const Blogs = () => {
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
                <input type="text" className="outline-none px-4 py-2 ring-2 ring-amber-500 rounded-lg placeholder:text-sm" placeholder="جستجو در مطالب ..." />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-2 gap-x-4 my-4">
                <CardWeblog />
            </div>
            <div className="bg-zinc-100 rounded-xl p-4 flex items-center justify-center gap-x-6 my-4">
                <button className="bg-white rounded-full w-10 h-10">1</button>
                <button className="transition-all duration-150 ease-linear w-10 h-10 rounded-full hover:bg-green-600 hover:text-white">2</button>
                <button className="transition-all duration-150 ease-linear w-10 h-10 rounded-full hover:bg-green-600 hover:text-white grid place-items-center">
                    <IoIosArrowBack size={20}/>
                </button>
            </div>
        </div>
    )
}

export default Blogs
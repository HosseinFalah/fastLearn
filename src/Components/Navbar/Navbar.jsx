import { BsSearch, BsBasket } from "react-icons/bs";
import { MdOutlineNightlight } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";

import DropDown from "../Common/DropDown/DropDown";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between">
            {/* Moblie View */}
            <div className="flex items-center">
                <img src="/Assets/LogoCompany.ico" className="w-24 h-24 object-cover transition-transform delay-100 ease-linear hover:scale-110" alt="Logo"/>
                <DropDown/>
            </div>
            <div className="flex items-center gap-x-3">
                <button className="flex items-center justify-center bg-green-100 px-3 py-3 rounded-full transition-colors delay-100 ease-linear group hover:bg-[#52ac66]">
                    <BsSearch className="text-green-600 transition-colors delay-150 ease-linear group-hover:text-white" size={20}/>
                </button>
                <button className="flex items-center justify-center bg-green-100 px-3 py-3 rounded-full transition-colors delay-150 ease-linear group hover:bg-[#52ac66]">
                    <MdOutlineNightlight className="text-green-600 transition-colors delay-150 ease-linear group-hover:text-white -rotate-45" size={20}/>
                </button>
                <button className="relative bg-green-100 px-3 py-3 rounded-full transition-colors delay-150 ease-linear group hover:bg-[#52ac66]">
                    <BsBasket className="text-green-700 transition-colors delay-150 ease-linear group-hover:text-white" size={18}/>
                    <span className="absolute -top-2 -right-1 transition-colors delay-150 ease-linear bg-green-600 text-white group-hover:bg-white group-hover:text-green-600 flex items-center justify-center w-5 h-5 rounded-full">0</span>
                </button>
                <button className="flex items-center flex-row-reverse bg-green-600 text-white rounded-lg px-4 py-3 transition-colors delay-100 ease-linear hover:bg-green-800">
                    ورود / عضویت
                    <FaUserLock className="ml-3" size={20}/>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
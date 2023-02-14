import { BsSearch, BsBasket } from "react-icons/bs";
import { MdOutlineNightlight } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between">
            {/* Moblie View */}
            <div className="flex items-center">
                <img src="/Assets/LogoCompany.ico" className="w-24 h-24 object-cover transition-transform delay-100 ease-linear hover:scale-110" alt="Logo"/>
                <div className="relative w-full">
                    <input className="bg-slate-50 w-72 px-8 py-3 rounded-lg outline-none border-none transition-all delay-100 ease-linear focus:w-80 placeholder:text-slate-400" placeholder="نام محصول یا دوره موردنظر ..."/>
                    <BsSearch className="absolute top-4 right-2 text-slate-400"/>
                </div>
            </div>
            <div className="flex items-center gap-x-3">
                <button className="flex items-center justify-center bg-green-100 px-4 py-3 rounded-lg transition-colors delay-150 ease-linear group hover:bg-[#52ac66]">
                    <MdOutlineNightlight className="text-green-600 transition-colors delay-150 ease-linear group-hover:text-white -rotate-45" size={20}/>
                </button>
                <button className="relative bg-green-100 px-4 py-3 rounded-lg transition-colors delay-150 ease-linear group hover:bg-[#52ac66]">
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
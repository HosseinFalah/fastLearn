import { Link } from "react-router-dom";

import { FaUserEdit, FaUserLock } from "react-icons/fa";

const Login = () => {
    return (
        <div className='container m-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className="flex flex-col justify-center">
                    <div className="w-full flex justify-center">
                        <Link to={`/auth/login`} className="flex items-center bg-[#52ac66] text-white px-6 py-4 rounded-lg">
                            <FaUserLock className="text-white ml-3" size={20}/>
                            ورود
                        </Link>
                        <Link to={`/auth/register`} className="flex items-center bg-[#52ac661f] text-[#52ac66] px-6 py-4 rounded-lg">
                            <FaUserEdit className="text-[#52ac66] ml-3" size={20}/>
                            ثبت نام
                        </Link>
                    </div>
                    <form className="border rounded-lg my-4 space-y-5 px-5 py-8" autoComplete="off">
                        <div className="flex flex-col space-y-2">
                            <label 
                                htmlFor="username" 
                                className="after:content-['*'] after:mr-1 after:text-red-500">
                                    نام کاربری یا آدرس ایمیل
                                </label>
                            <input 
                                type="text" 
                                id="username"
                                className="bg-[#f8f9fa] px-4 py-3 rounded-lg border outline-none focus:ring-1 ring-green-300"/>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label 
                                htmlFor="password" 
                                className="after:content-['*'] after:mr-1 after:text-red-500">
                                    گذرواژه
                                </label>
                            <input 
                                type="password" 
                                id="password"
                                className="bg-[#f8f9fa] px-4 py-3 rounded-lg border outline-none focus:ring-1 ring-green-300"/>
                        </div>
                        <button type="submit" className="w-full bg-[#52ac66] py-3 text-white rounded-lg shadow-green-200 shadow-lg">
                            ورود
                        </button>
                        <div className="flex items-center">
                            <input type="checkbox" className="" id="remmberme"/>
                            <label htmlFor="remmberme" className="font-IranSansDN text-zinc-600 mr-2">مرا به خاطر بسپار</label>
                        </div>
                        <p className="font-IranSansDN text-zinc-600">گذرواژه خود را فراموش کرده اید؟</p>
                    </form>
                </div>
                <img 
                    src="/Assets/Login.svg" 
                    className="hidden lg:block max-w-full h-auto object-cover"
                    alt="صفحه احراز هویت" />
            </div>
        </div>
    )
}

export default Login
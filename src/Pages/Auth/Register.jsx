import { Link } from "react-router-dom";

import { FaUserLock, FaUserEdit } from "react-icons/fa";

const Register = () => {
    return (
        <div className='container m-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className="flex flex-col justify-center">
                    <div className="w-full flex justify-center">
                        <Link to={`/auth/login`} className="flex items-center bg-[#52ac661f] text-[#52ac66] px-6 py-4 rounded-lg">
                            <FaUserLock className="text-[#52ac66] ml-3" size={20}/>
                            ورود
                        </Link>
                        <Link to={`/auth/register`} className="flex items-center bg-[#52ac66] text-white px-6 py-4 rounded-lg">
                            <FaUserEdit className="text-white ml-3" size={20}/>
                            ثبت نام
                        </Link>
                    </div>
                    <form className="border rounded-lg my-4 space-y-5 px-5 py-8" autoComplete="off">
                        <div className="flex flex-col space-y-2">
                            <label 
                                htmlFor="username" 
                                className="after:content-['*'] after:mr-1 after:text-red-500">
                                    آدرس ایمیل
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
                        <p className="font-IranSansDN leading-10 text-zinc-600">
                            داده های شخصی شما برای پشتیبانی از تجربه شما در سراسر این وب سایت، مدیریت دسترسی به حساب شما، و برای اهداف دیگری که در سیاست حفظ حریم خصوصی ما توضیح داده شده است، استفاده خواهد شد.
                        </p>
                        <button type="submit" className="w-full bg-[#52ac66] py-3 text-white rounded-lg shadow-green-200 shadow-lg">
                            عضویت
                        </button>
                    </form>
                </div>
                <img 
                    src="/Assets/My password-cuate.svg" 
                    className="hidden lg:block max-w-full h-auto object-cover"
                    alt="صفحه احراز هویت" />
            </div>
        </div>
    )
}

export default Register;
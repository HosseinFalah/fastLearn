import { useState } from "react";

import { BsSearch } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";

import SelectBox from "../Components/SelectBox/SelectBox";

const Shop = () => {
    const [querySearch, setQuerySearch] = useState("");

    return (
        <div className="container m-auto">
            <div className="my-4">
                <ul className="bg-[#52ac66] rounded-xl flex py-4 px-6">
                    <li className="flex items-center text-white">
                        <CiLocationOn size={25}/>
                        <a href="!#" className="text-gray-200 mr-6 ml-3">خانه</a>
                    </li>
                    <li className="flex items-center text-white">
                        <IoIosArrowBack className="ml-3" size={20}/>
                        <a href="!#" className="text-gray-100">فروشگاه</a>
                    </li>
                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 my-6">
                <div className="col-span-2">
                    <div className="flex items-center justify-between bg-[#f8f9fa] py-6 px-4 rounded-xl">
                        <div className="w-2/5 relative">
                            <input 
                                type="text" 
                                className="w-full py-3 px-5 pr-10 rounded-2xl focus:outline-none ring-1 ring-green-500"
                                value={querySearch} 
                                onChange={(e) => setQuerySearch(e.target.value)}
                                placeholder="جستجو در محصولات ..."
                            />
                            <BsSearch className="text-gray-500 absolute top-3 right-3" size={18}/>
                        </div>
                        <SelectBox/>
                    </div>
                </div>
                <div>
                    <div className="bg-[#f8f9fa] p-4 rounded-xl mb-4">
                        <h5 className="text-sm my-2 text-gray-600">فیلتر بر اساس قیمت:</h5>
                        <div className="my-2 text-sm text-gray-600">
                            <span>تومان 0</span>
                            -
                            <span>1,200,00 تومان</span>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-gradient-to-tr to-green-700 from-green-300 text-white py-3 px-5 rounded-xl">
                                فیلتر قیمت
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#f8f9fa] p-4 rounded-xl mb-4">
                        <p className="text-sm my-2 font-bold text-gray-600">دسته های محصولات</p>
                        <ul className="mt-4 space-y-2">
                            <li className="text-sm text-gray-600 transition-all delay-200 duration-200 ease-linear px-2 py-2 hover:bg-white rounded-xl cursor-pointer hover:text-gray-700 hover:text-base">ارز های دیجیتال</li>
                            <li className="text-sm text-gray-600 transition-all delay-200 duration-200 ease-linear px-2 py-2 hover:bg-white rounded-xl cursor-pointer hover:text-gray-700 hover:text-base">برنامه نویسی</li>
                            <li className="text-sm text-gray-600 transition-all delay-200 duration-200 ease-linear px-2 py-2 hover:bg-white rounded-xl cursor-pointer hover:text-gray-700 hover:text-base">هک و امنیت</li>
                        </ul>
                    </div>
                    <div className="bg-[#f8f9fa] p-4 rounded-xl">
                        <div className="grid place-items-center place-content-center">
                            <img 
                                src="/Assets/iranpro-gif-banner-design-Bannersaaz.gif" 
                                className="max-w-full h-auto" 
                                alt="تبلیغات" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
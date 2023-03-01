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
                    
                </div>
            </div>
        </div>
    )
}

export default Shop
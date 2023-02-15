import { FaChalkboardTeacher } from "react-icons/fa";

import { numberWithCommas } from "../../Utils/numberWithCommas";

const Card = ({title, img, category, teacher, discount, currentPrice, price, Satisfaction, students}) => {
    return (
        <div>
            <img src={img} className="w-full h-full rounded-lg mb-2 object-cover" alt={title}/>
            <div className="p-2">
                <p className="text-sm text-slate-500 mb-1">{category}</p>
                <p className="text-base font-bold transition-colors delay-100 ease-linear hover:text-green-600 cursor-pointer">{title}</p>
                <div className="flex items-center mt-3">
                    <FaChalkboardTeacher className="bg-slate-100 text-slate-600 rounded-full p-1" size={35}/>
                    <div className="mr-2">
                        <p className="text-sm text-slate-500">مدرس آموزش</p>
                        <p className="text-sm font-medium text-slate-700">{teacher}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between bg-gray-100 p-2 mt-2 rounded-lg">
                    <div className="">
                        <div className="flex items-center">
                            <p className="text-sm text-gray-500 line-through">{numberWithCommas(currentPrice)}</p>
                            <span className="bg-gray-600 text-xs text-white px-2 py-1 mr-2 flex items-center rounded-full">{discount}%</span>
                        </div>
                        <div className="flex items-center">
                            <p className="text-green-700 font-semibold">{numberWithCommas(price)}</p>
                            <span className="text-sm text-gray-500 mr-2">تومان</span>
                        </div>
                    </div>
                    <div className="flex gap-x-2">
                        <div className="flex flex-col items-center">
                            <span className="text-green-500 font-semibold">{Satisfaction}%</span>
                            <span className="text-sm text-gray-500">رضایت</span>
                        </div>
                        <div className="border-l border-2 border-gray-400"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-yellow-600">{students}</span>
                            <span className="text-sm text-gray-500">دانشجو</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
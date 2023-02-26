import { FaGraduationCap, FaHeadset, FaShoppingCart } from "react-icons/fa";
import { BiMoney } from "react-icons/bi";

const Download = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-7 gap-y-8 place-items-center px-4 my-6 bg-[#2d2d2d] text-white rounded-2xl">
            <div>
                <div className="flex items-center">
                    <FaGraduationCap size={35} className="ml-2"/>
                    <p className="text-lg font-bold">دوره های با کیفیت</p>
                </div>
                <p className="text-sm text-gray-400 mt-1">براساس جدیدترین مباحث</p>
            </div>
            <div>
                <div className="flex items-center">
                    <FaHeadset size={35} className="ml-2"/>
                    <p className="text-lg font-bold">پشتیبانی 24 ساعته</p>
                </div>
                <p className="text-sm text-gray-400 mt-1">سیستم ارسال تیکت حرفه ای</p>
            </div>
            <div>
                <div className="flex items-center">
                    <BiMoney size={35} className="ml-2"/>
                    <p className="text-lg font-bold">کش بک محصولات</p>
                </div>
                <p className="text-sm text-gray-400 mt-1">کش بک محصولات دارای تخفیف</p>
            </div>
            <div>
                <div className="flex items-center">
                    <FaShoppingCart size={35} className="ml-2"/>
                    <p className="text-lg font-bold">خرید آسان و امن</p>
                </div>
                <p className="text-sm text-gray-400 mt-1">در کمترین زمان امن خرید کنید</p>
            </div>
        </div>
    )
}

export default Download;
import { Link } from "react-router-dom";

import { TbShoppingCartPlus } from "react-icons/tb";
import { MdShoppingCartCheckout } from "react-icons/md";
import { BsBagCheck } from "react-icons/bs";

const Cart = () => {
    return (
        <div className="container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
                <div className="flex items-center gap-x-6 cursor-pointer">
                    <div className="bg-[#52ac661f] p-2 ring-2 ring-green-600 rounded-lg">
                        <TbShoppingCartPlus className="text-[#52ac66]" size={25}/>
                    </div>
                    <div className="leading-8 font-IranSansDN">
                        <h4>سبد خرید</h4>
                        <p className="text-zinc-500">فهرست اقلام خود را مدیریت کنید</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-6 cursor-pointer">
                    <div className="bg-[#52ac661f] p-2 ring-2 ring-green-600 rounded-lg">
                        <MdShoppingCartCheckout className="text-[#52ac66]" size={25}/>
                    </div>
                    <div className="leading-8 font-IranSansDN">
                        <h4>جزئیات پرداخت</h4>
                        <p className="text-zinc-500">صورتحساب خود را پرداخت کنید</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-6 cursor-pointer">
                    <div className="bg-[#52ac661f] p-2 ring-2 ring-green-600 rounded-lg">
                        <BsBagCheck className="text-[#52ac66]" size={25}/>
                    </div>
                    <div className="leading-8 font-IranSansDN">
                        <h4>تکمیل سفارش</h4>
                        <p className="text-zinc-500">سفارش خود را مرور و ثبت کنید</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#78818e1f] px-4 py-5 border-t-2 border-t-slate-600 rounded-lg my-6">
                <p className="text-zinc-500 font-Lalezar">سبد خرید شما در حال حاضر خالی است.</p>
            </div>
            <div className="my-8">
                <Link to={`/shop`} className="bg-[#52ac66] text-white p-4 rounded-lg shadow-lg shadow-green-100">بازگشت به فروشگاه</Link>
            </div>
        </div>
    )
}

export default Cart
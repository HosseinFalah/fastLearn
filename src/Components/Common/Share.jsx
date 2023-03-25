import { AiOutlineLink } from 'react-icons/ai'
import { BsTelegram, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { GrLinkedinOption } from 'react-icons/gr'

const Share = () => {
    return (
        <div className="bg-[#F9F9F9] rounded-xl p-6">
            <p className="text-base text-zinc-500">اشتراک گذاری:</p>
            <div className="flex flex-row-reverse items-center gap-x-4 my-3 text-white">
                <div className="bg-[#57D80F] p-3.5 rounded-2xl cursor-pointer transition-all duration-150 ease-linear hover:scale-110 hover:shadow-inner shadow-lg">
                    <BsWhatsapp size={20}/>
                </div>
                <div className="bg-[#1486FF] p-3.5 rounded-2xl cursor-pointer transition-all duration-150 ease-linear hover:scale-110 hover:shadow-inner shadow-lg">
                    <BsTelegram size={20}/>
                </div>
                <div className="bg-[#1750FF] p-3.5 rounded-2xl cursor-pointer transition-all duration-150 ease-linear hover:scale-110 hover:shadow-inner shadow-lg">
                    <BsTwitter size={20}/>
                </div>
                <div className="bg-[#EA9F11] p-3.5 rounded-2xl cursor-pointer transition-all duration-150 ease-linear hover:scale-110 hover:shadow-inner shadow-lg">
                    <GrLinkedinOption size={20}/>
                </div>
                <div className="bg-[#335DDF] p-3.5 rounded-2xl cursor-pointer transition-all duration-150 ease-linear hover:scale-110 hover:shadow-inner shadow-lg">
                    <FaFacebookF size={20}/>
                </div>
            </div>
            <div className="relative mt-4">
                <input type="text" className="w-full p-4 rounded-lg ring-1 ring-amber-500 border-none outline-none" value="https://demos.pishtaz-web.com/ostadsho/?p=143" readOnly />
                <button className="absolute top-1.5 left-3 bg-zinc-100 p-3 rounded-full">
                    <AiOutlineLink className="font-bold" size={20}/>
                </button>
            </div>
        </div>
    )
}

export default Share
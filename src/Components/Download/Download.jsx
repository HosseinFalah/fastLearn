import { MdAndroid } from "react-icons/md";

const Download = () => {
    return (
        <div className="flex items-center justify-between py-7 px-4 my-6 bg-[#2d2d2d] text-white rounded-2xl">
            <div className="flex items-center">
                <MdAndroid size={35}/>
                <p className="text-lg font-IranSansDN mr-4">دانلود اپلیکیشن استاد شو</p>
            </div>
            <div className="flex gap-x-2">
                <img src="/Assets/download_bazar.png" className="max-w-[8rem] h-auto object-cover" alt="download_bazar"/>
                <img src="/Assets/download_googleplay.png" className="max-w-[8rem] h-auto object-cover" alt="download_googleplay"/>
                <img src="/Assets/download_miket.png" className="max-w-[8rem] h-auto object-cover" alt="download_miket"/>
            </div>
        </div>
    )
}

export default Download;
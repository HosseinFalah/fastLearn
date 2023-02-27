import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { bannerSlider } from "../../Constants/Slider";

const Slider = () => {
    return (
        <Swiper
            dir="rtl"
            spaceBetween={25}
            loop={true}
            autoplay={{
                delay: 3000,
            }}
            navigation={{
                prevEl: '.prev-button',
                nextEl: '.next-button',
            }}
            pagination={{
                clickable: true
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="relative rounded-3xl"
        >
            {bannerSlider.map(banner => (
                <SwiperSlide key={banner.id}>
                    <img src={banner.img} className="max-w-full h-auto" alt="Banner"/>
                </SwiperSlide>
            ))}
            <div className="">
                <IoIosArrowBack className="next-button bg-green-600 p-2 rounded-full absolute left-0 top-1/2 z-10 ml-2 cursor-pointer text-white" size={40}/>
                <IoIosArrowForward className="prev-button bg-green-600 p-2 rounded-full absolute right-0 top-1/2 z-10 mr-2 cursor-pointer text-white" size={40}/>
            </div>
        </Swiper>
    )
}

export default Slider
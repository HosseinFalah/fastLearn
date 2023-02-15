import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { courseSlider } from "../../Constants/Slider";
import Card from "./Card";

const MiniSlider = () => {
    return (
        <Swiper
            dir="rtl"
            loop={true}
            spaceBetween={20}
            autoplay={{
                delay: 5000
            }}
            className="rounded-lg shadow-lg"
            modules={[Navigation, Autoplay]}
        >
            {courseSlider.map(course => (
                <SwiperSlide className="flex" key={course.id}>
                    <Card {...course}/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default MiniSlider
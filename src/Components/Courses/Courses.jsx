// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdCastForEducation } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { courses } from "../../Constants/course";
import Card from "../Common/Card";

const Courses = () => {
    return (
        <div className="my-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="bg-[#4b515a] p-2 rounded-lg">
                        <MdCastForEducation className="text-white" size={30}/>
                    </div>
                    <div className="mr-4">
                        <h3 className="font-Lalezar text-2xl">جدیدترین دوره های آموزشی</h3>
                        <p className="text-sm text-gray-500 mt-1">THE LATEST TRAINING COURSES</p>
                    </div>
                </div>
                <button className="flex items-center transition-colors delay-75 ease-linear bg-[#4b515a] hover:bg-green-600 text-white py-3 px-6 rounded-xl">
                    مشاهده بیشتر
                    <IoIosArrowBack className="mr-2"/>
                </button>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={25}
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: true
                }}
                navigation={{
                    prevEl: '.prev-button',
                    nextEl: '.next-button'
                }}
                modules={[Autoplay, Navigation]}
                className="my-7 h-[27rem]"
            >
                {courses.map(course => (
                    <SwiperSlide key={course.id}>
                        <Card {...course}/>
                    </SwiperSlide>
                ))}
                <div>
                    <IoIosArrowBack className="next-button bg-green-600 p-2 rounded-full absolute left-0 top-1/2 z-10 ml-2 cursor-pointer text-white" size={40}/>
                    <IoIosArrowForward className="prev-button bg-green-600 p-2 rounded-full absolute right-0 top-1/2 z-10 mr-2 cursor-pointer text-white" size={40}/>
                </div>
            </Swiper>
        </div>
    )
}

export default Courses
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { categorys } from "../../Constants/category";

const CategoryCourse = () => {
    return (
        <Swiper
            spaceBetween={25}
            slidesPerView={2}
            autoplay={{
                delay: 4000,
                pauseOnMouseEnter: true
            }}
            navigation={{
                prevEl: '.prev-button',
                nextEl: '.next-button'
            }}
            modules={[Autoplay, Navigation]}
            breakpoints={{
                // when window width is >= 480px
                480: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                // when window width is >= 640px
                768: {
                    slidesPerView: 3,
                    spaceBetween: 25
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                },
            }}
            className="relative h-40 lg:h-32 group/btnSlider"
        >
            {categorys.map(category => (
                <SwiperSlide className="p-2 cursor-pointer group" key={category.id}>
                    {/* Mobile View */}                    
                    <div className="flex flex-col items-center justify-center lg:hidden gap-x-5 bg-white transition-colors delay-75 ease-linear group-hover:bg-green-500 shadow-xl rounded-lg p-4">
                        {category.icon}
                        <div className="mt-3">
                            <p className="font-Lalezar text-sm group-hover:text-white">{category.title}</p>
                            <p className="text-sm text-gray-400 group-hover:text-white">{category.desc}</p>
                        </div>
                    </div>
                    {/* Desktop View */}
                    <div className="hidden lg:flex items-center justify-center gap-x-3 bg-white transition-colors delay-75 ease-linear group-hover:bg-green-500 shadow-xl rounded-lg py-5 px-4">
                        {category.icon}
                        <div>
                            <p className="font-Lalezar text-base group-hover:text-white">{category.title}</p>
                            <p className="text-sm text-gray-400 group-hover:text-white">{category.desc}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            <div>
                <IoIosArrowBack className="next-button invisible group-hover/btnSlider:visible bg-gray-600 p-2 rounded-full absolute left-0 top-1/4 z-10 ml-4 cursor-pointer text-white opacity-75" size={40}/>
                <IoIosArrowForward className="prev-button invisible group-hover/btnSlider:visible bg-gray-600 p-2 rounded-full absolute right-0 top-1/4 z-10 mr-4 cursor-pointer text-white opacity-75" size={40}/>
            </div>
        </Swiper>
    )
}

export default CategoryCourse;
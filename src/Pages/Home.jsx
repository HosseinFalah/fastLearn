import Courses from "../Components/Courses/Courses";
import { Slider, MiniSlider, Category, SocialNetworks } from "./../Components/index";

const Home = () => {
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center gap-x-5">
                <div className="flex w-full lg:w-3/4">
                    <Slider/>
                </div>
                <div className="hidden lg:flex lg:w-1/4">
                    <MiniSlider/>
                </div>
            </div>
            <Category/>
            <Courses/>
            <SocialNetworks/>
        </div>
    )
}

export default Home
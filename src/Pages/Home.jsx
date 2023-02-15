import MiniSlider from "../Components/Slider/MiniSlider"
import Slider from "../Components/Slider/Slider"

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
        </div>
    )
}

export default Home
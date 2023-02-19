import { Slider, MiniSlider, Category, SocialNetworks, Weblogs, Courses, Download } from "./../Components/index";

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
            <Weblogs/>
            <Download/>
        </div>
    )
}

export default Home
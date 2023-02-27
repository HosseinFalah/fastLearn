import { Slider, Category, SocialNetworks, Weblogs, Courses, Download } from "./../Components/index";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Slider/>
            <Category/>
            <Courses/>
            <SocialNetworks/>
            <Weblogs/>
            <Download/>
        </div>
    )
}

export default Home
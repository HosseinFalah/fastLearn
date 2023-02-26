import CardWeblog from "./CardWeblog"

const Weblogs = () => {
    return (
        <div className="my-10">
            <div className="text-center">
                <p className="font-IranSansDN text-base lg:text-lg">- بروزترین مطالب روز -</p>
                <h2 className="font-Lalezar text-lg lg:text-2xl mt-2">مطالب و اخبار های جدید حوزه اینترنت</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-y-3 gap-x-3">
                <CardWeblog/>
            </div>
        </div>
    )
}

export default Weblogs
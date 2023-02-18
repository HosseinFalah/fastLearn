import CardWeblog from "./CardWeblog"

const Weblogs = () => {
    return (
        <div className="my-10">
            <div className="text-center">
                <p className="font-IranSansDN text-lg">- بروزترین مطالب روز -</p>
                <h2 className="font-Lalezar text-2xl mt-2">مطالب و اخبار های جدید حوزه اینترنت</h2>
            </div>
            <div className="flex items-center justify-center my-8 gap-x-6">
                <CardWeblog/>
            </div>
        </div>
    )
}

export default Weblogs
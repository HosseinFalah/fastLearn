const NotFound = () => {
    return (
        <div className="grid place-items-center">
            <h1 className="font-IranSansDN text-emerald-700 text-2xl">صفحه مورد نظر پیدا نشد</h1>
            <div className="max-w-md lg:max-w-xl my-6">
                <img 
                    src="/Assets/NotFound.jpg"
                    className="max-w-full object-cover h-auto"
                    alt="صفحه مورد نظر پیدا نشد" />
            </div>
        </div>
    )
}

export default NotFound
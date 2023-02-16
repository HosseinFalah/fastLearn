import CategoryCourse from './CategoryCourse'

const Category = () => {
    return (
        <div className="text-center my-5">
            <div className="font-Lalezar">
                <p className="font-normal text-lg text-gray-600">- دسته بندی دوره های آموزشـی -</p>
                <h3 className="font-semibold text-2xl text-gray-700">دوره های فراوان در دسته بندی های مختلف</h3>
            </div>
            <CategoryCourse/>
        </div>
    )
}

export default Category
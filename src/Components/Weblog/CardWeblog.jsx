import { weblogs } from "../../Constants/weblogs";

import { BiMessageRoundedDetail } from "react-icons/bi";

const CardWeblog = () => {
    return (
        <>
            {weblogs.map(weblog => (
                <div className="shadow-2xl rounded-2xl p-2" key={weblog.id}>
                    <img src={weblog.img} className="max-w-full h-auto rounded-lg" alt={weblog.title} />
                    <div className="flex items-center justify-between my-4 gap-x-4">
                        <div>
                            <div className="px-3 py-1 border-2 border-gray-200 text-gray-500 rounded-md">
                                <p className="text-center text-sm">{weblog.date}</p>
                            </div>
                            <div className="px-3 py-1 border-2 border-gray-200 text-gray-500 rounded-md text-center mt-2">
                                <BiMessageRoundedDetail/>
                                <span>{weblog.counterComments}</span>
                            </div>
                        </div>
                        <div>
                            <h5 className="font-Lalezar text-lg text-gray-600 transition-colors delay-75 ease-linear hover:text-green-600 cursor-pointer">{weblog.title}</h5>
                            <p className="mt-3 font-IranSansDN text-base text-gray-700">{weblog.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CardWeblog
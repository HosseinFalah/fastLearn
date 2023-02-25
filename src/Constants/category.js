import { v4 as uuidv4 } from "uuid";

import { ImHtmlFive } from "react-icons/im";
import { FaCss3, FaBrain, FaPhp, FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export const categorys = [
    {
        id: uuidv4(),
        title: 'کارگاه آموزشی html',
        icon: <ImHtmlFive className="mr-2 text-gray-700 group-hover:text-white" size={35}/>,
        desc: '25 دوره آموزشی'
    },
    {
        id: uuidv4(),
        title: 'کارگاه آموزشی css',
        icon: <FaCss3 className="mr-2 text-gray-700 group-hover:text-white" size={35}/>,
        desc: '15 دوره آموزشی'
    },
    {
        id: uuidv4(),
        title: 'کارگاه آموزشی js',
        icon: <SiJavascript className="mr-2 text-gray-700 group-hover:text-white" size={35}/>,
        desc: '35 دوره آموزشی'
    },
    {
        id: uuidv4(),
        title: 'کارگاه هوش مصنوعی',
        icon: <FaBrain className="mr-2 text-gray-700 group-hover:text-white" size={35}/>,
        desc: '4 دوره آموزشی'
    },
    {
        id: uuidv4(),
        title: 'کارگاه آموزشی php',
        icon: <FaPhp className="mr-2 text-gray-700 group-hover:text-white" size={35}/>,
        desc: '15 دوره آموزشی'
    },
    {
        id: uuidv4(),
        title: 'کارگاه آموزشی pyhton',
        icon: <FaPython className="mr-2 text-gray-700 group-hover:text-white" size={35}/>,
        desc: '13 دوره آموزشی'
    }
]
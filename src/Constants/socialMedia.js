import { v4 as uuidv4 } from "uuid";

import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { SiAparat } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";

export const socialMedia = [
    {
        id: uuidv4, 
        title: 'صفحه اینستاگرامــی', 
        styles: 'bg-gradient-to-tr from-[#FF4D4D] to-[#CE61C1]', 
        icon: <BsInstagram className="text-white" size={25}/>
    },
    {
        id: uuidv4, 
        title: 'صــفحه آپــارات', 
        styles: 'bg-gradient-to-tr from-[#892443] to-[#FF4C84]', 
        icon: <SiAparat className="text-white" size={25}/>
    },
    {
        id: uuidv4, 
        title: 'کــانال تلگرامــی', 
        styles: 'bg-gradient-to-tr from-blue-500 to-sky-400', 
        icon: <FaTelegramPlane className="text-white" size={25}/>
    },
    {
        id: uuidv4, 
        title: 'پشــتیبانی واتســاپ', 
        styles: 'bg-gradient-to-tr from-[#128C7E] to-[#25D366]', 
        icon: <BsWhatsapp className="text-white" size={25}/>
    }
];
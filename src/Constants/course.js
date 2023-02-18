import { v4 as uuidv4 } from "uuid";

export const courses = [
    {
        id: uuidv4(), 
        category: "برنامه نویسی",
        img: '/Assets/Com_node-300x169.png',
        title: "آموزش Api نویسی با Nodejs", 
        teacher: "محمد امین سعیدی راد",
        price: 259_000,
        currentPrice: 356_000, 
        discount: 27,
        Satisfaction: 80,
        students: 33
    },
    {
        id: uuidv4(), 
        category: "برنامه نویسی",
        img: '/Assets/webinar1-852-1-300x169.png',
        title: "راه اندازی کسب و کار شخصی برای برنامه نویسان", 
        teacher: "قدیر یلمه",
        price: 225_000,
        currentPrice: 1_200_000, 
        discount: 81,
        Satisfaction: 86,
        students: 18
    },
    {
        id: uuidv4(), 
        category: "برنامه نویسی",
        img: '/Assets/Com_pwk-300x169.png',
        title: "تست نفوذ با کالی لینوکس | PWK", 
        teacher: "قدیر یلمه",
        price: 750_000,
        currentPrice: 950_000, 
        discount: 21,
        Satisfaction: 100,
        students: 27
    },
    {
        id: uuidv4(), 
        category: "برنامه نویسی",
        img: '/Assets/Com_npm.png',
        title: "آموزش NPM برای جاوا اسکریپت", 
        teacher: "محمد امین سعیدی راد",
        price: 30_000,
        currentPrice: 40_000, 
        discount: 25,
        Satisfaction: 100,
        students: 5
    },
    {
        id: uuidv4(), 
        category: "برنامه نویسی",
        img: '/Assets/Com_VsCode.png',
        title: "آموزش کاربردی Vscode | مقدماتی تا پیشرفته", 
        teacher: "محمد امین سعیدی راد",
        price: 90_000,
        currentPrice: 180_000, 
        discount: 21,
        Satisfaction: 80,
        students: 1
    },
    {
        id: uuidv4(), 
        category: "برنامه نویسی",
        img: '/Assets/Com_Security_network-min.png',
        title: "آموزش شبکه با گرایش امنیت", 
        teacher: "اشکان مقدس",
        price: 110_000,
        currentPrice: 230_000, 
        discount: 29,
        Satisfaction: 100,
        students: 20
    },

]
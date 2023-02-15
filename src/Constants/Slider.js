import { v4 as uuidv4 } from "uuid";

export const bannerSlider = [
    {id: uuidv4(), img: '/Assets/banneros-1.png'},
    {id: uuidv4(), img: '/Assets/banneros-2.png'},
    {id: uuidv4(), img: '/Assets/banneros-3.png'}
]

export const courseSlider = [
    {
        id: uuidv4(), 
        category: "برنامه نویسی",
        img: '/Assets/webinar1-852-1-300x169.png',
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
    }
]
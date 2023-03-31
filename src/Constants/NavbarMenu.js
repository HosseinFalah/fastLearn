import { v4 as uuidv4 } from 'uuid';

export const navbarMenu = [
    {
        id: uuidv4(),
        name: "برنامه نویسی",
        link: '/',
        subMenu: [
            'فرانت اند',
            'بک اند',
            'DevOps'
        ]
    },
    {
        id: uuidv4(),
        name: "فروشگاه",
        link: '/shop',
        subMenu: [
            'سبد خرید',
            'پرداخت',
            'حساب کاربری'
        ]
    },
    {
        id: uuidv4(),
        name: "مدرسین",
        link: '/teacher/jadi',
        subMenu: [
            'قدیر یلمه',
            'ایمان مئدانی',
            'جادی میرمیرانی'
        ]
    },
    {
        id: uuidv4(),
        name: "وبلاگ",
        link: '/blogs', 
        subMenu: [
            'شبکه و امنیت',
            'کسب و کار',
            'برنامه نویسی'
        ]
    },
]
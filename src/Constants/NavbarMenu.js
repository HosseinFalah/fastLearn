import { v4 as uuidv4 } from 'uuid';

export const navbarMenu = [
    {
        id: uuidv4(),
        name: "برنامه نویسی", 
        subMenu: [
            'فرانت اند',
            'بک اند',
            'DevOps'
        ]
    },
    {
        id: uuidv4(),
        name: "فروشگاه", 
        subMenu: [
            'سبد خرید',
            'پرداخت',
            'حساب کاربری'
        ]
    },
    {
        id: uuidv4(),
        name: "مدرسین", 
        subMenu: [
            'قدیر یلمه',
            'ایمان مئدانی',
            'جادی میرمیرانی'
        ]
    },
    {
        id: uuidv4(),
        name: "وبلاگ", 
        subMenu: [
            'شبکه و امنیت',
            'کسب و کار',
            'برنامه نویسی'
        ]
    },
]
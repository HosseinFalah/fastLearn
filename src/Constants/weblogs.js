import { v4 as uuidv4 } from "uuid";

export const weblogs = [
    {
        id: uuidv4(),
        img: '/Assets/weblog_1.jpg',
        title: "چگونه با نیچ مارکتینگ درآمد بالایی داشته باشیم؟",
        desc: "نیچ مارکتینگ چیست؟ چرا این موضوع به تازگی در دنیای کسب‌ و کارهای اینترنتی و...",
        date: "12 آذر",
        counterComments: 0
    },
    {
        id: uuidv4(),
        img: '/Assets/weblog_2.jpg',
        title: "بازاریابی حسی راهی ساده و کم هزینه برای افزایش فروش",
        desc: "شاید بازاریابی حسی به نظرتان سخت و پیچیده بیاید، ولی قطعا همۀ شما حداقل یکبار...",
        date: "12 آذر",
        counterComments: 1
    },
    {
        id: uuidv4(),
        img: '/Assets/weblog_3.jpg',
        title: "ورود به دنیای آنلاین؛ راهی برای افزایش فروش",
        desc: "تا چند وقت پیش، فروش نسبتا خوبی داشتم؛ اما الان یکی دو سال است که...",
        date: "12 آذر",
        counterComments: 0
    },
]
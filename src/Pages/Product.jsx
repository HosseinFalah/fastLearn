import { Link } from "react-router-dom";

import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { FaChalkboardTeacher, FaDigitalOcean, FaFacebookF, FaLanguage, FaRegComments, FaRegSave, FaShoppingCart, FaUsers } from "react-icons/fa";
import { MdLocationOn, MdOutlineDescription } from "react-icons/md";
import { BsBoxFill, BsInstagram, BsTelegram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { SiFsecure } from "react-icons/si";
import { CgTimer } from "react-icons/cg";
import { AiOutlineLink, AiOutlineMenu } from "react-icons/ai";
import { BiCheckDouble, BiDollar } from "react-icons/bi";
import { GiRank3 } from "react-icons/gi";
import { GrLinkedinOption } from "react-icons/gr";
import { RiTelegramLine } from "react-icons/ri";

import { numberWithCommas } from "../Utils/numberWithCommas";

const Product = () => {
    return (
        <div className="container m-auto">
            <div className="my-4">
                <ul className="bg-[#52ac66] rounded-xl flex py-4 px-6">
                    <li className="flex items-center text-white">
                        <CiLocationOn size={25}/>
                        <a href="!#" className="text-[#FFFFFF99] mr-6 ml-3">خانه</a>
                    </li>
                    <li className="flex items-center text-white">
                        <IoIosArrowBack className="ml-3" size={20}/>
                        <a href="!#" className="text-[#FFFFFF99]">فروشگاه</a>
                    </li>
                    <li className="flex items-center text-white">
                        <IoIosArrowBack className="ml-3" size={20}/>
                        <a href="!#" className="text-gray-100">آموزش Npm برای جاوااسکریپت</a>
                    </li>
                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <img src="/Assets/Com_npm.png" className="max-w-full h-auto object-cover rounded-2xl" alt="npm-Course" />
                <div className="bg-[#F9F9F9] p-16 rounded-2xl">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xl text-stone-700 font-Vazir font-bold">آموزش NPM برای جاوا اسکریپت</h4>
                        <div className="bg-[#52ac661f] group transition-colors delay-150 ease-linear hover:bg-[#52ac66] p-3.5 cursor-pointer rounded-lg">
                            <FaRegSave className="text-[#52ac66] group-hover:text-white" size={23}/>
                        </div>
                    </div>
                    <p className="text-base text-zinc-500 leading-9 mt-7">حدوداً بیست و پنج سال پیش و در سال 1995، javascript بوجود آمد تا بتوانیم با آن صفحه های وب ایجاد کنیم. شاید در آن  …</p>
                    <div className="flex items-center justify-between mt-8">
                        <div className="bg-white p-4 rounded-2xl">
                            <p className="inline-block text-zinc-600">قیمت: </p>
                            <del className="text-sm text-zinc-500 mx-2">{numberWithCommas(40000)}</del>
                            <p className="inline-block text-zinc-700 mr-1"><b>{numberWithCommas(30000)}</b> تومان</p>
                        </div>
                        <button className="flex items-center bg-green-600 transition-colors duration-150 ease-linear hover:bg-green-700 text-white px-4 py-3 rounded-lg">
                            <FaShoppingCart className="text-white ml-2" size={20}/>
                            شرکت در دوره
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 my-6 gap-x-6">
                <div className="bg-[#F9F9F9] col-span-2 rounded-xl p-6">
                    <div className="flex items-center gap-x-2">
                        <button className="flex items-center bg-white p-4 rounded-lg drop-shadow-md">
                            <MdOutlineDescription className="text-zinc-700 ml-2" size={20}/>
                            توضیحات دوره
                        </button>
                        <button className="flex items-center bg-white p-4 rounded-lg drop-shadow-md">
                            <FaRegComments className="text-zinc-700 ml-2" size={20}/>
                            دیدگاه ها
                        </button>
                        <button className="flex items-center bg-white p-4 rounded-lg drop-shadow-md">
                            <FaChalkboardTeacher className="text-zinc-700 ml-2" size={20}/>
                            مدرس دوره
                        </button>
                    </div>
                    <div>
						<p className="text-base text-zinc-600 mt-4 leading-10">حدوداً بیست و پنج سال پیش و در سال 1995، javascript بوجود آمد تا بتوانیم با آن صفحه های وب ایجاد کنیم. شاید در آن زمان، هیچ کس فکر نمی‌کرد که جاوااسکریپت بتواند تا این حد فراگیر شود. زبانی که از ابتدا قرار بود مجموعه‌ای از اسکریپت‌های کوچک را در سمت client اجرا کند، اکنون به جایی رسیده که در همه زمینه‌ها حرفی برای گفتن دارد! از هوش مصنوعی و یادگیری ماشین گرفته، تا اینترنت اشیا و اپلیکیشن‌های موبایل و سرور نویسی و بسیاری حوزه‌های دیگر. در این میان، می‌توان ادعا کرد که وب نویسی سمت کاربر، وطن اصلی javascript محسوب می‌شود.</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">امروزه، javascript یکی از محبوب‌ترین زبان‌ها بین توسعه‌دهنده های وب است. سبک بودن آن، توانایی اجرا شدنش در مرورگرها، سادگی یادگیری آن، آسان بودن syntax و گستردگی استفاده‌اش، زیاد بودن کتابخانه‌ها، پلاگین‌ها و ابزارهایش، ظهور node.js&nbsp;و مواردی از این دست، جاوااسکریپت را به یک زبان جذاب برای برنامه‌نویس‌ها بدل کرده. ما قصد داریم در این مجموعه مقالات، به شرح npm بپردازیم، که بزرگ‌ترین&nbsp; و غنی‌ترین software registry در دنیای جاوااسکریپت محسوب می شود.</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">این مجموعه مقالات در دو فصلِ «مقدماتی» و «پیشرفته» ارائه می شود و تلاش شده که مفاهیم و عناوین ضروری تر npm در مقالات فصل اول گنجانده شوند. همچنین برای آن دسته از کاربرانی که علاقمند به مطالعه عمیق تر این مبحث هستند، فصل دوم را تدارک دیده ایم و در آن مفاهیم پیشرفته تر npm را بررسی خواهیم کرد.</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">برای دنبال کردن مقالات فصل اول، نیازی به داشتن هیچ پیش زمینه‌ای نیست. ولی اگر تاکنون با پروژه‌هایی که پایه آن‌ها javascript و node.js&nbsp;بوده کار کرده باشید، بهتر می‌توانید از این مقالات استفاده کنید.</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">لازم به ذکر است که توضیحات این مجموعه مقالات، بر اساس npm نسخه 6.13 می‌باشد.</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">در این مقاله که نخستین قسمت از فصل اول این مجموعه است، درباره موضوعات زیر توضیح داده ایم:</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">· مفهوم پکیج و ماژول در دنیای جاوااسکریپت</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">· npm و چیستیِ آن</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">· نحوه نصب npm بر روی سیستم عامل</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <h2 className="text-xl text-zinc-700">
                            <b>مفهوم پکیج در جاوااسکریپت</b>
                        </h2>
                        <p className="text-base text-zinc-600 mt-4 leading-10">وقتی با جاوااسکریپت کار می‌کنیم، واژه‌های package و module خیلی به چشممان می‌خورند. این دو واژه بسیاری اوقات عملاً معنای مشابهی می‌دهند و مفهومی شبیه library ها در زبان‌های دیگر دارند. اما اگر بخواهیم دقیق‌تر بیان کنیم:</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">· معمولاً موقع کار با js خیلی با واژه library سر و کار نداریم.</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">· منظور از module در جاوااسکریپت، کوچک‌ترین واحد functionality است. (مثلاً هر چیزی که در جاوااسکریپت require، import و export می‌کنیم، یک module به حساب می‌آید)</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">· منظور از پکیج، distribution unit در کدهای مبتنی بر node.js&nbsp;می‌باشد. یک ماژول یا مجموعه‌ای از ماژول‌ها در کنار هم که به نحوی خاص ترکیب شده‌اند تا یک کار مشخص انجام دهند، یک package را تشکیل می‌دهند. در واقع واژه package وقتی وارد کار می‌شود که ما می‌خواهیم با community ارتباط برقرار کنیم و کدمان را در اختیار دیگران قرار بدهیم و آن را distribute کنیم. درست اتفاقی که در مورد npm رخ داده و می‌گوییم npm ابزاری‌ست برای مدیریت توزیع این واحد ها(یعنی همین پکیج‌ها). ایده اصلی این ساختارِ پکیجی، این است که هر پکیج تا جای ممکن کوچک باشد و یک کار خاص را انجام دهد، و بعداً از کنار هم قرار گرفتن این پکیج‌ها یک پروژه‌ایجاد شود. امروزه هر پروژه جاوااسکریپتی، مثلاً یک وب‌سایت، از تعداد زیادی پکیج در کنار یکدیگر تشکیل شده. در واقع پکیج یک دایرکتوری‌ست که یک یا چند فایل در آن قرار دارد، و فایلی به نام <code class="custom-inline-code">package.json</code> &nbsp;دارد که اطلاعاتی (metadata هایی) درباره آن پکیج به ما می‌دهد. اما اگر بخواهیم تعریف رسمی‌تر پکیج را بیان کنیم، باید بگوییم پکیج:</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">a) یک فولدر شامل یک برنامه است، که یک فایل package.json دارد و آن فایل برنامه را توصیف می‌کند.</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">b) یک فایل از جنس gzipped tarball است که مورد a را داشته باشد.</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">c) یک url است که خروجی‌‌اش مورد b می‌باشد.</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">d) یک <code class="custom-inline-code">&lt;name&gt;@&lt;version&gt;</code>&nbsp;است که در registry مربوط به npm منتشر شده باشد و مورد c را داشته باشد.</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">e) یک&nbsp;<code class="custom-inline-code">&lt;name&gt;@&lt;tag&gt;</code> است که به مورد d اشاره می‌کند.</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">f) یک <code class="custom-inline-code">&lt;name&gt;</code> است که برچسب latest داشته باشد و شرط e را محقق کند.</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">g) یک <code class="custom-inline-code">&lt;git remote url&gt;</code> است که به مورد a ختم شود.</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">برای مطالعه بیشتر درباره مفاهیم package و module و تفاوت های این دو، می توانید به آدرس زیر مراجعه کنید:</p>
                        <p className="text-base text-blue-500 mt-4 leading-10"><a href="https://docs.npmjs.com/about-packages-and-modules" target="_blank" rel="nofollow noopener noreferrer">https://docs.npmjs.com/about-packages-and-modules</a></p>
                        <p>&nbsp;</p>
                        <h2 className="text-xl text-zinc-700"><b>npm چیست؟</b></h2>
                        <p className="text-base text-zinc-600 mt-4 leading-10">npm یا همان node package manager، بزرگ‌ترین بستر برای ثبت، نشر، اشتراک‌گذاری، بروزرسانی و استفاده از پکیج‌های جاوااسکریپت است. npm یک بستر software registry در اختیارمان قرار می‌دهد که از طریق آن، برنامه‌نویس‌ها از سراسر دنیا پکیج‌های خود را به اشتراک می‌گذارند یا پکیج سایر برنامه‌نویس ها را برای استفاده برمی‌دارند. در این بین اگر برنامه‌نویسی پکیجش را آپدیت کرد، npm به سادگی این امکان را به وی می‌دهد که پکیج بروز شده‌اش را مجدداً روی npm قرار دهد، و سایر کسانی هم که قبلاً در پروژه‌هایشان از آن پکیج استفاده می‌کردند، بتوانند آن را بروز کنند.</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">وقتی از npm صحبت می‌کنیم، معمولاً سه چیز مد نظرمان است:</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">1. ابزار CLI (command-line interface) ای که npm در اختیار قرار می‌دهد، یعنی همین دستوراتی که در ترمینال اجرا می‌کنیم.</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">2. وب‌سایت رسمی npm که حتماً با آن آشنایی دارید: <a href="https://www.npmjs.com/" target="_blank" rel="nofollow noopener noreferrer">npmjs.com</a>. و در آن می توانیم دنبال پکیج‌های مورد نظرمان بگردیم، درباره آن‌ها اطلاعات کسب کنیم، برای خود و یا تیممان پروفایل بسازیم، ثبت‌نام با دسترسی و امکانات خاص انجام بدهیم، پکیج‌های private و public منتشر کنیم و … .</p>
                        <p className="text-base text-zinc-600 mt-4 leading-10">3. بستر registry که npm در اختیار ما قرار داده است. registry را می‌توان اینگونه تعریف کرد: «یک پایگاه داده بزرگ که درباره پکیج‌هایی که برنامه‌نویس‌ها با یکدیگر به اشتراک می‌گذارند اطلاعات دارد». هر کس بخواهد پکیجی تولید کند که دیگران بتوانند از طریق npm به آن دسترسی داشته باشند، باید آن را در registry ثبت کند.</p>
                        <p>&nbsp;</p>
                        <h2 className="text-xl text-zinc-700"><b>نحوه نصب npm</b></h2>
                        <p className="text-base text-zinc-600 mt-4 leading-10">نصب npm خیلی ساده است. npm بصورت خودکار همراه با node.js نصب می‌شود و همان‌طور که می‌دانید، برای نصب node.js هم کافی‌ست به سایت آن برویم و نسخه منطبق با سیستم‌عامل خود را از آنجا دانلود کنیم:</p>
				    </div>
                    <div className="flex items-center justify-between gap-x-4 my-4">
                        <div className="bg-gradient-to-l w-1/2 from-purple-700 via-red-500 to-orange-300 rounded-3xl flex items-center justify-around py-4">
                            <div className="text-white">
                                <p>صفحه اینستاگرامی مـا</p>
                                <p>@pishtazweb</p>
                            </div>
                            <div className="bg-white rounded-full p-2">
                                <BsInstagram className="text-red-500" size={25}/>
                            </div>
                        </div>
                        <div className="bg-gradient-to-l w-1/2 from-blue-700 to-sky-400 rounded-3xl flex items-center justify-around py-4">
                            <div className="text-white">
                                <p>کانـال تلـگرامی مـا</p>
                                <p>@pishtazweb</p>
                            </div>
                            <div className="bg-white rounded-full p-2">
                                <RiTelegramLine className="text-sky-500" size={25}/>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 space-y-4">
                        <p className="text-lg text-zinc-700">#برچسب:</p>
                        <div className="flex gap-x-6">
                            <Link to={`/`} className="bg-[#52ac661f] text-[#52ac66] border-dashed border-2 border-[#52ac66] rounded-xl px-2 py-1 transition-all duration-150 ease-linear hover:bg-[#52ac66] hover:text-white">javascript</Link>
                            <Link to={`/`} className="bg-[#52ac661f] text-[#52ac66] border-dashed border-2 border-[#52ac66] rounded-xl px-2 py-1 transition-all duration-150 ease-linear hover:bg-[#52ac66] hover:text-white">js</Link>
                            <Link to={`/`} className="bg-[#52ac661f] text-[#52ac66] border-dashed border-2 border-[#52ac66] rounded-xl px-2 py-1 transition-all duration-150 ease-linear hover:bg-[#52ac66] hover:text-white">nodejs</Link>
                            <Link to={`/`} className="bg-[#52ac661f] text-[#52ac66] border-dashed border-2 border-[#52ac66] rounded-xl px-2 py-1 transition-all duration-150 ease-linear hover:bg-[#52ac66] hover:text-white">npm</Link>
                            <Link to={`/`} className="bg-[#52ac661f] text-[#52ac66] border-dashed border-2 border-[#52ac66] rounded-xl px-2 py-1 transition-all duration-150 ease-linear hover:bg-[#52ac66] hover:text-white">npmjs</Link>
                            <Link to={`/`} className="bg-[#52ac661f] text-[#52ac66] border-dashed border-2 border-[#52ac66] rounded-xl px-2 py-1 transition-all duration-150 ease-linear hover:bg-[#52ac66] hover:text-white">اموزش برنامه نویسی</Link>
                            <Link to={`/`} className="bg-[#52ac661f] text-[#52ac66] border-dashed border-2 border-[#52ac66] rounded-xl px-2 py-1 transition-all duration-150 ease-linear hover:bg-[#52ac66] hover:text-white">جاوااسکریپت</Link>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="bg-[#F9F9F9] rounded-xl p-6 space-y-4">
                        <div className="bg-white flex items-center p-3 rounded-xl gap-x-4">
                            <div className="bg-stone-100 p-2 rounded-lg">
                                <BsBoxFill className="text-zinc-700" size={22}/>
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500">دسته بندی اصلی</p>
                                <p className="text-base font-bold text-zinc-600">برنامه نویسی</p>
                            </div>
                        </div>
                        <div className="bg-white flex items-center p-3 rounded-xl gap-x-4">
                            <div className="bg-stone-100 p-2 rounded-lg">
                                <FaUsers className="text-zinc-700" size={22}/>
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500">تعداد دانشجو</p>
                                <p className="text-base font-bold text-zinc-600">8</p>
                            </div>
                        </div>
                        <div className="bg-white flex items-center p-3 rounded-xl gap-x-4">
                            <div className="bg-stone-100 p-2 rounded-lg">
                                <MdLocationOn className="text-zinc-700" size={22}/>
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500">نوع آموزش</p>
                                <p className="text-base font-bold text-zinc-600">آنلاین / دانلودی</p>
                            </div>
                        </div>
                        <div className="bg-white flex items-center p-3 rounded-xl gap-x-4">
                            <div className="bg-stone-100 p-2 rounded-lg">
                                <SiFsecure className="text-zinc-700" size={22}/>
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500">سطح آموزش</p>
                                <p className="text-base font-bold text-zinc-600">پیشرفته</p>
                            </div>
                        </div>
                        <div className="bg-white flex items-center p-3 rounded-xl gap-x-4">
                            <div className="bg-stone-100 p-2 rounded-lg">
                                <CgTimer className="text-zinc-700" size={22}/>
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500">زمان آموزش</p>
                                <p className="text-base font-bold text-zinc-600">11 ساعت و 15 دقیقه</p>
                            </div>
                        </div>
                        <div className="bg-white flex items-center p-3 rounded-xl gap-x-4">
                            <div className="bg-stone-100 p-2 rounded-lg">
                                <FaLanguage className="text-zinc-700" size={22}/>
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500">زبان آموزش</p>
                                <p className="text-base font-bold text-zinc-600">عربی</p>
                            </div>
                        </div>
                        <div className="bg-white flex items-center p-3 rounded-xl gap-x-4">
                            <div className="bg-stone-100 p-2 rounded-lg">
                                <AiOutlineMenu className="text-zinc-700" size={22}/>
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500">سرفصل ها</p>
                                <p className="text-base font-bold text-zinc-600">ندارد</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <p className="text-sm text-zinc-700"><b className="ml-2 text-lg">80%</b>دوره آموزشی تکمیل شده است</p>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 flex justify-end">
                                <div class="bg-green-600 h-2.5 rounded-full w-52"></div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F9F9F9] rounded-xl p-6 space-y-4">
                        <div className="bg-white flex items-center p-3 rounded-xl gap-x-4">
                            <div className="bg-stone-100 p-2 rounded-lg">
                                <BiDollar className="text-zinc-700" size={22}/>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-zinc-500">قیمت دوره</p>
                                <del className="text-sm text-zinc-500 inline-block ml-3">40,000</del>
                                <p className="text-base font-bold text-zinc-600 inline">30,000 تومان</p>
                            </div>
                        </div>
                        <div className="bg-white flex items-center p-3 rounded-xl gap-x-4">
                            <div className="bg-stone-100 p-2 rounded-lg">
                                <GiRank3 className="text-zinc-700" size={22}/>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-zinc-500">بازخورد</p>
                                <p className="text-base font-bold text-zinc-600 inline">5.00</p>
                                <span className="text-xs text-zinc-500 mr-2">از 1 بازخورد</span>
                            </div>
                        </div>
                        <div className="bg-white flex items-center p-3 rounded-xl gap-x-4">
                            <div className="bg-stone-100 p-2 rounded-lg">
                                <BiCheckDouble className="text-zinc-700" size={22}/>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-zinc-500">تاریخ انتشار</p>
                                <p className="text-base font-bold text-zinc-600">12 آذر 1401</p>
                            </div>
                        </div>
                        <div className="bg-white flex items-center p-3 rounded-xl gap-x-4">
                            <div className="bg-stone-100 p-2 rounded-lg">
                                <FaDigitalOcean className="text-zinc-700" size={22}/>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-zinc-500">سرفصل ها</p>
                                <p className="text-base font-bold text-zinc-600">ندارد</p>
                            </div>
                        </div>
                        <button className="flex items-center justify-center bg-[#52ac66] transition-all duration-100 ease-linear drop-shadow-md hover:bg-[#36924a] py-4 text-white w-full rounded-lg">
                            <FaShoppingCart className="ml-2" size={20}/>
                            شرکت در دوره
                        </button>
                    </div>
                    <div className="bg-[#F9F9F9] rounded-xl p-6">
                        <p className="text-base text-zinc-500">اشتراک گذاری:</p>
                        <div className="flex flex-row-reverse items-center gap-x-4 my-3 text-white">
                            <div className="bg-[#57D80F] p-3.5 rounded-2xl cursor-pointer transition-all duration-150 ease-linear hover:scale-110 hover:shadow-inner shadow-lg">
                                <BsWhatsapp size={20}/>
                            </div>
                            <div className="bg-[#1486FF] p-3.5 rounded-2xl cursor-pointer transition-all duration-150 ease-linear hover:scale-110 hover:shadow-inner shadow-lg">
                                <BsTelegram size={20}/>
                            </div>
                            <div className="bg-[#1750FF] p-3.5 rounded-2xl cursor-pointer transition-all duration-150 ease-linear hover:scale-110 hover:shadow-inner shadow-lg">
                                <BsTwitter size={20}/>
                            </div>
                            <div className="bg-[#EA9F11] p-3.5 rounded-2xl cursor-pointer transition-all duration-150 ease-linear hover:scale-110 hover:shadow-inner shadow-lg">
                                <GrLinkedinOption size={20}/>
                            </div>
                            <div className="bg-[#335DDF] p-3.5 rounded-2xl cursor-pointer transition-all duration-150 ease-linear hover:scale-110 hover:shadow-inner shadow-lg">
                                <FaFacebookF size={20}/>
                            </div>
                        </div>
                        <div className="relative mt-4">
                            <input type="text" className="w-full p-4 rounded-lg ring-1 ring-amber-500 border-none outline-none" value="https://demos.pishtaz-web.com/ostadsho/?p=143" />
                            <button className="absolute top-1.5 left-3 bg-zinc-100 p-3 rounded-full">
                                <AiOutlineLink className="font-bold" size={20}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
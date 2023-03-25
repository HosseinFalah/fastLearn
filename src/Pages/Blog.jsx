import { Link } from "react-router-dom"
import { Share } from "../Components"

const Blog = () => {
    return (
        <div className="container m-auto">
            <div className="space-y-6">
                <img 
                    src="/Assets/weblog_2.jpg" 
                    className="w-full h-96 object-cover rounded-2xl shadow-xl shadow-amber-200" 
                    alt="" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4">
                    <div className="col-span-2 space-y-10">
                        <div className="space-y-8">
                            <p className="text-zinc-400">12 آذر 1401</p>
                            <h1 className="text-2xl font-Lalezar text-zinc-700">بازاریابی حسی راهی ساده و کم هزینه برای افزایش فروش</h1>
                            <div className="flex gap-x-4">
                                <button className="bg-[#52ac661f] text-[#52ac66] transition-all duration-150 ease-linear hover:bg-[#52ac66] hover:text-white p-2 rounded-lg">آموزش های وردپرس</button>
                                <button className="bg-[#52ac661f] text-[#52ac66] transition-all duration-150 ease-linear hover:bg-[#52ac66] hover:text-white p-2 rounded-lg">شبکه و امنیت</button>
                                <button className="bg-[#52ac661f] text-[#52ac66] transition-all duration-150 ease-linear hover:bg-[#52ac66] hover:text-white p-2 rounded-lg">کسب و کار</button>
                            </div>
                        </div>
                        <div className="bg-[#f8f9fa] p-6 rounded-xl">
                            <p className="text-base text-zinc-600 mt-4 leading-10">شاید <strong>بازاریابی حسی</strong> به نظرتان سخت و پیچیده بیاید، ولی قطعا همۀ شما حداقل یکبار آن را از نزدیک دیده‌اید؛ فقط اسم آن را تا پیش از این نمی‌دانستید. زمانی که فروشنده در یک هایپر مارکت بزرگ، با دادن تکه‌ای از پنیر جدیدش به شما، به خرید آن علاقه‌مندتان می‌کند، یا وقتی فروشنده لباس با یک عطر خوش بو در فروشگاه، ذهن‌تان را برای خرید آماده‌ می‌کند. حتی زمانی که آهنگ ملایمی که در رستوران می‌شنویم…اینها همگی نمونه های زنده از بازاریابی حسی هستند.</p>
                            <p className="text-base text-zinc-600 mt-4 leading-10">البته بازاریابی حسی فقط در همین چند مورد خلاصه نمی‌شود و برای انجام آن باید اطلاعات کافی داشته باشیم. اگر آن را درست انجام دهید، <strong>خیلی راحت‌تر می‌توانید </strong><strong>مشتری را رام خودتان کنید تا از شما خرید کند</strong>. بازاریابی حسی هم مثل <strong>روانشناسی مشتری</strong>&nbsp;یکی از بحث‌های داغ و جذاب برای <strong>افزایش فروش</strong><strong>&nbsp;</strong> است. امروز در این بازار رقابتی، دیگر تبلیغات قدیمی پر زرق و برق به تنهایی جواب نمی‌دهد؛ باید راهی به قلب و ذهن مشتری پیدا کنید.</p>
                            <p className="text-base text-zinc-600 mt-4 leading-10">در این مقاله قصد داریم، بعد از یک تعریف کوتاه در مورد این مفهوم، تکنیک های واقعی <strong>بازاریابی حسی</strong> را در اختیارتان بگذاریم، تا با مطالعه آن، تغییرات جذابی در کسب‌وکار فیزیکی یا آنلاین‌تان به وجود بیاورید. همینطور در ادامه 3 نمونه واقعی از بازاریابی حسی از شرکت‌ها را به شما نشان می‌دهیم.</p>
                            <h2 className="text-xl text-zinc-700 font-semibold my-4">بازاریابی حسی چیست؟</h2>
                            <img loading="lazy" className="w-full h-auto object-cover rounded-xl" src="https://www.portal.ir/uploads/editor/61d208.jpg" alt="حواس 5 گانه در بازاریابی حسی"/>
                            <p className="text-base text-zinc-600 mt-4 leading-10">چند سال پیش “فیلیپ کاتلر” پیش بینی کرد؛ بازاریابی در آینده، بر خلاف امروز فقط روی <strong>“تجربه احساسی” </strong>مخاطبان تمرکز دارد. یعنی تصمیمات انسان‌ نه از روی منطق و تفکر، بلکه از روی احساسات گرفته می‌شود. سال ها بعد “خانم کریشنا” این تئوری و موضوع را کمی گسترش داد و با اضافه کردن 5 حس از جمله:</p>
                            <ul className="text-base text-zinc-600 my-4 leading-8 p-6 list-disc">
                                <li>بویایی</li>
                                <li>شنوایی</li>
                                <li>چشایی</li>
                                <li>بینایی</li>
                                <li>و لامسه</li>
                            </ul>
                            <p className="text-base text-zinc-600 mt-4 leading-10">نام آن را <strong>“بازاریابی حسی” </strong>گذاشت. او در این باره می‌گوید: «هر نوع تبلیغی که بتواند احساسات مشتری را تحریک و روی آن تأثیر بگذارد، یک بازاریابی حسی است.»</p>
                            <p className="text-base text-zinc-600 my-4 leading-10">به تعریف دیگر:</p>
                            <blockquote className="text-base text-zinc-600 mt-4 leading-10"><p>بازاریابی حسی فرآیندی است که در آن سعی می‌کنیم، روی یک یا چند حس مشتری تأثیر گذاشته تا احتمال خریدش را افزایش دهیم. همینطور این فعالیت‌ها می‌تواند با هدف‌های دیگری مثل <strong>رضایت بیشتر مخاطب</strong>، <strong>برندسازی</strong> و… انجام شود، که باز هم همگی در نهایت به همان فروش بیشتر منجر می‌شوند.</p></blockquote>
                            <p className="text-base text-zinc-600 my-4 leading-10">حالا ببینیم در عمل چطور باید بازاریابی حسی را انجام دهیم:</p>
                            <h2 className="text-xl text-zinc-700 font-semibold my-4">بازاریابی حسی را چطور انجام دهیم؟</h2>
                            <p className="text-base text-zinc-700 my-4 leading-10">جالب است بدانید، که تحقیقات در مورد بازاریابی حسی در یک هایپر مارکت نشان داد، <strong>صدای</strong><strong>&nbsp;پخش آهنگ روی سرعت خرید مشتریان تأثیر دارد!</strong> در یک تحقیق دیگر هم محققان توانستند، با به کارگیری مواردی مثل آهنگ و بوی خوش، فروش یک رستوران را تا 40 درصد افزایش دهند… البته این آمار به این معنی نیست که از فردا در فروشگاه خودتان یک ضبط صوت بزرگ قرار دهید و برای مشتریان آهنگ‌های کلاسیک پخش کنید. قصدم از بازگو کردن آنها فقط نشان دادن <strong>“اهمیت بازاریابی حسی”</strong> در ذهن شما بود. (امیدوارم به هدفم رسیده باشم!) خب به سراغ اولین تکنیک برویم:</p>
                            <h3 className="text-xl text-zinc-700 font-semibold my-4">1. به مخاطبان نزدیک شوید</h3>
                            <p className="text-base text-zinc-700 my-4 leading-10">کاری ندارم صاحب یک فروشگاه سوپر مارکت در حومه شهر هستید، یا یک سایت فروشگاهی بزرگ با فروش چند ده میلیونی در ماه، اگر می‌خواهید از بازاریابی حسی برای افزایش فروش استفاده کنید، باید به مخاطبان خودتان نزدیک شوید. فرد باید بعد از ورود به فروشگاه، با شما و برندتان احساس نزدیکی و صمیمت کند و هنگام خروج لبخند روی لب داشته باشد.</p>
                            <p className="text-base text-zinc-700 my-4 leading-10">در ضمن، برای ارتباط صمیمی با مشتری، حتما نیاز نیست از نزدیک او را ببینید؛ حتی در کسب و کارهای اینترنتی هم می‌توانید ارتباط خوبی برقرار کنید.</p>
                            <p className="text-base text-zinc-700 my-4 leading-10">این صمیمت از راه‌های مختلف ایجاد می‌شود؛ مثلا پیشنهاد محصول، طبق سلیقه و نظر او، که قبل از آن باید شناخت کافی از مشتری پیدا کرده باشید. یا اینکه دادن <strong>هدایای تبلیغاتی</strong> هرچند کوچک، <strong>تخفیف دهی</strong> به آن‌ها؛ یا برقراری ارتباط با مشتری از طریق شبکه‌های اجتماعی یا پیامک یا تلفن.</p>
                            <h3 className="text-xl text-zinc-700 font-semibold my-4">2. با حس بویایی مخاطب بازی کنید</h3>
                            <p className="text-base text-zinc-700 my-4 leading-10">استفاده از حس بویایی برای بازاریابی حسی یک تکنیک حساس و مهم است که باید با دقت بالا انجام شود. یک رایحه خوش که از چند متری فروشگاه‌‌تان به مشام مخاطب می‌رسد، تأثیر مناسبی روی ذهن او در مورد شما و برندتان و حتی افزایش فروش دارد. مثلا فروشگاه victoria secret سال‌هاست که از رایحه وانیل، استفاده می‌کند و این رایحه را به یکی از عنصرهای برندش تبدیل کرده است.</p>
                            <p className="text-base text-zinc-700 my-4 leading-10">یک نمونۀ دیگر آن، بوی خاص لباس‌های اسپورت آدیداس بود، که یکی از دلایل خرید خودم ب شخصه همین موضوع بود!</p>
                            <p className="text-base text-zinc-700 my-4 leading-10">متأسفانه استفاده از رایحه برای کسب‌و‌کار‌های اینترنتی قابل انجام نیست؛ اما می‌توانید یک رایحه برای هدایای تبلیغاتی خود که برای مشتری می‌فرستید، در نظر بگیرید. بعد از مدتی، مشتری متوجه تعلق این رایحه به برند شما می‌شود و در خاطرش می‌ماند.</p>
                            <h3 className="text-xl text-zinc-700 font-semibold my-4">3. از تأثیر صدا استفاده کنید</h3>
                            <p className="text-base text-zinc-700 my-4 leading-10">آهنگ‌های ملایم فقط برای پخش در کافی شاپ‌ها نیستند. حتی شما می‌توانید از یک لیست پخش موزیک در فروشگاه اینترنتی‌تان هم استفاده کنید. خیلی از مدیران وب‌سایت‌ها، از آهنگ در سایت خود برای افزایش احساس خوب مخاطب و در ادامه افزایش زمان ماندگاری آنها در سایت استفاده می‌کنند. البته این موضوع بسیاری از کاربران را ممکن است آزار دهد.</p>
                            <p className="text-base text-zinc-700 my-4 leading-10">یک بار دیگر پیشنهاد می‌کنم در انتخاب موزیک چه در کسب‌وکار آنلاین و چه فیزیکی، دقت لازم را به خرج بدهید و سلیقه مخاطبان را در نظر بگیرید. مثلا مشتریان یک فروشگاه لوازم اسپورت با مشتریان آثار هنری کاملا متفاوت است. حالا اگر جای این دو را عوض کنیم، چه حسی به مخاطب دست می‌دهد؟</p>
                            <h3 className="text-xl text-zinc-700 font-semibold my-4">4. روی حس لامسه سرمایه گذاری کنید</h3>
                            <p className="text-base text-zinc-700 my-4 leading-10">تاکنون با ورود به فروشگاه در ویترین این جمله را روی اجناس دیده‌اید: “لطفا دست نزنید!”</p>
                            <p className="text-base text-zinc-700 my-4 leading-10">دیدن این جمله چقدر حالتان را گرفته است و از خرید منصرف شده‌اید؟ جالب است انسان قبل از خرید، تمایل دارند محصول را هر چه که باشد، حتی یک مجسمه، لمس کنند. چون مشتری از نظر ذهنی به آرامش می‌رسد و ریسک ذهنی آن‌ها برای پرداخت پول را کاهش می‌دهد. بنابراین سعی کنید محصولاتی را به عنوان نمونه در دسترس مخاطب قرار دهید تا بتواند با آنها رابطه برقرار کرده و حتی احساس داشتنش را تجربه کند.</p>
                            <p className="text-base text-zinc-700 my-4 leading-10">البته اگر یک فروشگاه اینترنتی دارید شاید نتوانید به خوبی این موضوع را قبل از خرید رعایت کنید، اما با ارسال بسته بندی محکم، کارت ویزیت ضخیم و نرم و… می‌توانید باعث ایجاد احساس بهتر به برندتان از طریق حس لامسه شوید.</p>
                            <h3 className="text-xl text-zinc-700 font-semibold my-4">5. حس بینایی را دست کم نگیرید</h3>
                            <p className="text-base text-zinc-700 my-4 leading-10">شاید با مطالعه 4 تکنیک بالا، تصور کنید حس بینایی در بازاریابی حسی بی ارزش است! در حالی که بینایی یکی از قدرتمندترین حواس 5 گانه است و با بی‌توجهی به آن می‌توانید به خوبی تمامی زحمات‌تان در مورد این نوع بازاریابی را به باد بدهید. یادتان باشد هنوز هم مخاطب بیشتر از آنکه با بوی رایحه خوش ترغیب به ورود به فروشگاه شود، به ظاهر و ویترین آن توجه می‌کند. مثلا یک بسته بندی جذاب می‌تواند، مشتری را ترغیب به خرید کند.</p>
                            <p className="text-base text-zinc-700 my-4 leading-10">علاوه بر فروشگاه فیزیکی، ظاهر در فروشگاه‌های اینترنتی هم اهمیت بالایی دارد. مثلا در کسب‌و‌کارهای طراحی سایت و سایت‌سازها که زمینه فعالیت کاری شرکت ما هم هست، زیبایی سایتی که قرار است خدمات طراحی را ارائه کند، برای مشتریان بسیار اهمیت دارد.</p>
                            <p className="text-base text-zinc-700 my-4 leading-10">همین موضوع باعث شده که ما میلیون‌ها تومان صرفا برای طراحی رابط کاربری (حس بینایی) سایت‌مان هزینه کنیم و مطمئن شویم که همه چیز در اینجا همانطوری است که مخاطب می‌خواهد و حتی بیشتر از آن.</p>
                            <p className="text-base text-zinc-700 my-4 leading-10">بعد از آن هم این استانداردهای طراحی حرفه‌ای را روی سیستم‌های سایت ساز و فروشگاهی پرتال پیاده کردیم تا مشتریان ما بتوانند از همان روز اول با قدرت تمام و با سایتی حرفه‌ای شروع به فعالیت کنند. می‌توانید به نمونه <strong>قالب‌های پرتال </strong>نگاهی بیندازید.</p>
                            <p className="text-base text-zinc-700 my-4 leading-10">خب تا اینجا در مورد مفهوم کلی و برخی از جزئیات بازاریابی حسی اطلاعات مفیدی دریافت کردیم. بد نیست مثال‌هایی واقعی بزنیم تا کامل متوجه موضوع شوید:</p>
                            <h2 className="text-xl text-zinc-700 font-semibold my-4">نمونه‌های واقعی بازاریابی حسی</h2>
                            <p className="text-base text-zinc-700 my-4 leading-10">همانطور که در ابتدای مقاله هم گفتم، قرار است در ادامه در مورد کسب‌و‌کارهای بزرگی که در حال حاضر از بازاریابی حسی استفاده می‌کنند، صحبت کنم. با مطالعه ادامه این مطلب متوجه می‌شوید قدرت بازاریابی حسی چقدر زیاد است که حتی باعث شده این غول‌های قدرتمند هم از آن برای افزایش سود و بهبود تجربه کاربران‌شان استفاده کنند. همراه من باشید:</p>
                            <h3 className="text-xl text-zinc-700 font-semibold my-4">استفاده از بازاریابی حسی توسط اپل</h3>
                            <img loading="lazy" className="max-w-full h-auto object-cover rounded-xl" src="https://www.portal.ir/uploads/editor/1bf374.jpg" alt="انجام بازاریابی حسی در اپل" />
                            <p className="text-base text-zinc-700 my-4 leading-10">تصویر بالا را ببینید، چه چیزی در آن نظر شما را جلب می‌کند؟ در این فروشگاهِ اپل، تمامی محصولات روی میز قرار گرفته است، تا کاربران بعد از ورود به مغازه، بتوانند به راحتی با آنها کار و از نزدیک این موضوع را تجربه کنند. البته علاوه بر این موضوع که پیاده سازی بازاریابی حسی از نوع “لامسه” است، به حس بینایی هم در این فروشگاه بسیار توجه شده است. همانطور که می‌بینید حتی مشاهده این فضا با ترکیب رنگی جالبش از روی عکس هم زیبا و دلپذیر است.</p>
                            <p className="text-base text-zinc-700 my-4 leading-10">راستی این موضوع را در نمانیدگی‌های تلفن همراه یا محصولات دیجیتال در کشور خودمان هم می‌بینیم. مانند نمایندگی سامسونگ که نمونه‌هایی از جدیدترین گوشی‌ها را روی میز برای استفاده از مشتریان قرار داده است.</p>
                            <h3 className="text-xl text-zinc-700 font-semibold my-4">بازاریابی حسی در کافه‌های استارباکس</h3>
                            <img loading="lazy" className="max-w-full h-auto object-cover rounded-xl" src="https://www.portal.ir/uploads/editor/6df860.jpg" alt=""/>
                            <p className="text-base text-zinc-700 my-4 leading-10">استارباکس در سالن سرو قهوه خود تماما به بازاریابی حسی توجه کرده است. از بوی لذت بخش قهوه تازه، تا موزیک ملایم و احساس لمس بسته بندی‌های جذاب محصولاتش.</p>
                            <p className="text-base text-zinc-700 my-4 leading-10">طبق اطلاعاتی که وجود دارد، حتی موزیک‌هایی که قرار است در یک شعبه استارباکس پخش شود، از طریق دفتر اصلی برای آنها ارسال می‌شود، این یعنی موزیک‌هایی هم که در استارباکس می‌شنوید، از پیش برنامه ریزی شده است.</p>
                            <p className="text-base text-zinc-700 my-4 leading-10">علاوه بر اینها، طراحی فضای سالن‌های شعب استارباکس کاملا خصوصی سازی شده و با استفاده از کاغذ دیواری‌های مخصوص انجام می‌شود. در نهایت بگویم؛ بعد از سفارش قهوه در استارباکس قرار نیست فقط یک قهوه بخورید…</p>
                            <h3 className="text-xl text-zinc-700 font-semibold my-4">بازاریابی حسی در دانکین دونات (Dunkin Donuts)</h3>
                            <img loading="lazy" className="max-w-full h-auto object-cover rounded-xl" src="https://www.portal.ir/uploads/editor/423c02.jpg" alt=""/>
                            <p className="text-base text-zinc-700 my-4 leading-10">دانکین دونات هم یکی از برندهای موفقی است که به تازگی تمرکز زیادی روی پیاده سازی بازاریابی حسی گذاشته است. همانطور که در تصویر بالا هم می‌بینید، بسته‌بندی و رنگ‌بندی زیبای این برند در محصولات غذایی و نوشیدنی‌شان می‌توانند ذهن شما را به خود جلب کند. همینطور به تازگی مدیران این برند به سمت استفاده از حس بویایی و تحقیق روی آن کشیده شده‌اند.</p>
                            <p className="text-base text-zinc-700 my-4 leading-10">به عنوان مثال در یکی از تحقیقات‌شان در کره جنوبی، در اتوبوس‌های مسافربری زمانی که آهنگ Dunkin Donuts از رادیو منتشر می‌شد، به طور برنامه ریزی شده، رایحه‌ای از محصولات‌شان هم در فضای اتوبوس پخش می‌شد، این موضوع باعث شد فروش برند آنها در این منطقه 29 درصد افزایش پیدا کند!</p>
                            <p className="text-base text-zinc-700 my-4 leading-10">همۀ این‌ها شاید به ظاهر موضوعات ریزی باشد، ولی اگر نتیجه بخش نبود قطعا انجامش نمی‌دادند!</p>
                            <h3 className="text-xl text-zinc-700 font-semibold my-4">کلام آخر…</h3>
                            <p className="text-base text-zinc-700 my-4 leading-10">در نهایت اگر قصد استفاده از بازاریابی حسی در کسب‌و‌کارتان را دارید، مراحل زیر می‌تواند در انجام آن به شما کمک کند:</p>
                            <ul className="text-base text-zinc-700 my-4 leading-8 list-disc">
                                <li><strong>برندتان را بشناسید:</strong> تا خودتان را نشناسید، چگونه می‌خواهید نسبت به مشتری شناخت پیدا کنید؟ چرا می‌گویم شناخت برند؟ که بر اساس آن، بهترین رنگ، عطر و برنامه را برای بازاریابی حسی ایجاد کنید. مثلا برنامه برند نایکی با برند هاکوپیان متفاوت است.</li>
                                <li><strong>مخاطبتان را شناسایی کنید:</strong> مطمئنا نمی‌توانیم برای حس نزدیکی با یک مخاطب 50 ساله، به عنوان هدیه تبلیغاتی، تی شرت رنگی عروسکی ارسال کنید. در مقابل اگر آن‌ها را خوب بشناسید و علایقش را بدانید، ارتباط حسی بهتری با او برقرار می‌کنید.</li>
                                <li><strong>با طراحان همکاری کنید:</strong> اگر در بازار سنتی کار می‌کنید، طراحان دکوراسیون و اگر کسب‌وکارتان بر بستر آنلاین است، طراحان سایت بهترین انتخاب برای این هستند که بازاریابی حسی از نوع بینایی را در مجموعه‌تان اجرا کنند.</li>
                                <li><strong>یک موزیک، تم و رایحه مناسب انتخاب کنید:</strong> بعد از اینکه برند خودتان و مخاطب را شناختید برای انتخاب یک موزیک، تم و رایحه مناسب دست به کار شوید.</li>
                            </ul>
                            <div className="bg-white rounded-2xl p-4 flex items-center gap-x-3">
                                <p className="text-lg text-zinc-700">#برچسب:</p>
                                <div className="flex gap-x-4">
                                    <Link to={`/`} className="bg-[#52ac661f] text-sm text-[#52ac66] border-dashed border-2 border-[#52ac66] rounded-xl px-2 py-1 transition-all duration-150 ease-linear hover:bg-[#52ac66] hover:text-white">افزایش فروش</Link>
                                    <Link to={`/`} className="bg-[#52ac661f] text-sm text-[#52ac66] border-dashed border-2 border-[#52ac66] rounded-xl px-2 py-1 transition-all duration-150 ease-linear hover:bg-[#52ac66] hover:text-white">بازاریابی</Link>
                                    <Link to={`/`} className="bg-[#52ac661f] text-sm text-[#52ac66] border-dashed border-2 border-[#52ac66] rounded-xl px-2 py-1 transition-all duration-150 ease-linear hover:bg-[#52ac66] hover:text-white">کسب در امد</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#f8f9fa] p-6 border border-neutral-200 rounded-xl space-y-4">
                            <h5 className="text-zinc-500">دیدگاهتان را بنویسید</h5>
                            <form className="space-y-6" autoComplete="off">
                                <div className="flex flex-col space-y-4">
                                    <label htmlFor="content" className="text-zinc-500">دیدگاه *</label>
                                    <textarea name="content" id="content" className="rounded-xl outline-none p-3 transition-all duration-150 ease-linear focus:ring-2 focus:ring-neutral-200" cols="30" rows="10"></textarea>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                                    <div className="flex flex-col space-y-4">
                                        <label htmlFor="username" className="text-zinc-500">نام *</label>
                                        <input type="text" id="username" className="p-3 w-full rounded-xl outline-none transition-all duration-150 ease-linear focus:ring-2 focus:ring-neutral-200" />
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <label htmlFor="email" className="text-zinc-500">ایمیل *</label>
                                        <input type="email" id="email" className="p-3 w-full rounded-xl outline-none transition-all duration-150 ease-linear focus:ring-2 focus:ring-neutral-200" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <input type="checkbox" id="checked" />
                                    <label htmlFor="checked" className="text-sm text-zinc-600">ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی می‌نویسم.</label>
                                </div>
                                <button className="bg-[#52ac66] text-white p-3 rounded-xl transition-all duration-150 ease-linear hover:shadow-lg drop-shadow-xl">فرستادن دیدگاه</button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <Share/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
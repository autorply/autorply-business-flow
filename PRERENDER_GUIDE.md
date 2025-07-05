
# دليل Vite Pre-rendering

## ما هو Pre-rendering؟

Pre-rendering هو عملية إنشاء ملفات HTML ثابتة لكل صفحة في التطبيق أثناء وقت البناء، مما يحسن من SEO وسرعة التحميل الأولي.

## الفوائد

### 1. تحسين SEO
- محركات البحث تستطيع قراءة المحتوى مباشرة
- Meta tags محملة في HTML الثابت
- Structured data متاح فوراً

### 2. سرعة التحميل
- المحتوى الأساسي يظهر فوراً
- تحسين First Contentful Paint (FCP)
- تقليل Time to Interactive (TTI)

### 3. تجربة المستخدم
- تحميل فوري للمحتوى
- لا انتظار لـ JavaScript loading
- عمل أفضل على الشبكات البطيئة

## كيف يعمل

### 1. Build Time
```bash
npm run build
```
- Vite يبني التطبيق عادياً
- vite-plugin-prerender-spa يشغل Puppeteer
- يزور كل route ويحفظ HTML النهائي
- ينشئ ملف HTML منفصل لكل صفحة

### 2. Runtime
```
/dist/
├── index.html          # الصفحة الرئيسية
├── services/index.html # صفحة الخدمات  
├── pricing/index.html  # صفحة الأسعار
├── about-us/index.html # صفحة من نحن
└── ...                 # باقي الصفحات
```

### 3. Hydration
- المتصفح يحمل HTML المُعرَّض مسبقاً
- React يقوم بـ hydration للتفاعلية
- التطبيق يصبح SPA كامل الوظائف

## إعداد السيرفر

### Apache (.htaccess)
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^/]+)/?$ /$1/index.html [L]
RewriteRule . /index.html [L]
```

### Nginx
```nginx
location / {
    try_files $uri $uri/index.html $uri/ /index.html;
}
```

### Node.js/Express
```javascript
app.use(express.static('dist'));
app.get('*', (req, res) => {
  const route = req.path.substring(1);
  const filePath = path.join(__dirname, 'dist', route, 'index.html');
  
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  }
});
```

## التحقق من العمل

### 1. بعد البناء
```bash
ls dist/
# يجب أن ترى مجلدات لكل route
# كل مجلد يحتوي على index.html
```

### 2. فحص المحتوى
```bash
cat dist/services/index.html
# يجب أن ترى المحتوى الكامل للصفحة
# مع meta tags وstructured data
```

### 3. اختبار SEO
- استخدم Google PageSpeed Insights
- فحص البيانات المنظمة مع Google Rich Results Test
- تحقق من meta tags مع Facebook Debugger

## استكشاف الأخطاء

### خطأ في Puppeteer
```bash
# تثبيت Chrome إذا لم يكن موجود
sudo apt-get install chromium-browser
# أو
brew install chromium
```

### مشاكل Memory
```javascript
// في vite.config.ts
rendererOptions: {
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage']
}
```

### Routes لا تعمل
- تأكد أن السيرفر معد للـ fallback إلى HTML المناسب
- فحص إعدادات routing في السيرفر

## مراقبة الأداء

### Core Web Vitals
- First Contentful Paint (FCP): < 2.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

### SEO Metrics
- Google Search Console
- Ahrefs/SEMrush crawling
- Meta tags validation

## الخلاصة

Pre-rendering يحول تطبيق SPA إلى hybrid بين Static Sites و SPAs:
- SEO ممتاز مثل Static Sites
- تفاعلية كاملة مثل SPAs
- أداء محسن للتحميل الأولي

المشروع الآن جاهز لتقديم تجربة محسنة للمستخدمين ومحركات البحث!

# Server Setup Guide (Production)

هذا الدليل يوضح أفضل الممارسات لضبط الخادم لخدمة موقعك المبني بـ Vite + React مع الصفحات المولدة مسبقًا (prerendered)، لضمان فهرسة ممتازة وأداء عالٍ.

القيم المرجعية:
- النطاق الكنسي: https://autorply.sa
- مجلد البناء: dist
- ملفات السيو: sitemap.xml و robots.txt (تُنشأ تلقائيًا في build)

1) قواعد عامة
- قدّم ملفات HTML من dist كما هي (بدون استبدال ديناميكي)، وتأكّد من إرسال Cache-Control مناسب.
- فعّل ضغط Brotli ثم Gzip كبديل. تجنّب الاعتماد على zstd فقط.
- لا تُرسل X-Robots-Tag: noindex على HTML أو sitemap/robots.
- وحّد النطاق عبر إعادة توجيه 301 إلى https://autorply.sa (مع www- إلى non-www إن رغبت).
- HTML: Cache-Control: no-cache, must-revalidate (أو max-age=0) لتحديثات سريعة.
- الأصول الثابتة (CSS/JS/صور): Cache-Control: public, max-age=31536000, immutable.

2) Nginx مثال إعداد

server {
  listen 80;
  server_name autorply.sa www.autorply.sa;
  return 301 https://autorply.sa$request_uri;
}

server {
  listen 443 ssl http2;
  server_name autorply.sa;

  # SSL configuration هنا (شهادات، سلاسل، إلخ)

  root /var/www/autorply/dist;
  index index.html;

  # Gzip
  gzip on;
  gzip_types text/plain text/css application/javascript application/json image/svg+xml;
  gzip_min_length 1024;

  # Brotli (يتطلب ngx_brotli)
  brotli on;
  brotli_comp_level 6;
  brotli_types text/plain text/css application/javascript application/json image/svg+xml;

  # HTML: لا يُخزن طويلًا
  location ~* \.html$ {
    add_header Cache-Control "no-cache, must-revalidate";
    try_files $uri $uri/ /index.html;
  }

  # أصول ثابتة قابلة للتجزئة
  location ~* \.(?:js|css|woff2?|ttf|otf|eot|svg)$ {
    add_header Cache-Control "public, max-age=31536000, immutable";
    try_files $uri =404;
  }

  # صور
  location ~* \.(?:png|jpe?g|webp|gif|ico)$ {
    add_header Cache-Control "public, max-age=31536000, immutable";
    try_files $uri =404;
  }

  # sitemap و robots
  location = /sitemap.xml { try_files $uri =404; }
  location = /robots.txt  { try_files $uri =404; }

  # باقي المسارات (SPA fallback) مع عدم كسر prerender
  location / {
    try_files $uri $uri/ /index.html;
  }

  # أمان اختياري
  add_header X-Content-Type-Options nosniff;
  add_header Referrer-Policy strict-origin-when-cross-origin;
  add_header X-Frame-Options SAMEORIGIN;
}

3) Apache (.htaccess) مثال

<IfModule mod_rewrite.c>
  RewriteEngine On
  # Canonical HTTPS + non-www
  RewriteCond %{HTTPS} !=on [OR]
  RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
  RewriteRule ^ https://autorply.sa%{REQUEST_URI} [L,R=301]
</IfModule>

# HTML no-cache
<FilesMatch "\.html$">
  <IfModule mod_headers.c>
    Header set Cache-Control "no-cache, must-revalidate"
  </IfModule>
</FilesMatch>

# Static assets immutable cache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType application/javascript  "access plus 1 year"
  ExpiresByType text/css                "access plus 1 year"
  ExpiresByType image/svg+xml           "access plus 1 year"
  ExpiresByType image/webp              "access plus 1 year"
  ExpiresByType image/png               "access plus 1 year"
  ExpiresByType image/jpeg              "access plus 1 year"
</IfModule>

<IfModule mod_headers.c>
  <FilesMatch "\.(js|css|svg|png|jpe?g|webp|woff2?)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
</IfModule>

# SPA fallback لا يُفسد prerender (ملفات موجودة تُخدم مباشرة)
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# ضغط
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/plain text/css application/javascript application/json image/svg+xml
</IfModule>

4) Cloudflare (أو CDN)
- Page Rules/Redirects: أعد التوجيه 301 إلى https://autorply.sa.
- Caching: Edge cache طويلة للأصول (30-365 يومًا) و"Bypass cache" للـ HTML.
- Auto Minify/Compression: شغّل Brotli.
- Security Headers: أضف عبر Transform Rules أو الخادم الأصل.

5) أخطاء 404/410
- تأكّد أن مسارات غير موجودة تُعيد 404 حقيقية، وليس 200 مع index.html. في Nginx استخدم try_files $uri =404 للأصول. لصفحات SPA العامة، fallback إلى index.html مقبول، لكن للسيو يُفضّل صفحات 404 ثابتة.

6) التحقق بعد النشر (Checklist)
- curl -I https://autorply.sa | تحقق من 200 و cache-control المناسب وغياب X-Robots-Tag: noindex.
- curl -I https://autorply.sa/sitemap.xml و robots.txt => يجب 200.
- View-Source لصفحات الموارد: يجب رؤية HTML كامل (prerender) مع وسم <title> و meta.
- فحص Google Rich Results (إن وُجد structured data) وURL Inspection في Search Console.
- تحقق من التحويلات 301 من http و www إلى النطاق الكنسي.

7) نشر التحديثات
- شغّل: npm run build
- انقل مجلد dist إلى الخادم.
- امسح كاش CDN إن لزم.

ملاحظات
- لا تُضيف أي رؤوس noindex/noarchive على مستوى الخادم.
- تأكّد من timeouts المعقولة عند استخدام Proxy/CDN أثناء الزحف.

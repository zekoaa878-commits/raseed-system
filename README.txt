
# نظام رصيد - جاهز للتثبيت

## 1. تغيير اسم الشركة (قابل للتغير)
افتح ملف company.config.json وغير:
{
  "companyName": "اكتب اسم شركتك هنا",
  "companyNameEn": "Your Company English",
  "primaryColor": "#DC2626"
}
الاسم هيتغير تلقائيا في كل مكان: البرنامج، الموبايل، الفواتير.

## 2. تثبيت فوري بدون برمجة (PWA)
- افتح الملف business-system-v2.html في المتصفح
- من الموبايل: دوس مشاركة > Add to Home Screen
- من الكمبيوتر: دوس علامة التثبيت في شريط العنوان

## 3. بناء نسخة كمبيوتر EXE
npm install
npm run build
npm run build:win  -> ينتج ملف setup.exe في dist/

## 4. بناء تطبيق موبايل APK
npm run cap:android -> يفتح Android Studio -> Build > Generate APK

## 5. ربط قاعدة البيانات السحابية (للمزامنة)
- اعمل حساب مجاني supabase.com
- انسخ supabase-schema.sql وشغله
- ضع رابط Supabase في ملف .env

كل الأجهزة (كمبيوتر + موبايل) ستتزامن لحظيا.

للدعم: تواصل معي وسأبني لك الملفات النهائية.

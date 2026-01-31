import PageLayout from '../components/layout/PageLayout';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedLinks from '../components/RelatedLinks';
import Footer from '../components/Footer';
import FAQStructuredData from '../components/seo/FAQStructuredData';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, BarChart3, Settings, Users, Clock, Shield, Headphones, Check, X, Building2, ShoppingCart, Stethoscope, GraduationCap, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const services = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'واتساب الأعمال API',
    description: 'اتصال مباشر وآمن مع WhatsApp Business API للتواصل المهني مع عملائك',
    features: ['إرسال رسائل جماعية', 'تأكيدات الاستلام', 'رسائل الوسائط المتعددة', 'رسائل القوالب المعتمدة']
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'الردود الآلية الذكية',
    description: 'نظام ردود آلي متطور يتفاعل مع عملائك على مدار الساعة بذكاء اصطناعي',
    features: ['ردود فورية', 'تعلم آلي', 'تخصيص الردود', 'تحويل للفريق البشري']
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'التقارير والتحليلات',
    description: 'تقارير مفصلة ومؤشرات أداء شاملة لقياس نجاح حملاتك التسويقية',
    features: ['إحصائيات مفصلة', 'تتبع المحادثات', 'معدلات الاستجابة', 'تحليل العملاء']
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'التكاملات المتقدمة',
    description: 'ربط سلس مع أنظمة CRM وأدوات الأعمال المختلفة لتجربة متكاملة',
    features: ['تكامل CRM', 'ربط المتاجر الإلكترونية', 'أنظمة الدفع', 'إدارة المواعيد']
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'إدارة فرق العمل',
    description: 'توزيع المحادثات على فريق العمل مع صلاحيات وإدارة متقدمة',
    features: ['توزيع المحادثات', 'صلاحيات المستخدمين', 'مراقبة الأداء', 'تقييم الموظفين']
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'جدولة الرسائل',
    description: 'إرسال رسائل مجدولة في الأوقات المناسبة لضمان أقصى تأثير',
    features: ['جدولة متقدمة', 'تحديد المناطق الزمنية', 'إرسال دوري', 'تحسين التوقيت']
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'الأمان والخصوصية',
    description: 'حماية عالية المستوى لبيانات عملائك مع التشفير الكامل',
    features: ['تشفير البيانات', 'أمان المحادثات', 'النسخ الاحتياطي', 'حماية من الاختراق']
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: 'الدعم الفني المتميز',
    description: 'فريق دعم فني متخصص متاح على مدار الساعة لمساعدتك',
    features: ['دعم 24/7', 'استشارات مجانية', 'تدريب الفرق', 'صيانة دورية']
  }
];

// FAQs specific to WhatsApp API (different from /faq page)
const whatsappApiFaqs = [
  {
    question: 'ما هو الفرق بين WhatsApp Business API و WhatsApp Cloud API؟',
    answer: 'WhatsApp Business API هو الحل الأصلي الذي يتطلب استضافة على خوادم خاصة، بينما WhatsApp Cloud API هو النسخة السحابية المستضافة من Meta مباشرة. كلاهما يوفر نفس الوظائف الأساسية، لكن Cloud API أسهل في الإعداد ولا يحتاج إلى بنية تحتية خاصة.'
  },
  {
    question: 'كم تبلغ تكلفة الرسائل عبر WhatsApp API؟',
    answer: 'تعتمد تكلفة الرسائل على نوع المحادثة والمنطقة الجغرافية. هناك محادثات يبدأها المستخدم (User-initiated) ومحادثات يبدأها النشاط التجاري (Business-initiated). المحادثات التي يبدأها المستخدم تكون أقل تكلفة. يتم احتساب التكلفة لكل محادثة (24 ساعة) وليس لكل رسالة.'
  },
  {
    question: 'هل يمكن إرسال رسائل تسويقية عبر WhatsApp API؟',
    answer: 'نعم، يمكن إرسال رسائل تسويقية لكن يجب استخدام قوالب رسائل معتمدة من Meta واحترام قواعد الموافقة (opt-in). الرسائل التسويقية تندرج تحت فئة Marketing وتخضع لتسعير مختلف عن رسائل خدمة العملاء.'
  },
  {
    question: 'ما هي قوالب الرسائل (Message Templates)؟',
    answer: 'قوالب الرسائل هي رسائل معتمدة مسبقاً من Meta تستخدم للتواصل مع العملاء خارج نافذة الـ 24 ساعة. يجب تقديم القوالب للمراجعة والموافقة قبل استخدامها. تشمل القوالب: تأكيدات الطلبات، تذكيرات المواعيد، تحديثات الشحن، والعروض الترويجية.'
  },
  {
    question: 'ما هي نافذة خدمة العملاء (Customer Service Window)؟',
    answer: 'نافذة خدمة العملاء هي فترة 24 ساعة تبدأ عند إرسال العميل لأي رسالة. خلال هذه النافذة، يمكن للنشاط التجاري الرد برسائل حرة (Free-form messages) دون الحاجة لاستخدام قوالب معتمدة. بعد انتهاء الـ 24 ساعة، يجب استخدام قوالب الرسائل فقط.'
  },
  {
    question: 'هل يدعم WhatsApp API الوسائط المتعددة؟',
    answer: 'نعم، يدعم WhatsApp API إرسال واستقبال أنواع متعددة من الوسائط تشمل: الصور، الفيديو، الملفات الصوتية، المستندات (PDF, DOC)، الموقع الجغرافي، وجهات الاتصال. هناك حدود لحجم الملفات تختلف حسب نوع الوسائط.'
  }
];

const WhatsAppAPI = () => {
  return (
    <PageLayout 
      structuredDataType="Service"
      customMetaTags={{
        title: 'WhatsApp Business API في السعودية - دليل شامل | اوتوربلاي',
        description: 'دليلك الشامل لـ WhatsApp Business API في السعودية. تعرف على الفرق بين واتساب العادي و API، متطلبات التفعيل، وكيفية الاستفادة منه لتطوير أعمالك.',
        keywords: 'WhatsApp API, واتساب API, WhatsApp Business API السعودية, تفعيل واتساب API, واتساب للأعمال, WhatsApp Cloud API',
        url: 'https://autorply.sa/whatsapp-api'
      }}
    >
      <div className="min-h-screen bg-white text-gray-800" dir="rtl" lang="ar">
        <FAQStructuredData faqs={whatsappApiFaqs} />
        <Header />
        <Breadcrumbs />
        
        <main className="pt-20">
          {/* Hero Section - Existing Design */}
          <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-green-50">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">WhatsApp Business API</span> في السعودية
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                نقدم مجموعة شاملة من <Link to="/campaign" className="text-blue-600 hover:text-blue-800 font-medium">الحلول التسويقية</Link> و
                <Link to="/technology" className="text-blue-600 hover:text-blue-800 font-medium"> التقنيات المتقدمة</Link> 
                لتعزيز تواصلك مع العملاء وتطوير أعمالك
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/pricing" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  اطلع على الأسعار
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-3 rounded-lg font-medium border border-blue-600 transition-colors"
                >
                  احصل على استشارة مجانية
                </Link>
              </div>
            </motion.div>
          </section>

          {/* NEW SEO Section 1: What is WhatsApp Business API */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">ما هي WhatsApp Business API؟</h2>
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                  <p>
                    <strong>WhatsApp Business API</strong> (واجهة برمجة التطبيقات لواتساب الأعمال) هي منصة تقنية طورتها شركة Meta للشركات المتوسطة والكبيرة التي تحتاج إلى التواصل مع عملائها على نطاق واسع. على عكس تطبيق WhatsApp Business المجاني المخصص للشركات الصغيرة، توفر الـ API إمكانيات متقدمة للأتمتة والتكامل مع الأنظمة الأخرى.
                  </p>
                  <p>
                    تتيح هذه الواجهة البرمجية للشركات إرسال واستقبال الرسائل بشكل آلي، ودمج واتساب مع أنظمة إدارة علاقات العملاء (CRM)، ومنصات التجارة الإلكترونية، وأنظمة الدعم الفني. كما تدعم تعدد المستخدمين، مما يسمح لفرق العمل بالرد على استفسارات العملاء من حساب واتساب واحد.
                  </p>
                  <p>
                    للوصول إلى WhatsApp Business API، تحتاج الشركات للعمل مع <strong>مزود حلول أعمال (BSP)</strong> معتمد من Meta مثل اوتوربلاي، أو استخدام WhatsApp Cloud API المستضاف مباشرة من Meta.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* NEW SEO Section 2: Comparison Table */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">الفرق بين WhatsApp Business و WhatsApp API</h2>
                <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                  يخلط الكثيرون بين تطبيق واتساب للأعمال المجاني و واجهة برمجة التطبيقات (API). الجدول التالي يوضح الفروقات الأساسية بينهما:
                </p>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-blue-50">
                        <TableHead className="text-right font-bold text-gray-900">الميزة</TableHead>
                        <TableHead className="text-center font-bold text-gray-900">WhatsApp Business App</TableHead>
                        <TableHead className="text-center font-bold text-gray-900">WhatsApp Business API</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">التكلفة</TableCell>
                        <TableCell className="text-center">مجاني</TableCell>
                        <TableCell className="text-center">رسوم لكل محادثة</TableCell>
                      </TableRow>
                      <TableRow className="bg-gray-50">
                        <TableCell className="font-medium">عدد المستخدمين</TableCell>
                        <TableCell className="text-center">1-5 أجهزة</TableCell>
                        <TableCell className="text-center">غير محدود</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">الأتمتة والبوتات</TableCell>
                        <TableCell className="text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></TableCell>
                        <TableCell className="text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></TableCell>
                      </TableRow>
                      <TableRow className="bg-gray-50">
                        <TableCell className="font-medium">التكامل مع CRM</TableCell>
                        <TableCell className="text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></TableCell>
                        <TableCell className="text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">الرسائل الجماعية</TableCell>
                        <TableCell className="text-center">256 جهة اتصال (بث)</TableCell>
                        <TableCell className="text-center">غير محدودة</TableCell>
                      </TableRow>
                      <TableRow className="bg-gray-50">
                        <TableCell className="font-medium">العلامة الخضراء (التحقق)</TableCell>
                        <TableCell className="text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></TableCell>
                        <TableCell className="text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">قوالب الرسائل المعتمدة</TableCell>
                        <TableCell className="text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></TableCell>
                        <TableCell className="text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></TableCell>
                      </TableRow>
                      <TableRow className="bg-gray-50">
                        <TableCell className="font-medium">التقارير والتحليلات</TableCell>
                        <TableCell className="text-center">أساسية</TableCell>
                        <TableCell className="text-center">متقدمة</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">الأنسب لـ</TableCell>
                        <TableCell className="text-center">الشركات الصغيرة</TableCell>
                        <TableCell className="text-center">الشركات المتوسطة والكبيرة</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </motion.div>
            </div>
          </section>

          {/* NEW SEO Section 3: When Do You Need WhatsApp API */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">متى تحتاج WhatsApp API لنشاطك التجاري؟</h2>
                <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
                  WhatsApp API ليس للجميع. إليك أبرز الحالات التي يصبح فيها الانتقال إلى API ضرورة:
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <ShoppingCart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">المتاجر الإلكترونية</h3>
                    <p className="text-gray-600 text-sm">
                      إرسال تأكيدات الطلبات، تحديثات الشحن، واستعادة السلات المتروكة تلقائياً.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">الشركات الخدمية</h3>
                    <p className="text-gray-600 text-sm">
                      جدولة المواعيد، إرسال التذكيرات، وإدارة محادثات العملاء عبر فريق متعدد.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <Stethoscope className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">القطاع الصحي</h3>
                    <p className="text-gray-600 text-sm">
                      تذكيرات المواعيد، نتائج الفحوصات، ومتابعة المرضى بشكل آمن ومشفر.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">القطاع التعليمي</h3>
                    <p className="text-gray-600 text-sm">
                      إشعارات للطلاب وأولياء الأمور، تحديثات الجداول، ونتائج الامتحانات.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 border border-cyan-200">
                    <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                      <Plane className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">السفر والسياحة</h3>
                    <p className="text-gray-600 text-sm">
                      تأكيدات الحجوزات، بطاقات الصعود، وتحديثات رحلات الطيران الفورية.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border border-pink-200">
                    <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">خدمة العملاء</h3>
                    <p className="text-gray-600 text-sm">
                      أي شركة تتعامل مع أكثر من 100 محادثة يومياً وتحتاج لفريق متعدد.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* NEW SEO Section 4: How to Activate WhatsApp API in Saudi Arabia */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">كيف يتم تفعيل WhatsApp API في السعودية؟</h2>
                <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
                  عملية تفعيل WhatsApp Business API تتطلب عدة خطوات ومتطلبات. إليك نظرة عامة على المراحل الأساسية:
                </p>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-md border-r-4 border-blue-600">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">إعداد حساب Meta Business</h3>
                        <p className="text-gray-600">
                          إنشاء حساب على Meta Business Suite وتوثيق النشاط التجاري من خلال تقديم المستندات الرسمية مثل السجل التجاري.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-md border-r-4 border-blue-600">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">اختيار مزود الخدمة (BSP)</h3>
                        <p className="text-gray-600">
                          التعاقد مع مزود حلول أعمال معتمد من Meta مثل اوتوربلاي، أو استخدام WhatsApp Cloud API مباشرة.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-md border-r-4 border-blue-600">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">تسجيل رقم الهاتف</h3>
                        <p className="text-gray-600">
                          تخصيص رقم هاتف للـ API. يمكن استخدام رقم جديد أو نقل رقم موجود (مع مراعاة أنه سيتم فصله عن التطبيق العادي).
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-md border-r-4 border-blue-600">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">إعداد قوالب الرسائل</h3>
                        <p className="text-gray-600">
                          تصميم وتقديم قوالب الرسائل للمراجعة من Meta. يستغرق الاعتماد عادة من ساعات إلى أيام قليلة.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-md border-r-4 border-blue-600">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">التكامل والإطلاق</h3>
                        <p className="text-gray-600">
                          ربط الـ API مع أنظمتك الداخلية أو استخدام منصة إدارة مثل اوتوربلاي، ثم البدء بالتواصل مع العملاء.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">
                    هل تحتاج مساعدة في تفعيل WhatsApp API لنشاطك التجاري؟
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    تواصل مع فريق الخبراء
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Services Grid - Existing Design */}
          <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">خدماتنا المتميزة</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  حلول شاملة ومتكاملة تلبي جميع احتياجاتك في التواصل مع العملاء وإدارة الأعمال
                </p>
                <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-6"></div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-blue-600 mb-4 group-hover:text-blue-700 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* NEW SEO Section 5: WhatsApp API FAQs */}
          <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">أسئلة شائعة حول WhatsApp API</h2>
                <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                  إجابات على الأسئلة التقنية والتشغيلية الأكثر شيوعاً حول WhatsApp Business API
                </p>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                  <Accordion type="single" collapsible className="space-y-3">
                    {whatsappApiFaqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`api-faq-${index}`}
                        className="bg-white rounded-xl border border-gray-100 shadow-sm"
                      >
                        <AccordionTrigger className="px-5 py-4 text-right hover:no-underline">
                          <span className="text-base font-semibold text-gray-800">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-5 pb-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">
                    لديك أسئلة أخرى؟ تفقد <Link to="/faq" className="text-blue-600 hover:text-blue-800 font-medium">صفحة الأسئلة الشائعة</Link> أو تصفح <Link to="/resources" className="text-blue-600 hover:text-blue-800 font-medium">مركز الموارد</Link> للمزيد من المعلومات.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* CTA Section - Existing Design */}
          <section className="py-16 px-6 bg-blue-600 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-4">جاهز لتجربة WhatsApp API؟</h2>
                <p className="text-xl mb-8 opacity-90">
                  ابدأ رحلتك مع <Link to="/about-us" className="underline hover:no-underline">اوتوربلاي</Link> واكتشف 
                  <Link to="/success-story" className="underline hover:no-underline"> قصص النجاح</Link> التي حققها عملاؤنا
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    to="/contact" 
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    تحدث مع خبير
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    اختر باقتك
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <RelatedLinks />
        <Footer />
      </div>
    </PageLayout>
  );
};

export default WhatsAppAPI;

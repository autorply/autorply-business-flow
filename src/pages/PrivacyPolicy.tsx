
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800" dir="rtl" lang="ar">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl font-bold text-blue-700 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              سياسة الخصوصية
            </motion.h1>
            
            <motion.div
              className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. تعريفات</h2>
                <div className="space-y-2">
                  <p><strong>"المنصة":</strong> تشير إلى موقع وتطبيقات أوتوربلاي وجميع الخدمات الرقمية التابعة لها.</p>
                  <p><strong>"العميل" أو "المستخدم":</strong> أي فرد أو جهة تقوم باستخدام خدمات المنصة.</p>
                  <p><strong>"البيانات الشخصية":</strong> أي معلومات تُعرّف المستخدم بشكل مباشر أو غير مباشر مثل الاسم، رقم الجوال، البريد الإلكتروني، عنوان IP، محتوى الدردشات، بيانات المتصفح أو الجهاز.</p>
                  <p><strong>"معالجة البيانات":</strong> أي عملية تُجرى على البيانات مثل الجمع، التخزين، النقل، التعديل، الحذف أو التحليل.</p>
                  <p><strong>"أطراف خارجية":</strong> أي جهات تتعامل معها أوتوربلاي وتشارك في تشغيل أو تحسين الخدمات (مثل Meta، مزودي الدفع، مزودي التخزين السحابي، شركات الاتصالات).</p>
                  <p><strong>"القوانين المعمول بها":</strong> يقصد بها الأنظمة واللوائح والضوابط المعتمدة في المملكة العربية السعودية، بالإضافة إلى شروط وسياسات مزودي الخدمات الخارجيين مثل Meta.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. نطاق السياسة</h2>
                <div className="space-y-2">
                  <p>2.1 تنطبق هذه السياسة على كافة البيانات التي يتم جمعها من خلال المنصة، سواء عبر الموقع، التطبيق، أو واجهات برمجة التطبيقات (APIs).</p>
                  <p>2.2 باستخدامك للمنصة، فإنك توافق على جمع بياناتك الشخصية ومعالجتها وفقًا لهذه السياسة.</p>
                  <p>2.3 تلتزم أوتوربلاي بتطبيق نظام حماية البيانات الشخصية السعودي الصادر بالمرسوم الملكي رقم م/19 لعام 1443هـ، وتحديثاته.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. البيانات التي نجمعها</h2>
                <p className="mb-4">تقوم أوتوربلاي بجمع الأنواع التالية من البيانات:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>معلومات الحساب:</strong> الاسم الكامل، البريد الإلكتروني، رقم الجوال، كلمة المرور.</li>
                  <li><strong>معلومات النشاط:</strong> أوقات الدخول، الرسائل المُرسلة، الملفات المرفوعة، سجل التذاكر، وغيرها من التفاعلات مع المنصة.</li>
                  <li><strong>معلومات تقنية:</strong> نوع الجهاز، نظام التشغيل، المتصفح، عنوان IP.</li>
                  <li><strong>بيانات الطرف الثالث:</strong> عند ربط حساب المستخدم بمنصة Meta (واتساب API)، يتم استلام رموز المصادقة وبعض بيانات الحساب المصرح بها من قبل المستخدم.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. طرق جمع البيانات</h2>
                <div className="space-y-2">
                  <p>4.1 يتم إدخال معظم البيانات من قبل المستخدم بشكل مباشر عبر نماذج التسجيل، النماذج داخل الفلو، إعدادات الحساب، أو حملات الرسائل.</p>
                  <p>4.2 بعض البيانات يتم جمعها تلقائيًا باستخدام ملفات تعريف الارتباط (Cookies) أو أدوات تحليلات الاستخدام.</p>
                  <p>4.3 لا تقوم أوتوربلاي بجمع أي بيانات دون علم المستخدم أو موافقته.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. الغرض من جمع البيانات</h2>
                <p className="mb-4">نستخدم البيانات الشخصية للأغراض التالية:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>توفير الخدمات المطلوبة للمستخدمين</li>
                  <li>إنشاء الحسابات وإدارتها</li>
                  <li>إرسال إشعارات وإعلانات مهمة</li>
                  <li>دعم فني وتحليل الشكاوى</li>
                  <li>تحسين تجربة المستخدم</li>
                  <li>الامتثال القانوني والتنظيمي</li>
                  <li>منع الاحتيال وتأمين الحسابات</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. مشاركة البيانات</h2>
                <div className="space-y-2">
                  <p>6.1 لا تقوم أوتوربلاي بمشاركة بياناتك الشخصية مع أي طرف ثالث دون إذن صريح منك، باستثناء الحالات التالية:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>الجهات الحكومية والتنظيمية بطلب رسمي</li>
                    <li>شركاء الخدمة (مثل Meta، بوابات الدفع، مزودي البريد) في نطاق تقديم الخدمة فقط</li>
                    <li>شركات استضافة البيانات (خوادم AWS – أو مشابهة)، وفقًا لعقود تحفظ سرية وأمان البيانات</li>
                  </ul>
                  <p>6.2 جميع الأطراف التي يتم مشاركة البيانات معها تلتزم بسياسات خصوصية صارمة وبنود حماية البيانات النظامية.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. حقوق المستخدم (صاحب البيانات)</h2>
                <p className="mb-4">يحق لك بصفتك صاحب البيانات ما يلي:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>الوصول:</strong> طلب نسخة من بياناتك الشخصية المخزنة لدينا</li>
                  <li><strong>التصحيح:</strong> تعديل بياناتك الشخصية غير الدقيقة أو الناقصة</li>
                  <li><strong>الحذف:</strong> طلب حذف بياناتك في الحالات التي لا يوجد فيها مبرر قانوني للاحتفاظ بها</li>
                  <li><strong>سحب الموافقة:</strong> سحب موافقتك على معالجة بياناتك في أي وقت، ما لم يكن هناك التزام نظامي قائم</li>
                  <li><strong>تقييد الاستخدام:</strong> طلب إيقاف معالجة بياناتك في حالات محددة</li>
                </ul>
                <p className="mt-4">لطلب ممارسة أي من الحقوق أعلاه، يرجى التواصل معنا عبر: <a href="mailto:legal@autorply.sa" className="text-blue-600 hover:underline">legal@autorply.sa</a></p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">8. أمن المعلومات وحماية البيانات</h2>
                <div className="space-y-2">
                  <p>8.1 تعتمد أوتوربلاي أفضل الممارسات الفنية والتنظيمية لحماية بيانات المستخدم، بما في ذلك:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>تشفير البيانات أثناء النقل والتخزين</li>
                    <li>التحقق الثنائي للدخول</li>
                    <li>أنظمة كشف ومنع الاختراق</li>
                    <li>نسخ احتياطية دورية ومشفّرة</li>
                    <li>مراجعات أمنية دورية للأنظمة</li>
                  </ul>
                  <p>8.2 يتم تدريب موظفينا على سياسات الخصوصية ويُمنع وصول غير المصرح لهم إلى بيانات المستخدم.</p>
                  <p>8.3 <strong>الإبلاغ عن حوادث اختراق البيانات:</strong> في حال حدوث خرق أمني قد يؤثر على سرية أو سلامة بياناتك الشخصية، تلتزم اوتوربلاي بإبلاغك خلال الفترة النظامية المنصوص عليها في نظام حماية البيانات الشخصية السعودي، وذلك باستخدام وسائل الاتصال المتوفرة لدينا. كما نلتزم باتخاذ جميع الإجراءات التقنية والتنظيمية اللازمة لتقليل الآثار الناتجة عن هذا الخرق، بما في ذلك التحقيق الفوري، وتقييم نطاق التأثير، والتعاون مع الجهات التنظيمية عند الحاجة.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">9. الاحتفاظ بالبيانات</h2>
                <div className="space-y-2">
                  <p>9.1 نحتفظ ببيانات المستخدم فقط للمدة اللازمة لتقديم الخدمات أو للامتثال للأنظمة.</p>
                  <p>9.2 في حال إنهاء الحساب، يتم حذف البيانات خلال مدة لا تتجاوز 30 يومًا ما لم تكن هناك أسباب قانونية تبرر الاحتفاظ.</p>
                  <p>9.3 عند انتهاء العلاقة، يمكن للمستخدم طلب تصدير بياناته أو حذفها نهائيًا.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">10. بيانات Meta وخصوصيتها</h2>
                <div className="space-y-2">
                  <p>10.1 خدمات واتساب الرسمية (WhatsApp Business API) تخضع أيضًا لسياسات شركة Meta. عند استخدامك لهذه الخدمات عبر أوتوربلاي، فإن بياناتك تُعالج وفقًا لسياسات Meta، المتاحة على الرابط: <a href="https://www.facebook.com/business/gdpr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.facebook.com/business/gdpr</a></p>
                  <p>10.2 أوتوربلاي لا تقوم بالوصول إلى محتوى رسائل المستخدمين ما لم يكن ذلك ضروريًا لغرض الدعم الفني أو الامتثال القانوني، وتحت موافقة رسمية.</p>
                  <p>10.3 أوتوربلاي شريك رسمي معتمد من Meta، وتلتزم بجميع الاتفاقيات الموقعة معها حول حماية البيانات وتكامل المنصة.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">11. نقل البيانات خارج المملكة</h2>
                <div className="space-y-2">
                  <p>11.1 قد يتم تخزين أو معالجة بعض البيانات على خوادم تقع خارج المملكة، وذلك فقط من خلال مزودي خدمات يتوافقون مع المعايير النظامية لحماية البيانات.</p>
                  <p>11.2 في حال نقل البيانات خارج المملكة، تضمن أوتوربلاي أن يكون هناك إطار تعاقدي يضمن حماية هذه البيانات وفقًا للنظام السعودي.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">12. التواصل والشكاوى</h2>
                <p>إذا كان لديك أي استفسار أو شكوى بخصوص سياسة الخصوصية أو بياناتك الشخصية، يمكنك التواصل معنا عبر: <a href="mailto:info@autorply.sa" className="text-blue-600 hover:underline">info@autorply.sa</a></p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">13. التعديلات على سياسة الخصوصية</h2>
                <div className="space-y-2">
                  <p>13.1 تحتفظ أوتوربلاي بالحق في تعديل هذه السياسة في أي وقت بما يتوافق مع الأنظمة أو تطورات الخدمة.</p>
                  <p>13.2 سيتم إشعار المستخدمين بالتعديلات الجوهرية عبر البريد الإلكتروني أو عبر المنصة.</p>
                  <p>13.3 استمرارك في استخدام المنصة بعد التعديلات يُعد موافقة صريحة عليها.</p>
                </div>
              </section>

              {/* English Version */}
              <div className="mt-16 pt-8 border-t border-gray-300">
                <h1 className="text-3xl font-bold text-blue-700 mb-8" dir="ltr">Privacy Policy</h1>
                
                <div className="space-y-8" dir="ltr">
                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Definitions</h2>
                    <div className="space-y-2">
                      <p><strong>"Platform":</strong> Refers to the Autorply website, applications, and all affiliated digital services.</p>
                      <p><strong>"Client" or "User":</strong> Any individual or entity utilizing the Platform's services.</p>
                      <p><strong>"Personal Data":</strong> Any information that identifies a user directly or indirectly, such as name, phone number, email address, IP address, chat content, browser data, or device data.</p>
                      <p><strong>"Data Processing":</strong> Any action performed on data, such as collection, storage, transfer, modification, deletion, or analysis.</p>
                      <p><strong>"Third Parties":</strong> Entities that collaborate with Autorply in operating or enhancing services (e.g., Meta, payment processors, cloud storage providers, telecom partners).</p>
                      <p><strong>"Applicable Laws":</strong> Refers to the laws, regulations, and policies enforced in the Kingdom of Saudi Arabia, in addition to the terms and policies of external service providers such as Meta.</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Scope of Policy</h2>
                    <div className="space-y-2">
                      <p>2.1 This policy applies to all data collected through the Platform, including the website, mobile applications, or API integrations.</p>
                      <p>2.2 By using the Platform, you consent to the collection and processing of your personal data in accordance with this policy.</p>
                      <p>2.3 Autorply adheres to the applicable personal data protection regulations enforced in the Kingdom of Saudi Arabia and the standards imposed by external providers such as Meta.</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Data We Collect</h2>
                    <p className="mb-4">Autorply may collect the following types of data:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Account Information:</strong> Full name, email address, phone number, password.</li>
                      <li><strong>Activity Data:</strong> Login timestamps, sent messages, uploaded files, ticket logs, and other user interactions.</li>
                      <li><strong>Technical Data:</strong> Device type, operating system, browser, IP address.</li>
                      <li><strong>Third-Party Data:</strong> When linking your account with Meta (WhatsApp API), we receive authentication tokens and authorized account information.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Methods of Data Collection</h2>
                    <div className="space-y-2">
                      <p>4.1 Most data is entered voluntarily by the user through registration forms, in-flow forms, account settings, or campaign interfaces.</p>
                      <p>4.2 Some data is collected automatically via cookies or usage analytics tools.</p>
                      <p>4.3 Autorply does not collect any data without the user's knowledge or consent.</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Purpose of Data Collection</h2>
                    <p className="mb-4">Personal data is used for the following purposes:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Providing requested services</li>
                      <li>Creating and managing user accounts</li>
                      <li>Sending essential notifications and announcements</li>
                      <li>Technical support and complaint resolution</li>
                      <li>Improving user experience</li>
                      <li>Compliance with legal and regulatory obligations</li>
                      <li>Fraud prevention and account security</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Data Sharing</h2>
                    <div className="space-y-2">
                      <p>6.1 Autorply does not share your personal data with third parties without your explicit consent, except in the following cases:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Governmental or regulatory entities upon official request</li>
                        <li>Service partners (e.g., Meta, payment gateways, email providers) strictly for service delivery</li>
                        <li>Data hosting companies (e.g., AWS or similar), under secure and confidential contractual agreements</li>
                      </ul>
                      <p>6.2 All parties receiving data are bound by strict confidentiality and data protection obligations.</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">7. User Rights (Data Subjects)</h2>
                    <p className="mb-4">As a data subject, you have the right to:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Access:</strong> Request a copy of your personal data</li>
                      <li><strong>Correction:</strong> Update inaccurate or incomplete personal data</li>
                      <li><strong>Deletion:</strong> Request deletion of your data when there is no legal ground for retention</li>
                      <li><strong>Withdrawal of Consent:</strong> Revoke your consent at any time unless legal obligations apply</li>
                      <li><strong>Restriction:</strong> Request limitation of data processing under certain conditions</li>
                    </ul>
                    <p className="mt-4">To exercise any of these rights, please contact us at: <a href="mailto:legal@autorply.sa" className="text-blue-600 hover:underline">legal@autorply.sa</a></p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Data Security & Protection</h2>
                    <div className="space-y-2">
                      <p>8.1 Autorply implements industry best practices to safeguard your data, including:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Encryption during storage and transmission</li>
                        <li>Two-factor authentication</li>
                        <li>Intrusion detection and prevention systems</li>
                        <li>Regular encrypted backups</li>
                        <li>Periodic security audits</li>
                      </ul>
                      <p>8.2 Employees are trained in privacy policies, and unauthorized access to data is strictly prohibited.</p>
                      <p>8.3 <strong>Data Breach Notification:</strong> In the event of a security breach affecting the confidentiality or integrity of your personal data, Autorply commits to notifying you within the legally required timeframe using available communication channels. We will take all necessary technical and organizational measures to minimize the impact, including immediate investigation, assessment of scope, and coordination with authorities where applicable.</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Data Retention</h2>
                    <div className="space-y-2">
                      <p>9.1 We retain user data only as long as necessary to provide services or meet legal requirements.</p>
                      <p>9.2 Upon account termination, data will be deleted within 30 days unless otherwise required by law.</p>
                      <p>9.3 Upon conclusion of the relationship, users may request a copy of their data or its complete deletion.</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Meta Data & Privacy</h2>
                    <div className="space-y-2">
                      <p>10.1 WhatsApp Business API services are subject to Meta's privacy policies. When using such services through Autorply, your data is processed under Meta's standards, available at: <a href="https://www.facebook.com/business/gdpr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.facebook.com/business/gdpr</a></p>
                      <p>10.2 Autorply does not access your message content unless required for support or legal compliance and only with official consent.</p>
                      <p>10.3 Autorply is a certified Meta Business Partner and complies with all relevant data protection and integration agreements.</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Cross-Border Data Transfers</h2>
                    <div className="space-y-2">
                      <p>11.1 Some data may be stored or processed on servers located outside the Kingdom of Saudi Arabia, strictly through providers that comply with recognized data protection standards.</p>
                      <p>11.2 Where cross-border data transfer occurs, Autorply ensures contractual safeguards are in place in line with applicable data protection regulations.</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Contact & Complaints</h2>
                    <p>If you have any questions or concerns regarding this privacy policy or your personal data, please contact us at: <a href="mailto:info@autorply.sa" className="text-blue-600 hover:underline">info@autorply.sa</a></p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Changes to the Privacy Policy</h2>
                    <div className="space-y-2">
                      <p>13.1 Autorply reserves the right to update this policy at any time, in accordance with legal or service developments.</p>
                      <p>13.2 Users will be notified of material changes via email or through the Platform.</p>
                      <p>13.3 Continued use of the Platform after such changes constitutes explicit acceptance of the updated policy.</p>
                    </div>
                  </section>
                </div>
              </div>

              <p className="mt-8 text-sm text-gray-500 italic text-center">
                آخر تحديث: سبتمبر 2023 | <span dir="ltr">Last Updated: September 2023</span>
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;


import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800" dir="rtl" lang="ar">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl font-bold text-blue-700 mb-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              شروط الخدمة - اتفاقية الاستخدام
            </motion.h1>
            
            <motion.div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* القسم العربي */}
              <div className="space-y-8">
                <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">1. التعريفات</h2>
                  <p className="mb-4">
                    في سياق هذه الاتفاقية، ما لم يقتضِ السياق خلاف ذلك، يكون للكلمات والتعابير التالية المعاني الموضحة أدناه:
                  </p>
                  <div className="space-y-3 mr-4">
                    <p><strong>"المنصة":</strong> تشير إلى منصة "اوتوربلاي" الإلكترونية (www.autorply.sa) وأي تطبيقات أو واجهات برمجية تابعة لها.</p>
                    <p><strong>"المستخدم" أو "العميل":</strong> أي فرد أو جهة تستخدم المنصة لغرض شخصي أو تجاري.</p>
                    <p><strong>"الخدمات":</strong> جميع الحلول التقنية التي توفرها أوتوربلاي، وتشمل على سبيل المثال لا الحصر: شات بوت واتساب، إدارة الحملات، تكامل الأنظمة، إدارة العملاء، الاشتراك في واجهات برمجية (APIs).</p>
                    <p><strong>"اتفاقية الاستخدام":</strong> تشير إلى هذه الوثيقة وكل ما يرتبط بها من سياسات.</p>
                    <p><strong>"مزوّدو الطرف الثالث":</strong> أطراف خارجية تقدم خدمات يتم دمجها أو ربطها بمنصة أوتوربلاي (مثل: Meta، STC، مزودو الدفع، شركات الاستضافة، إلخ).</p>
                    <p><strong>"الحساب":</strong> الحساب الذي يتم إنشاؤه من قبل المستخدم بغرض الوصول إلى خدمات المنصة.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">2. قبول الشروط</h2>
                  <div className="space-y-4">
                    <p><strong>2.1</strong> باستخدامك المنصة، سواء بالوصول أو التصفح أو التسجيل أو استخدام أي من الخدمات، فإنك تقر وتوافق على الالتزام بهذه الشروط والأحكام، كما توافق على سياسة الخصوصية وسياسات الأطراف المرتبطة.</p>
                    <p><strong>2.2</strong> تحتفظ أوتوربلاي بالحق في تعديل هذه الاتفاقية في أي وقت. يتم إشعار المستخدم بالتعديلات الجوهرية عبر البريد الإلكتروني أو عبر المنصة. استمرارك في استخدام المنصة بعد أي تعديل يُعد قبولاً ملزمًا للشروط المعدّلة.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">3. إنشاء الحساب</h2>
                  <div className="space-y-4">
                    <p><strong>3.1</strong> يجب على المستخدم إنشاء حساب لاستخدام بعض خدمات المنصة. يتطلب ذلك تقديم معلومات دقيقة وكاملة وحديثة.</p>
                    <p><strong>3.2</strong> يلتزم المستخدم بتحديث معلوماته باستمرار. لا تتحمل أوتوربلاي مسؤولية النتائج الناجمة عن إدخال معلومات غير صحيحة.</p>
                    <p><strong>3.3</strong> تقع على المستخدم مسؤولية الحفاظ على سرية بيانات الدخول، وتكون مسؤولاً عن جميع الأنشطة التي تتم عبر حسابه.</p>
                    <p><strong>3.4</strong> تحتفظ أوتوربلاي بالحق في تعليق أو إلغاء الحسابات المخالفة أو المشبوهة، دون إشعار مسبق، إذا ثبت سوء الاستخدام أو انتهاك الشروط.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">4. تقديم الخدمات</h2>
                  <div className="space-y-4">
                    <p><strong>4.1</strong> تلتزم أوتوربلاي بتوفير الخدمات التقنية وفقًا للمعايير المهنية والتجارية المعتمدة، بما في ذلك دمج حسابات واتساب الرسمية عبر منصة Meta وفق سياساتهم.</p>
                    <p><strong>4.2</strong> استخدامك لبعض الخدمات (مثل دمج واتساب API) يخضع أيضًا لشروط شركة Meta، ويُعد التزامًا منك بتطبيق سياساتهم الإضافية، بما لا يخالف نظام حماية البيانات السعودي.</p>
                    <p><strong>4.3</strong> توفر أوتوربلاي الدعم الفني الأساسي عبر البريد الإلكتروني أو القنوات المحددة، وفقًا للباقة المشترك بها المستخدم.</p>
                    <p><strong>4.4</strong> لا تضمن أوتوربلاي خلو الخدمات من الانقطاعات، أو توافرها الكامل في جميع الأوقات، لا سيما في حالات التحديثات أو أعمال الصيانة أو الطوارئ.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">5. التزامات المستخدم</h2>
                  <div className="space-y-4">
                    <p><strong>5.1</strong> يلتزم المستخدم باستخدام المنصة والخدمات لأغراض قانونية مشروعة، وعدم استخدامها في أي أنشطة ممنوعة أو مخالفة للشريعة أو الأنظمة المعمول بها في المملكة.</p>
                    <p><strong>5.2</strong> يلتزم المستخدم بما يلي:</p>
                    <ul className="mr-8 space-y-2 list-disc">
                      <li>عدم إساءة استخدام المنصة أو محاولات اختراقها.</li>
                      <li>عدم إرسال رسائل غير مرغوب فيها (Spam).</li>
                      <li>عدم نشر أو توزيع محتوى ينتهك حقوق الملكية الفكرية أو الخصوصية.</li>
                      <li>الحصول على التصاريح والتراخيص اللازمة لأي أنشطة تتم عبر المنصة إذا استدعى الأمر.</li>
                    </ul>
                    <p><strong>5.3</strong> يتحمل المستخدم وحده المسؤولية عن أي بيانات أو محتوى يرفعه أو ينشره من خلال حسابه.</p>
                    <p><strong>5.4</strong> في حال انتهاك المستخدم لأي من هذه الالتزامات، يحق لأوتوربلاي تعليق الحساب فورًا واتخاذ الإجراءات النظامية.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">6. الرسوم والمدفوعات</h2>
                  <div className="space-y-4">
                    <p><strong>6.1</strong> توفر أوتوربلاي خدمات مجانية لفترة تجريبية محددة، وبعدها تصبح بعض الخدمات مدفوعة حسب الباقات المعلنة.</p>
                    <p><strong>6.2</strong> تتم معالجة المدفوعات عبر شركائنا في الدفع مثل: شركة سلة القابضة، أو عبر بوابات دفع إلكترونية مرخصة.</p>
                    <p><strong>6.3</strong> جميع الرسوم غير قابلة للاسترداد بعد إتمام الدفع، ما لم يكن هنالك خلل موثق في تقديم الخدمة.</p>
                    <p><strong>6.4</strong> في حال عدم السداد خلال المدة المحددة، يحق لأوتوربلاي إيقاف الخدمة مؤقتًا أو إلغاء الحساب.</p>
                    <p><strong>6.5</strong> تحتفظ أوتوربلاي بالحق في تغيير الأسعار أو خصائص الباقات مع إشعار مسبق لا يقل عن 14 يومًا.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">7. حقوق الملكية الفكرية</h2>
                  <div className="space-y-4">
                    <p><strong>7.1</strong> جميع حقوق الملكية الفكرية المتعلقة بالمنصة، بما في ذلك التصميم، الكود البرمجي، والشعارات، مملوكة لأوتوربلاي أو مرخصة لها.</p>
                    <p><strong>7.2</strong> لا يحق للمستخدم نسخ أو إعادة إنتاج أو توزيع أو تعديل أي جزء من المنصة دون إذن كتابي مسبق.</p>
                    <p><strong>7.3</strong> البيانات التي يرفعها المستخدم تبقى ملكًا له، ويمنح أوتوربلاي حقًا غير حصري لمعالجتها وتخزينها فقط لغرض تقديم الخدمات.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">8. السرية</h2>
                  <div className="space-y-4">
                    <p><strong>8.1</strong> تلتزم أوتوربلاي بالحفاظ على سرية البيانات والمعلومات التي يتم جمعها من المستخدمين وعدم إفشائها لأي طرف ثالث دون موافقة المستخدم، باستثناء ما يفرضه القانون أو الجهات التنظيمية.</p>
                    <p><strong>8.2</strong> يقر المستخدم بأن بعض البيانات قد تتم معالجتها أو تخزينها عبر خدمات خارجية (مثل مقدمي استضافة أو بوابات دفع) مع التزام هذه الجهات باتفاقيات حماية البيانات.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">9. حدود المسؤولية</h2>
                  <div className="space-y-4">
                    <p><strong>9.1</strong> لا تتحمل أوتوربلاي أي مسؤولية عن الأضرار غير المباشرة أو الناتجة عن سوء استخدام المنصة.</p>
                    <p><strong>9.2</strong> في جميع الأحوال، لا تتجاوز مسؤولية أوتوربلاي عن أي مطالبة مجموع المبالغ المدفوعة من المستخدم خلال آخر 12 شهرًا.</p>
                    <p><strong>9.3</strong> لا تتحمل أوتوربلاي مسؤولية عن انقطاع الخدمات نتيجة ظروف خارجة عن إرادتها مثل الكوارث، الأعطال التقنية، أو قرارات الجهات التنظيمية.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">10. إنهاء الحساب</h2>
                  <div className="space-y-4">
                    <p><strong>10.1</strong> يحق للمستخدم إنهاء حسابه في أي وقت عبر التواصل مع الدعم أو إعدادات الحساب.</p>
                    <p><strong>10.2</strong> تحتفظ أوتوربلاي بالحق في تعليق أو إنهاء الحساب في الحالات التالية:</p>
                    <ul className="mr-8 space-y-2 list-disc">
                      <li>مخالفة الشروط.</li>
                      <li>انقضاء فترة الباقة دون تجديد.</li>
                      <li>إساءة الاستخدام أو التهديد الأمني.</li>
                      <li>طلب من جهة تنظيمية.</li>
                    </ul>
                    <p><strong>10.3</strong> بعد إنهاء الحساب، يتم حذف أو إتلاف البيانات وفق سياسة الخصوصية، ما لم يكن هناك التزام نظامي بحفظها لفترة محددة.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">11. القانون الحاكم وحل النزاعات</h2>
                  <div className="space-y-4">
                    <p><strong>11.1</strong> تخضع هذه الاتفاقية وتُفسر وفقًا لأنظمة المملكة العربية السعودية.</p>
                    <p><strong>11.2</strong> يتم حل النزاعات وديًا، وإن تعذر ذلك تُحال إلى الجهات القضائية المختصة داخل المملكة.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">12. العلاقة مع Meta</h2>
                  <div className="space-y-4">
                    <p><strong>12.1</strong> تلتزم أوتوربلاي بسياسات منصة Meta كونها موفر حلول أعمال رسمي معتمد (Official WhatsApp Business Solution Provider).</p>
                    <p><strong>12.2</strong> إن استخدامك لخصائص واتساب API يقتضي امتثالك لشروط وسياسات Meta، بما في ذلك إدارة البيانات، وإنشاء القوالب، والأنشطة التسويقية، دون تعارض مع القوانين المحلية.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">13. مجمل الاتفاق</h2>
                  <div className="space-y-4">
                    <p><strong>13.1</strong> تمثل هذه الاتفاقية كافة التفاهمات بين الطرفين، وتُلغي أي اتفاقيات سابقة خطية أو شفهية تخص المواضيع الواردة فيها.</p>
                    <p><strong>13.2</strong> لا يجوز التنازل عن الحقوق أو الالتزامات المنصوص عليها دون موافقة خطية من الطرف الآخر، باستثناء تحويل ملكية الشركة أو اندماجها تحت إشعار رسمي.</p>
                  </div>
                </section>
              </div>

              {/* الفاصل بين النسختين */}
              <div className="border-t-2 border-gray-300 my-12"></div>

              {/* النسخة الإنجليزية */}
              <div className="space-y-8" dir="ltr">
                <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">Terms and Conditions of Use</h1>
                
                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Definitions</h2>
                  <p className="mb-4">Unless the context requires otherwise, the following terms shall have the meanings set out below:</p>
                  <div className="space-y-3 ml-4">
                    <p><strong>Platform:</strong> Refers to the Autorply electronic platform (www.autorply.sa), including any affiliated applications or APIs.</p>
                    <p><strong>User or Client:</strong> Any individual or entity that uses the platform for personal or commercial purposes.</p>
                    <p><strong>Services:</strong> All technical solutions provided by Autorply, including but not limited to: WhatsApp chatbot, campaign management, system integrations, client management, and access to APIs.</p>
                    <p><strong>Terms of Use:</strong> This document and all associated policies.</p>
                    <p><strong>Third-Party Providers:</strong> External parties that integrate or connect with Autorply, such as Meta, STC, payment gateways, and hosting providers.</p>
                    <p><strong>Account:</strong> A user account created for the purpose of accessing the platform's services.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Acceptance of Terms</h2>
                  <div className="space-y-4">
                    <p><strong>2.1</strong> By accessing, browsing, registering, or using any part of the platform, you acknowledge and agree to be bound by these Terms and Conditions, the Privacy Policy, and any related third-party terms.</p>
                    <p><strong>2.2</strong> Autorply reserves the right to modify these Terms at any time. Material changes will be communicated via email or directly through the platform. Continued use after such changes constitutes your acceptance of the revised Terms.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Account Registration</h2>
                  <div className="space-y-4">
                    <p><strong>3.1</strong> Certain services require account creation, which involves submitting accurate, complete, and current information.</p>
                    <p><strong>3.2</strong> Users are responsible for keeping their account information updated. Autorply shall not be liable for consequences arising from outdated or inaccurate information.</p>
                    <p><strong>3.3</strong> Users are solely responsible for maintaining the confidentiality of login credentials and for all activities under their account.</p>
                    <p><strong>3.4</strong> Autorply reserves the right to suspend or terminate any account that is found to be in violation of these Terms, or suspected of abuse, without prior notice.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Service Provision</h2>
                  <div className="space-y-4">
                    <p><strong>4.1</strong> Autorply delivers its technical services in accordance with industry standards, including official integration of WhatsApp Business accounts via Meta's platform.</p>
                    <p><strong>4.2</strong> Use of specific services (e.g., WhatsApp API) is subject to Meta's terms and conditions. The user agrees to comply with such terms without conflict with Saudi data protection laws.</p>
                    <p><strong>4.3</strong> Basic support is available through designated channels based on the user's subscription plan.</p>
                    <p><strong>4.4</strong> Autorply does not guarantee uninterrupted service availability, especially during updates, maintenance, or emergency situations.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">5. User Obligations</h2>
                  <div className="space-y-4">
                    <p><strong>5.1</strong> Users shall use the platform solely for lawful purposes and in compliance with applicable laws in the Kingdom of Saudi Arabia.</p>
                    <p><strong>5.2</strong> Users agree to:</p>
                    <ul className="ml-8 space-y-2 list-disc">
                      <li>Refrain from system abuse, hacking attempts, or reverse engineering.</li>
                      <li>Avoid sending unsolicited messages (spam).</li>
                      <li>Not upload or distribute any content that violates intellectual property or privacy rights.</li>
                      <li>Obtain all necessary licenses or regulatory approvals for business activities conducted via the platform.</li>
                    </ul>
                    <p><strong>5.3</strong> Users are fully responsible for the content and data they upload or submit via their accounts.</p>
                    <p><strong>5.4</strong> Autorply reserves the right to suspend any account immediately upon breach of these obligations or suspicion of misconduct.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Fees and Payments</h2>
                  <div className="space-y-4">
                    <p><strong>6.1</strong> Autorply offers a limited free trial. Paid services are available as per the publicly published pricing plans.</p>
                    <p><strong>6.2</strong> Payments are processed through authorized partners such as Salla Holding or approved payment gateways.</p>
                    <p><strong>6.3</strong> All payments are non-refundable unless a documented service failure has occurred.</p>
                    <p><strong>6.4</strong> In case of non-payment, Autorply may suspend or terminate services.</p>
                    <p><strong>6.5</strong> Autorply reserves the right to modify pricing or subscription features with no less than 14 days' prior notice.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Intellectual Property</h2>
                  <div className="space-y-4">
                    <p><strong>7.1</strong> All intellectual property related to the platform (including design, code, and branding) is owned by or licensed to Autorply.</p>
                    <p><strong>7.2</strong> Users may not copy, reproduce, distribute, or modify any part of the platform without prior written authorization.</p>
                    <p><strong>7.3</strong> User-submitted content remains their property. However, the user grants Autorply a non-exclusive right to process and store such content solely for service provision.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Confidentiality</h2>
                  <div className="space-y-4">
                    <p><strong>8.1</strong> Autorply commits to maintaining the confidentiality of user data and shall not disclose it to third parties without the user's explicit consent, except as required by law or regulatory authorities.</p>
                    <p><strong>8.2</strong> Users acknowledge that certain data may be processed or stored via third-party services (e.g., hosting providers, payment processors) that are contractually bound to data protection obligations.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Limitation of Liability</h2>
                  <div className="space-y-4">
                    <p><strong>9.1</strong> Autorply shall not be liable for indirect or consequential damages resulting from platform misuse.</p>
                    <p><strong>9.2</strong> In all cases, Autorply's total liability shall not exceed the total amount paid by the user within the twelve (12) months preceding the claim.</p>
                    <p><strong>9.3</strong> Autorply shall not be held responsible for service disruptions due to force majeure events such as natural disasters, technical failures, or regulatory interventions.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Account Termination</h2>
                  <div className="space-y-4">
                    <p><strong>10.1</strong> Users may request account termination at any time through customer support or account settings.</p>
                    <p><strong>10.2</strong> Autorply may suspend or terminate an account in the following cases:</p>
                    <ul className="ml-8 space-y-2 list-disc">
                      <li>Violation of these Terms.</li>
                      <li>Subscription expiration without renewal.</li>
                      <li>Abuse or security threats.</li>
                      <li>Official request by regulatory authorities.</li>
                    </ul>
                    <p><strong>10.3</strong> Upon termination, data shall be deleted or destroyed in accordance with the Privacy Policy, unless retention is legally required.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Governing Law and Dispute Resolution</h2>
                  <div className="space-y-4">
                    <p><strong>11.1</strong> These Terms shall be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia.</p>
                    <p><strong>11.2</strong> Disputes shall first be resolved amicably. If unresolved, they shall be referred to the competent courts within the Kingdom.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Relationship with Meta</h2>
                  <div className="space-y-4">
                    <p><strong>12.1</strong> Autorply is an official WhatsApp Business Solution Provider (BSP) recognized by Meta and adheres to all applicable policies.</p>
                    <p><strong>12.2</strong> Use of WhatsApp API features requires full compliance with Meta's rules concerning data handling, message templates, and marketing practices, without breaching local regulations.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Entire Agreement</h2>
                  <div className="space-y-4">
                    <p><strong>13.1</strong> This agreement constitutes the complete understanding between the parties and supersedes all prior agreements, whether written or oral.</p>
                    <p><strong>13.2</strong> No party may assign or transfer any rights or obligations without the written consent of the other party, except in the case of company acquisition or merger, subject to formal notice.</p>
                  </div>
                </section>
              </div>

              <p className="mt-12 text-sm text-gray-500 text-center">
                آخر تحديث: مارس 2024 | Last updated: March 2024
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;

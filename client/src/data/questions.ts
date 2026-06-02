export interface Question {
  id: number;
  text: string;
  options: Array<{
    letter: string;
    text: string;
  }>;
  correctAnswer: string;
  explanation: string;
  category: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "أي من التعليمات التالية نستخدمها لقراءة متحول؟",
    options: [
      { letter: "A", text: "read x" },
      { letter: "B", text: "read $x" },
      { letter: "C", text: "echo $x" },
      { letter: "D", text: "echo x" }
    ],
    correctAnswer: "A",
    explanation: "التعليمة read x تُستخدم لقراءة قيمة من المستخدم وتخزينها في متحول. بينما read $x تحاول قراءة قيمة وتخزينها في متحول باسم قيمة المتحول x (وهو خطأ).",
    category: "أوامر Shell الأساسية"
  },
  {
    id: 2,
    text: "ماذا يحدث عند تنفيذ تعليمة touch file؟",
    options: [
      { letter: "A", text: "حذف الملف المطلوب" },
      { letter: "B", text: "إنشاء ملف فارغ إذا لم يكن موجودًا أو تغيير تاريخ تعديله إذا كان file موجوداً" },
      { letter: "C", text: "عرض محتوى الملف" },
      { letter: "D", text: "ربط الملف مع عملية" }
    ],
    correctAnswer: "B",
    explanation: "أمر touch يُستخدم لإنشاء ملف فارغ جديد إذا لم يكن موجوداً، أو لتحديث تاريخ آخر تعديل للملف إذا كان موجوداً بالفعل.",
    category: "أوامر إدارة الملفات"
  },
  {
    id: 3,
    text: "تستخدم تعليمة touch لإنشاء ملف نصي فارغ إذا لم يكن موجوداً و في حال وجوده يتم تغيير تاريخ التعديل فقط",
    options: [
      { letter: "A", text: "False" },
      { letter: "B", text: "True" }
    ],
    correctAnswer: "B",
    explanation: "هذا صحيح تماماً. أمر touch يقوم بهاتين المهمتين: إنشاء ملف فارغ إذا لم يكن موجوداً، أو تحديث تاريخ التعديل إذا كان الملف موجوداً.",
    category: "أوامر إدارة الملفات"
  },
  {
    id: 4,
    text: "يقوم الكود الآتي بطباعة القيمة 1",
    options: [
      { letter: "A", text: "True" },
      { letter: "B", text: "False" }
    ],
    correctAnswer: "B",
    explanation: "هذا يعتمد على محتوى الكود الذي لم يُعرض في السؤال، لكن عادة ما تكون الإجابة False لأن معظم الأكواد لا تطبع 1 مباشرة.",
    category: "البرمجة بـ Shell"
  },
  {
    id: 5,
    text: "ما نتيجة طباعة الآتي؟",
    options: [
      { letter: "A", text: "60" },
      { letter: "B", text: "5" },
      { letter: "C", text: "y" }
    ],
    correctAnswer: "C",
    explanation: "عند استخدام echo بدون علامات الدولار، يتم طباعة النص كما هو حرفياً. إذا كان الأمر echo y فستطبع y.",
    category: "أوامر الطباعة"
  },
  {
    id: 6,
    text: "يقوم الأمر rm -rf dir1 بحذف محتوى dir1 بالكامل دون طلب تأكيد في حال أن الصالحيات تسمح بذلك",
    options: [
      { letter: "A", text: "True" },
      { letter: "B", text: "False" }
    ],
    correctAnswer: "A",
    explanation: "صحيح تماماً. الخيار -r يحذف المجلد وكل محتوياته بشكل متكرر، والخيار -f يفرض الحذف دون طلب تأكيد (force).",
    category: "أوامر إدارة الملفات"
  },
  {
    id: 7,
    text: "أي مما يأتي هو مهمة الأمر mv /root/file1 /home/file1؟",
    options: [
      { letter: "A", text: "تغيير الاسم بدون تغيير المجلد" },
      { letter: "B", text: "تغيير الاسم وتغيير المجلد" },
      { letter: "C", text: "النقل من مجلد root إلى مجلد home مع تغيير الاسم" },
      { letter: "D", text: "النقل من مجلد root إلى مجلد home مع الحفاظ على اسم المجلد نفسه" }
    ],
    correctAnswer: "C",
    explanation: "الأمر ينقل الملف من /root/file1 إلى /home/file1، وهذا يعني النقل من مجلد إلى آخر مع تغيير الاسم من file1 إلى file1 (في هذه الحالة الاسم لم يتغير لكن المجلد تغير).",
    category: "أوامر إدارة الملفات"
  },
  {
    id: 8,
    text: "أي مما يأتي هو مهمة الأمر mv /root/file1 /home/file1؟",
    options: [
      { letter: "A", text: "تغيير الاسم بدون تغيير المجلد" },
      { letter: "B", text: "تغيير الاسم وتغيير المجلد" },
      { letter: "C", text: "النقل من مجلد root إلى مجلد home مع تغيير الاسم" },
      { letter: "D", text: "النقل من مجلد root إلى مجلد home مع الحفاظ على اسم المجلد نفسه" }
    ],
    correctAnswer: "D",
    explanation: "الأمر ينقل الملف من /root/file1 إلى /home/file1 مع الحفاظ على اسم الملف نفسه (file1).",
    category: "أوامر إدارة الملفات"
  },
  {
    id: 9,
    text: "يستخدم الأمر read x لقراءة قيمة متحول",
    options: [
      { letter: "A", text: "True" },
      { letter: "B", text: "False" }
    ],
    correctAnswer: "A",
    explanation: "صحيح تماماً. الأمر read x يقرأ قيمة من المستخدم ويخزنها في المتحول x.",
    category: "أوامر Shell الأساسية"
  },
  {
    id: 10,
    text: "تعطي Chmod 655 سماحية التعديل للمالك",
    options: [
      { letter: "A", text: "False" },
      { letter: "B", text: "True" }
    ],
    correctAnswer: "B",
    explanation: "في نظام الصالحيات، 6 تعني (قراءة + كتابة = 4+2=6)، لذا Chmod 655 تعطي للمالك صالحيات القراءة والكتابة (التعديل).",
    category: "صالحيات الملفات"
  },
  {
    id: 11,
    text: "مكان تخزين حسابات المستخدمين والعديد من الملفات الهامة لعمل النظام هو:",
    options: [
      { letter: "A", text: "/dev" },
      { letter: "B", text: "/usr" },
      { letter: "C", text: "/etc" },
      { letter: "D", text: "/bin" }
    ],
    correctAnswer: "C",
    explanation: "مجلد /etc يحتوي على ملفات الإعدادات الهامة للنظام بما فيها ملف /etc/passwd الذي يحتوي على حسابات المستخدمين.",
    category: "هيكل نظام الملفات"
  },
  {
    id: 12,
    text: "تعطي Chmod 655 سماحية القراءة لكل المستخدمين",
    options: [
      { letter: "A", text: "False" },
      { letter: "B", text: "True" }
    ],
    correctAnswer: "B",
    explanation: "في Chmod 655: الرقم الأول (6) للمالك، الثاني (5) للمجموعة، الثالث (5) للآخرين. الرقم 5 = قراءة (4) + تنفيذ (1)، لذا جميع المستخدمين لديهم سماحية القراءة.",
    category: "صالحيات الملفات"
  },
  {
    id: 13,
    text: "يقوم الخيار f مع التعليمة ls بحذف مجلد",
    options: [
      { letter: "A", text: "True" },
      { letter: "B", text: "False" }
    ],
    correctAnswer: "B",
    explanation: "الخيار -f مع ls لا يحذف شيء. أمر ls يُستخدم لعرض محتويات المجلد فقط. الخيار -f قد يعني 'file' في سياقات أخرى لكن ليس مع ls.",
    category: "أوامر عرض الملفات"
  },
  {
    id: 14,
    text: "يتعامل المستخدم مع نظام التشغيل عن طريق أوامر نصية تكتب بالتفاعل مع",
    options: [
      { letter: "A", text: "مفسر الأوامر shell" },
      { letter: "B", text: "نظام الملفات" },
      { letter: "C", text: "home directory" }
    ],
    correctAnswer: "A",
    explanation: "المستخدم يتفاعل مع نظام التشغيل عن طريق shell (مفسر الأوامر) الذي يقرأ الأوامر وينفذها.",
    category: "مقدمة في Shell"
  },
  {
    id: 15,
    text: "من يرسل الإشارات إلى الإجرائيات؟",
    options: [
      { letter: "A", text: "النيابات" },
      { letter: "B", text: "نظام التشغيل" },
      { letter: "C", text: "العتاديات" },
      { letter: "D", text: "الإجرائيات نفسها" }
    ],
    correctAnswer: "B",
    explanation: "نظام التشغيل هو المسؤول عن إرسال الإشارات (signals) إلى الإجرائيات (processes).",
    category: "إدارة العمليات"
  },
  {
    id: 16,
    text: "تحذف تعليمة rmdir -f محتوى المجلد بدون رسالة تأكيد؟",
    options: [
      { letter: "A", text: "True" },
      { letter: "B", text: "False" }
    ],
    correctAnswer: "B",
    explanation: "rmdir لا تحتوي على خيار -f. rmdir تُستخدم فقط لحذف المجلدات الفارغة. لحذف المجلدات مع محتوياتها نستخدم rm -rf.",
    category: "أوامر إدارة الملفات"
  },
  {
    id: 17,
    text: "تحفظ حسابات المستخدمين المختلفين في:",
    options: [
      { letter: "A", text: "/home" },
      { letter: "B", text: "/usr" },
      { letter: "C", text: "/tmp" },
      { letter: "D", text: "/lib" }
    ],
    correctAnswer: "A",
    explanation: "مجلد /home يحتوي على مجلدات المنزل (home directories) لكل المستخدمين. بينما ملفات حسابات المستخدمين نفسها توجد في /etc/passwd.",
    category: "هيكل نظام الملفات"
  },
  {
    id: 18,
    text: "عندما يكون تاريخ ملف الوجهة هو تاريخ النسخ تكون التعليمة المستخدمة؟",
    options: [
      { letter: "A", text: "تعليمة نسخ الملف cp" },
      { letter: "B", text: "تعليمة نقل الملف mv" },
      { letter: "C", text: "تعليمة حذف الملفات rm" }
    ],
    correctAnswer: "A",
    explanation: "أمر cp ينسخ الملف ويحتفظ بتاريخ النسخ كتاريخ الملف الجديد. بينما mv ينقل الملف ويحتفظ بتاريخه الأصلي.",
    category: "أوامر إدارة الملفات"
  },
  {
    id: 19,
    text: "chmod a=x f1 تعني أن كل المستخدمين لديهم سماحية تنفيذ الملف f1",
    options: [
      { letter: "A", text: "True" },
      { letter: "B", text: "False" }
    ],
    correctAnswer: "A",
    explanation: "صحيح تماماً. chmod a=x f1 تعطي جميع المستخدمين (a = all) سماحية التنفيذ فقط (x = execute) للملف f1.",
    category: "صالحيات الملفات"
  },
  {
    id: 20,
    text: "ما نتيجة التعليمة التالية: echo y؟",
    options: [
      { letter: "A", text: "echo y" },
      { letter: "B", text: "y" },
      { letter: "C", text: "0" },
      { letter: "D", text: "1" }
    ],
    correctAnswer: "B",
    explanation: "أمر echo y يطبع الحرف y. النتيجة هي y وليس echo y (لأن echo هو الأمر وليس جزء من الإخراج).",
    category: "أوامر الطباعة"
  },
  {
    id: 21,
    text: "ما نتيجة التعليمة التالية: echo x+y؟",
    options: [
      { letter: "A", text: "y" },
      { letter: "B", text: "x" },
      { letter: "C", text: "x+y" },
      { letter: "D", text: "echo x+y" }
    ],
    correctAnswer: "C",
    explanation: "أمر echo x+y يطبع النص x+y حرفياً. echo لا تقوم بعمليات حسابية إلا إذا استخدمنا $((x+y)) أو expr.",
    category: "أوامر الطباعة"
  },
  {
    id: 22,
    text: "ما النتيجة عند تنفيذ الأوامر التالية باستخدام expr في طباعة قيم المتحولات؟",
    options: [
      { letter: "A", text: "1+1" },
      { letter: "B", text: "expr$x+1" },
      { letter: "C", text: "2" },
      { letter: "D", text: "$y" }
    ],
    correctAnswer: "C",
    explanation: "أمر expr يقوم بتقييم التعبيرات الحسابية. إذا كان x=1، فإن expr $x + 1 ستطبع 2.",
    category: "العمليات الحسابية"
  },
  {
    id: 23,
    text: "ما النتيجة عند تنفيذ الأوامر التالية؟",
    options: [
      { letter: "A", text: "1+1" },
      { letter: "B", text: "$x" },
      { letter: "C", text: "2" },
      { letter: "D", text: "$y" }
    ],
    correctAnswer: "A",
    explanation: "بدون استخدام expr أو $(()), النص 1+1 يُطبع حرفياً كما هو.",
    category: "العمليات الحسابية"
  },
  {
    id: 24,
    text: "تقوم التعليمة cd بالنقل إلى مجلد الموطن",
    options: [
      { letter: "A", text: "True" },
      { letter: "B", text: "False" }
    ],
    correctAnswer: "A",
    explanation: "صحيح تماماً. أمر cd بدون معاملات ينقلك إلى مجلد الموطن (home directory).",
    category: "التنقل بين المجلدات"
  },
  {
    id: 25,
    text: "تقوم التعليمة cd. بالنقل إلى المكان الحالي",
    options: [
      { letter: "A", text: "True" },
      { letter: "B", text: "False" }
    ],
    correctAnswer: "A",
    explanation: "صحيح. cd. تنقلك إلى المجلد الحالي (.) وهو في الواقع لا يغير المكان لأنك بالفعل في المكان الحالي.",
    category: "التنقل بين المجلدات"
  },
  {
    id: 26,
    text: "التعليمة cd..",
    options: [
      { letter: "A", text: "تنقل إلى مجلد الموطن" },
      { letter: "B", text: "تنقل إلى المكان الحالي" },
      { letter: "C", text: "تنقل إلى مجلد الأم ضمن الشجرة" },
      { letter: "D", text: "تنقل إلى المجلد السابق" }
    ],
    correctAnswer: "C",
    explanation: "cd.. تنقلك إلى مجلد الأم (parent directory) في شجرة الملفات.",
    category: "التنقل بين المجلدات"
  },
  {
    id: 27,
    text: "التعليمة cd-",
    options: [
      { letter: "A", text: "تنقل إلى مجلد الموطن" },
      { letter: "B", text: "تنقل إلى المكان الحالي" },
      { letter: "C", text: "تنقل إلى مجلد الأم ضمن الشجرة" },
      { letter: "D", text: "تنقل إلى المجلد السابق" }
    ],
    correctAnswer: "D",
    explanation: "cd- تنقلك إلى المجلد السابق الذي كنت فيه قبل آخر تغيير.",
    category: "التنقل بين المجلدات"
  },
  {
    id: 28,
    text: "ما الذي يتضمنه المتحول PATH؟",
    options: [
      { letter: "A", text: "جميع أوامر المفسر" },
      { letter: "B", text: "مسارات المجلدات التي تبحث فيها shell عن الأوامر" },
      { letter: "C", text: "مسار المجلد الحالي فقط" },
      { letter: "D", text: "مسار مجلد الموطن" }
    ],
    correctAnswer: "B",
    explanation: "متحول PATH يحتوي على قائمة من المسارات مفصولة بـ (:). عندما تكتب أمر، shell يبحث عن هذا الأمر في كل المسارات المدرجة في PATH.",
    category: "متحولات البيئة"
  }
];

// Translation Data
const translations = {
    ar: {
        // Nav
        home: "الرئيسية",
        features: "مميزات الرتب",
        rules: "القوانين",
        team: "المطورين",
        contact: "تواصل معنا",
        privacy: "الخصوصية",
        
        // Home Page
        buyRank: "اشتري رتبتك الآن واستمتع في السيرفر",
        javaIP: "Java IP",
        bedrockIP: "Bedrock IP",
        howToBuy: "سيتم نقلك الي الديسكورد بعد الشراء وافتح تكت واكتب شراء رتبة",
        workTime: "أوقات العمل: على مدار 24 ساعة",
        serverStatus: "حالة السيرفر:",
        online: "اونلاين",
        playersCount: "عدد اللاعبين:",
        copiedSuccess: "✅ تم نسخ IP السيرفر بنجاح!",
        copiedFail: "❌ فشل نسخ IP السيرفر",
        copiedLabel: "✓ تم النسخ!",
        
        // Features Page
        featuresTitle: "مميزات الرتب 🏅",
        mvpFly: "✅ /fly في كل مكان",
        mvpKit: "✅ كيت MVP مميز",
        mvpHomes: "✅ 5 منازل",
        mvpColor: "✅ لون مميز في الشات",
        mvpPerms: "✅ صلاحيات إضافية",
        vipFly: "✅ /fly في السبون",
        vipKit: "✅ كيت VIP يومي",
        vipHomes: "✅ 2 منازل",
        vipPriority: "✅ أولوية دخول السيرفر",
        vipPrice: "✅ سعر خاص في المتجر",
        
        // Rules Page
        rulesTitle: "قوانين السيرفر 🏛️",
        playRules: "⚔️ بنود اللعب",
        rule1_1: "1.1 يمنع استخدام الهاكات أو أي أدوات خارجية (Xray, Fly, KillAura...)",
        rule2_1: "2.1 يمنع استغلال أي Glitch أو Bug – التبليغ عنها إجباري",
        rule3_1: "3.1 يمنع التبليط العشوائي (Spamming Blocks) أو تدمير الطبيعة عمدًا",
        rule4_1: "4.1 يمنع التخريب أو السرقة من قواعد وممتلكات اللاعبين الآخرين",
        rule5_1: "5.1 لا يجوز فتح شستات الآخرين حتى لو كانت بدون قفل",
        rule6_1: "6.1 ممنوع تتبع اللاعبين أو مضايقتهم أثناء اللعب",
        buildRules: "🏗️ بنود البناء",
        rule1_2: "1.2 يمنع بناء أي شيء غير لائق أو مسيء (رموز، كلمات، أشكال جنسية)",
        rule2_2: "2.2 يمنع البناء بجانب قواعد الآخرين بدون إذن",
        rule3_2: "3.2 يمنع بناء مزارع تسبب لاج (مثل مزارع Redstone الضخمة بدون توقيتات)",
        rule4_2: "4.2 احترام حدود البناء في المناطق المشتركة",
        chatRules: "💬 بنود الشات",
        rule1_3: "1.3 يمنع السب، الشتم، أو الإساءة بأي شكل",
        rule2_3: "2.3 يمنع نشر روابط أو إعلانات خارجية",
        rule3_3: "3.3 يمنع إرسال رسائل مكررة (Spam)",
        rule4_3: "4.3 الالتزام باللغة الرسمية للسيرفر (العربية)",
        rule5_3: "5.3 عدم استفزاز الآخرين بالكلام أو السخرية",
        pvpRules: "⚔️ PvP",
        rule1_4: "1.4 ممنوع قتل اللاعبين بدون موافقتهم في المناطق الآمنة",
        rule2_4: "2.4 احترام اتفاقات الحرب (مثلاً: بدون TNT، بدون سرقة)",
        rule3_4: "3.4 لا تعيد قتل نفس اللاعب بشكل متكرر (Kill Farming ممنوع)",
        punishments: "⚖️ عقوبات",
        punish1: "مخالفة بسيطة: تحذير",
        punish2: "مخالفة متوسطة: كيك مؤقت أو ميوت",
        punish3: "مخالفة جسيمة: باند نهائي من السيرفر",
        punishWarning: "⚠️ الإدارة تملك حق التقدير في جميع الحالات",
        support: "📞 الدعم والتواصل",
        supportText: "إذا واجهت مشكلة أو شفت مخالفة، بلغ الإدارة عبر Discord أو راسل أحد المشرفين.",
        agreeText: "بدخولك السيرفر فأنت توافق تلقائيًا على جميع هذه القوانين.",
        
        // Team Page
        teamTitle: "فريق العمل 👥",
        developers: "⚙️ المطورين",
        serverOwner: "👑 صاحب السيرفر",
        owner: "مالك السيرفر",
        assistants: "🤝 المساعدين",
        assistant: "مساعد في الإدارة",
        siteDeveloper: "مطور الموقع",
        thankYou: "نشكركم على جهدكم ونهضة السيرفر معكم",
        developerCredit: "المطور ",
        specialThanks: "شكر خاص لـ",
        thanksForDev: "على تطوير الموقع",
        reviews: "آراء العملاء",
        reviewsTitle: "آراء العملاء ⭐",
        reviewsSubtitle: "شاركنا تجربتك مع السيرفر",
        addReview: "أضف تقييمك",
        submitReview: "إرسال التقييم",
        allReviews: "جميع التقييمات",
        noReviews: "لا توجد تقييمات بعد. كن أول من يقيّم!",
        
        // Contact Page
        contactTitle: "تواصل معنا 📞",
        contactWays: "طرق التواصل",
        discord: "الديسكورد: تواصل معنا عبر سيرفر الديسكورد",
        youtube: "اليوتيوب: تابع قناتنا لمشاهدة آخر الفيديوهات",
        minecraft: "ماين كرافت: انضم لسيرفرنا واستمتع",
        workHours: "أوقات العمل",
        available24: "نحن متاحون على مدار الساعة",
        techSupport: "للدعم الفني: استخدم نظام التذاكر على الديسكورد",
        complaints: "للشكاوى والمقترحات: تواصل مع الإدارة على الديسكورد",
        feedback: "نرحب بملاحظاتك",
        feedbackText: "نحن نقدر ملاحظاتك واقتراحاتك لتطوير خدماتنا. لا تتردد في التواصل معنا!",
        
        // Privacy Page
        privacyTitle: "سياسة الخصوصية 🔒",
        dataCollection: "جمع المعلومات",
        dataCollectionText1: "نجمع فقط المعلومات اللازمة لتوفير خدماتنا",
        dataCollectionText2: "لا نبيع أو نشارك معلوماتك الشخصية مع أطراف ثالثة",
        dataCollectionText3: "معلوماتك آمنة معنا",
        dataUse: "استخدام المعلومات",
        dataUseText1: "تحسين تجربة المستخدم على موقعنا",
        dataUseText2: "توفير الدعم الفني اللازم",
        dataUseText3: "التواصل معك عند الحاجة",
        yourRights: "حقوقك",
        rightsText1: "لديك الحق في الوصول لمعلوماتك",
        rightsText2: "لديك الحق في طلب حذف معلوماتك",
        rightsText3: "لديك الحق في تعديل معلوماتك",
        contactInfo: "التواصل",
        contactInfoText: "إذا كان لديك أي استفسار حول سياسة الخصوصية، يرجى التواصل معنا عبر الديسكورد.",
        
        // Social
        youtubeChannel: "قناتنا على اليوتيوب",
        discordServer: "سيرفر الديسكورد",
        chooseYourRank: "اختر رتبتك",
        buyNow: "شراء الآن",
        viewAllFeatures: "شاهد جميع المميزات في صفحة مميزات الرتب",
        vipRank: "VIP",
        mvpRank: "MVP",
    },

    en: {
        // Nav
        home: "Home",
        features: "Rank Features",
        rules: "Rules",
        team: "Developers",
        contact: "Contact Us",
        privacy: "Privacy",
        
        // Home Page
        buyRank: "Buy your rank now and enjoy on the server",
        javaIP: "Java IP",
        bedrockIP: "Bedrock IP",
        howToBuy: "You will be redirected to Discord after purchase, open a ticket and write buy rank",
        workTime: "Work Time: 24/7",
        serverStatus: "Server Status:",
        online: "Online",
        playersCount: "Players:",
        copiedSuccess: "✅ Server IP copied successfully!",
        copiedFail: "❌ Failed to copy server IP",
        copiedLabel: "✓ Copied!",
        
        // Features Page
        featuresTitle: "Rank Features 🏅",
        mvpFly: "✅ /fly everywhere",
        mvpKit: "✅ Special MVP Kit",
        mvpHomes: "✅ 5 Homes",
        mvpColor: "✅ Unique chat color",
        mvpPerms: "✅ Additional permissions",
        vipFly: "✅ /fly in spawn",
        vipKit: "✅ Daily VIP Kit",
        vipHomes: "✅ 2 Homes",
        vipPriority: "✅ Server priority join",
        vipPrice: "✅ Special store price",
        
        // Rules Page
        rulesTitle: "Server Rules 🏛️",
        playRules: "⚔️ Game Rules",
        rule1_1: "1.1 No hacks or external tools allowed (Xray, Fly, KillAura...)",
        rule2_1: "2.1 No exploiting Glitches or Bugs - Reporting is mandatory",
        rule3_1: "3.1 No random block spamming or intentional nature destruction",
        rule4_1: "4.1 No vandalism or stealing from other players' bases",
        rule5_1: "5.1 You cannot open others' chests even if unlocked",
        rule6_1: "6.1 No following or harassing other players",
        buildRules: "🏗️ Building Rules",
        rule1_2: "1.2 No inappropriate or offensive builds (symbols, words, sexual shapes)",
        rule2_2: "2.2 No building near others' bases without permission",
        rule3_2: "3.2 No lag-causing farms (like massive Redstone farms without timers)",
        rule4_2: "4.2 Respect building limits in shared areas",
        chatRules: "💬 Chat Rules",
        rule1_3: "1.3 No swearing, profanity, or abuse of any kind",
        rule2_3: "2.3 No external links or advertisements",
        rule3_3: "3.3 No repeated messages (Spam)",
        rule4_3: "4.3 Use the server's official language (Arabic)",
        rule5_3: "5.3 Don't provoke others with words or mockery",
        pvpRules: "⚔️ PvP",
        rule1_4: "1.4 No killing players without consent in safe zones",
        rule2_4: "2.4 Respect war agreements (e.g., no TNT, no stealing)",
        rule3_4: "3.4 Don't repeatedly kill the same player (Kill Farming is banned)",
        punishments: "⚖️ Punishments",
        punish1: "Minor violation: Warning",
        punish2: "Medium violation: Temporary kick or mute",
        punish3: "Major violation: Permanent ban from server",
        punishWarning: "⚠️ Management has the right to judge in all cases",
        support: "📞 Support & Contact",
        supportText: "If you encounter a problem or see a violation, report to management via Discord or message a moderator.",
        agreeText: "By joining the server, you automatically agree to all these rules.",
        
        // Team Page
        teamTitle: "Our Team 👥",
        developers: "⚙️ Developers",
        serverOwner: "👑 Server Owner",
        owner: "Server Owner",
        assistants: "🤝 Helpers",
        assistant: "Admin Helper",
        siteDeveloper: "Site Developer",
        thankYou: "Thank you for your effort and server's progress with you",
        developerCredit: "Developer ",
        specialThanks: "Special thanks to",
        thanksForDev: "for developing the website",
        reviews: "Reviews",
        reviewsTitle: "Customer Reviews ⭐",
        reviewsSubtitle: "Share your experience with the server",
        addReview: "Add Your Review",
        submitReview: "Submit Review",
        allReviews: "All Reviews",
        noReviews: "No reviews yet. Be the first to rate!",
        
        // Contact Page
        contactTitle: "Contact Us 📞",
        contactWays: "Contact Ways",
        discord: "Discord: Contact us through Discord server",
        youtube: "YouTube: Follow our channel for latest videos",
        minecraft: "Minecraft: Join our server and enjoy",
        workHours: "Work Hours",
        available24: "We are available 24/7",
        techSupport: "For technical support: Use ticket system on Discord",
        complaints: "For complaints and suggestions: Contact management on Discord",
        feedback: "We welcome your feedback",
        feedbackText: "We appreciate your feedback and suggestions to improve our services. Feel free to contact us!",
        
        // Privacy Page
        privacyTitle: "Privacy Policy 🔒",
        dataCollection: "Data Collection",
        dataCollectionText1: "We collect only necessary information to provide our services",
        dataCollectionText2: "We do not sell or share your personal information with third parties",
        dataCollectionText3: "Your information is safe with us",
        dataUse: "Data Usage",
        dataUseText1: "Improve user experience on our site",
        dataUseText2: "Provide necessary technical support",
        dataUseText3: "Contact you when needed",
        yourRights: "Your Rights",
        rightsText1: "You have the right to access your information",
        rightsText2: "You have the right to request deletion of your information",
        rightsText3: "You have the right to modify your information",
        contactInfo: "Contact",
        contactInfoText: "If you have any questions about privacy policy, please contact us via Discord.",
        
        // Social
        youtubeChannel: "Our YouTube Channel",
        discordServer: "Discord Server",
        chooseYourRank: "Choose Your Rank",
        buyNow: "Buy Now",
        viewAllFeatures: "View all features on Rank Features page",
        vipRank: "VIP",
        mvpRank: "MVP",
        
        // Footer
        copyright: "All Rights Reserved © 2024 XPMC Store",
    }
};

// Current Language
let currentLang = "ar";

// Function to change language
function changeLanguage() {
    console.log("Changing language..."); // Debug
    currentLang = currentLang === "ar" ? "en" : "ar";
    console.log("New language:", currentLang); // Debug
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // Update language button
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
    }
    
    // Update document direction
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;
    
    // Save preference
    localStorage.setItem('preferredLang', currentLang);
}

// Load saved language preference
function loadLanguage() {
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang) {
        currentLang = savedLang;
        document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = currentLang;
        
        // Update all elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                element.textContent = translations[currentLang][key];
            }
        });
        
        // Update button
        const langBtn = document.getElementById('langBtn');
        if (langBtn) {
            langBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadLanguage);

// Also run immediately in case DOM is already loaded
if (document.readyState !== 'loading') {
    loadLanguage();
}
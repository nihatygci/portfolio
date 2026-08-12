/**
 * TRANSLATIONS
 * ---------------------------------------------------------------
 * The only file you need to touch to add, remove or edit a
 * language. script.js reads this object at runtime — it does not
 * contain any hardcoded copy itself.
 *
 * To add a language:
 *   1. Copy the "en" block below and rename its key to the new
 *      language code (e.g. "de", "fr", "ru").
 *   2. Translate every value. Keep the keys exactly as they are —
 *      they're what script.js looks up.
 *   3. Save. A new button appears in the language switcher
 *      automatically — no HTML or JS changes needed.
 *
 * To remove a language, delete its block. If you delete the
 * language currently saved in a visitor's browser, the site falls
 * back to "en" automatically.
 *
 * Brand names (Nihat Yağcı, SAGI Finance, Emek Isıtma, Dentist
 * Clinic, Beauty Studio) and technology names (HTML, PHP, Firebase,
 * etc.) are intentionally NOT in this file — they're the same in
 * every language and stay hardcoded in index.html.
 */

const TRANSLATIONS = {
  en: {
    "meta.title": "Nihat Yağcı — Web Developer",
    "meta.description": "Nihat Yağcı, web developer. Building digital products and websites with a focus on design, usability and performance.",

    "a11y.skipLink": "Skip to content",

    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.logoAria": "Nihat Yağcı — home",
    "nav.primaryAria": "Primary",
    "nav.mobileAria": "Mobile",
    "nav.langAria": "Language",
    "theme.switchToDark": "Switch to dark theme",
    "theme.switchToLight": "Switch to light theme",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",

    "hero.eyebrow": "Portfolio",
    "hero.role": "Web Developer",
    "hero.statement": "I build digital experiences that work.",
    "hero.sub": "Modern websites, digital products and practical digital experiences built with a focus on design, usability and performance.",
    "hero.ctaProjects": "Explore Projects",
    "hero.scroll": "Scroll",

    "project.roleTitle": "Role",
    "project.techTitle": "Technologies",
    "project.highlightsTitle": "Highlights",
    "project.viewProject": "View Project",

    "sagi.category": "Product / Android / Web",
    "sagi.headline": "A finance product built from the ground up.",
    "sagi.description": "SAGI Finance is a personal finance application built to make everyday financial tracking simple and practical. It brings income tracking, expense tracking, budgets and a clear view of financial activity into a single web application, extended to Android through a Trusted Web Activity and backed by Firebase, with its own subscription infrastructure.",
    "sagi.role.product": "Product development",
    "sagi.role.frontend": "Frontend development",
    "sagi.role.android": "Android integration",
    "sagi.role.backend": "Backend/service integration",
    "sagi.highlight.tracking": "Income and expense tracking with a clear day-to-day view",
    "sagi.highlight.budgets": "Budgeting tools to plan and stay on track",
    "sagi.highlight.sync": "Firebase-backed sync of financial activity",
    "sagi.highlight.twa": "Packaged as an Android app through a Trusted Web Activity",
    "sagi.highlight.subscription": "Own subscription infrastructure for premium features",

    "emek.category": "Client Work / Business Website",
    "emek.headline": "A digital presence built for a real business.",
    "emek.description": "Emek Isıtma is a business website and product management system built for a local heating company. It pairs a public-facing site with a database-driven product catalog, giving the business a straightforward way to present and manage what it offers online.",
    "emek.role.fullstack": "Full-stack development",
    "emek.role.ui": "UI implementation",
    "emek.role.backend": "Backend development",
    "emek.role.database": "Database integration",
    "emek.highlight.catalog": "Public business website with a structured product catalog",
    "emek.highlight.admin": "Admin-side product management backed by MySQL",
    "emek.highlight.php": "Custom PHP backend for content and catalog logic",
    "emek.highlight.responsive": "Responsive layout built with Bootstrap",

    "demos.title": "Websites built to explore ideas.",
    "demos.sub": "A collection of independent website concepts created to explore different visual identities, industries and user experiences.",
    "demos.dentist.category": "Healthcare — Website Concept",
    "demos.beauty.category": "Lifestyle — Website Concept",
    "demos.viewDemo": "View demo",

    "about.title": "Building things is how I learn.",
    "about.lead": "I'm Nihat, a web developer focused on turning ideas into working digital products.",
    "about.text": "My work sits between design and development — websites, web applications and the practical details in between. I learn mostly by making things: shipping a product, seeing where it breaks, and improving it. That process shapes how I think about usability and performance, not as an afterthought but as part of how something is built from the start.",
    "about.closing": "I don't just want to write code. I want to build things worth using.",

    "approach.word1": "Simple.",
    "approach.word2": "Purposeful.",
    "approach.word3": "Built to last.",
    "approach.line1": "Design with intention.",
    "approach.line2": "Code with purpose.",
    "approach.line3": "Build without unnecessary complexity.",

    "capabilities.title": "Capabilities",
    "capabilities.web.title": "Web Development",
    "capabilities.web.text": "Modern responsive websites, business websites and focused web experiences.",
    "capabilities.digital.title": "Digital Products",
    "capabilities.digital.text": "Web applications and practical digital products built around real user needs.",
    "capabilities.fullstack.title": "Full-Stack Solutions",
    "capabilities.fullstack.text": "Frontend interfaces backed by PHP, databases, Firebase and custom application logic.",
    "capabilities.product.title": "Product Thinking",
    "capabilities.product.text": "Turning an idea into something usable, testable and continuously improvable.",

    "contact.title1": "Have a project in mind?",
    "contact.title2": "Let's build it.",
    "contact.sub": "Have an idea, a business that needs a better digital presence, or a product you want to bring to life?",
    "contact.emailLabel": "Email",

    "footer.role": "Web Developer & Digital Product Builder",
    "footer.navAria": "Footer",

    "modal.eyebrow": "Live Preview",
    "modal.loading": "Loading demo…",
    "modal.blockedText": "Demo cannot be embedded here.",
    "modal.openNewTab": "Open demo in new tab",
    "modal.openFullPage": "Open Full Page",
    "modal.closeAria": "Close live preview",
    "modal.livePreviewSuffix": "live preview",
  },

  tr: {
    "meta.title": "Nihat Yağcı — Web Geliştirici",
    "meta.description": "Nihat Yağcı, web geliştirici. Tasarım, kullanılabilirlik ve performansa odaklanarak dijital ürünler ve web siteleri geliştiriyor.",

    "a11y.skipLink": "İçeriğe geç",

    "nav.projects": "Projeler",
    "nav.about": "Hakkımda",
    "nav.contact": "İletişim",
    "nav.logoAria": "Nihat Yağcı — anasayfa",
    "nav.primaryAria": "Ana menü",
    "nav.mobileAria": "Mobil menü",
    "nav.langAria": "Dil",
    "theme.switchToDark": "Koyu temaya geç",
    "theme.switchToLight": "Açık temaya geç",
    "nav.openMenu": "Menüyü aç",
    "nav.closeMenu": "Menüyü kapat",

    "hero.eyebrow": "Portföy",
    "hero.role": "Web Geliştirici",
    "hero.statement": "Çalışan dijital deneyimler tasarlıyorum.",
    "hero.sub": "Tasarım, kullanılabilirlik ve performansa odaklanarak modern web siteleri, dijital ürünler ve pratik dijital deneyimler geliştiriyorum.",
    "hero.ctaProjects": "Projeleri İncele",
    "hero.scroll": "Kaydır",

    "project.roleTitle": "Rol",
    "project.techTitle": "Teknolojiler",
    "project.highlightsTitle": "Öne Çıkanlar",
    "project.viewProject": "Projeyi Gör",

    "sagi.category": "Ürün / Android / Web",
    "sagi.headline": "Sıfırdan inşa edilmiş bir finans ürünü.",
    "sagi.description": "SAGI Finance, günlük finansal takibi basit ve pratik hale getirmek için geliştirilmiş bir kişisel finans uygulaması. Gelir takibi, gider takibi, bütçeler ve finansal hareketlerin net bir görünümünü tek bir web uygulamasında bir araya getiriyor; Trusted Web Activity ile Android'e taşınmış, Firebase altyapısı ve kendi abonelik sistemiyle destekleniyor.",
    "sagi.role.product": "Ürün geliştirme",
    "sagi.role.frontend": "Frontend geliştirme",
    "sagi.role.android": "Android entegrasyonu",
    "sagi.role.backend": "Backend/servis entegrasyonu",
    "sagi.highlight.tracking": "Net bir günlük görünümle gelir ve gider takibi",
    "sagi.highlight.budgets": "Planlamayı ve takibi kolaylaştıran bütçeleme araçları",
    "sagi.highlight.sync": "Firebase destekli finansal veri senkronizasyonu",
    "sagi.highlight.twa": "Trusted Web Activity ile Android uygulaması olarak paketlendi",
    "sagi.highlight.subscription": "Premium özellikler için kendi abonelik altyapısı",

    "emek.category": "Müşteri İşi / Kurumsal Web Sitesi",
    "emek.headline": "Gerçek bir işletme için inşa edilmiş dijital varlık.",
    "emek.description": "Emek Isıtma, yerel bir ısıtma firması için geliştirilmiş bir kurumsal web sitesi ve ürün yönetim sistemi. Herkese açık siteyi veritabanı destekli bir ürün kataloğuyla birleştirerek işletmeye sunduklarını çevrimiçi olarak sunma ve yönetme imkanı sağlıyor.",
    "emek.role.fullstack": "Full-stack geliştirme",
    "emek.role.ui": "Arayüz geliştirme",
    "emek.role.backend": "Backend geliştirme",
    "emek.role.database": "Veritabanı entegrasyonu",
    "emek.highlight.catalog": "Yapılandırılmış ürün kataloğuna sahip kurumsal web sitesi",
    "emek.highlight.admin": "MySQL destekli yönetici tarafı ürün yönetimi",
    "emek.highlight.php": "İçerik ve katalog mantığı için özel PHP backend",
    "emek.highlight.responsive": "Bootstrap ile geliştirilmiş responsive tasarım",

    "demos.title": "Fikirleri keşfetmek için inşa edilmiş web siteleri.",
    "demos.sub": "Farklı görsel kimlikleri, sektörleri ve kullanıcı deneyimlerini keşfetmek için oluşturulmuş bağımsız web sitesi konseptlerinden oluşan bir koleksiyon.",
    "demos.dentist.category": "Sağlık — Web Sitesi Konsepti",
    "demos.beauty.category": "Yaşam Tarzı — Web Sitesi Konsepti",
    "demos.viewDemo": "Demoyu gör",

    "about.title": "Bir şeyler inşa etmek, benim öğrenme şeklim.",
    "about.lead": "Ben Nihat, fikirleri çalışan dijital ürünlere dönüştürmeye odaklanan bir web geliştiriciyim.",
    "about.text": "Çalışmalarım tasarım ve geliştirme arasında yer alıyor — web siteleri, web uygulamaları ve aradaki pratik detaylar. Çoğunlukla yaparak öğreniyorum: bir ürünü yayına almak, nerede kırıldığını görmek ve geliştirmek. Bu süreç, kullanılabilirlik ve performansı sonradan eklenen bir düşünce değil, bir şeyin baştan nasıl inşa edildiğinin bir parçası olarak görmemi sağlıyor.",
    "about.closing": "Sadece kod yazmak istemiyorum. Kullanmaya değer şeyler inşa etmek istiyorum.",

    "approach.word1": "Basit.",
    "approach.word2": "Amaca yönelik.",
    "approach.word3": "Kalıcı olacak şekilde.",
    "approach.line1": "Niyetle tasarla.",
    "approach.line2": "Amaçla kodla.",
    "approach.line3": "Gereksiz karmaşıklık olmadan inşa et.",

    "capabilities.title": "Yetkinlikler",
    "capabilities.web.title": "Web Geliştirme",
    "capabilities.web.text": "Modern responsive web siteleri, kurumsal web siteleri ve odaklı web deneyimleri.",
    "capabilities.digital.title": "Dijital Ürünler",
    "capabilities.digital.text": "Gerçek kullanıcı ihtiyaçları etrafında inşa edilmiş web uygulamaları ve pratik dijital ürünler.",
    "capabilities.fullstack.title": "Full-Stack Çözümler",
    "capabilities.fullstack.text": "PHP, veritabanları, Firebase ve özel uygulama mantığıyla desteklenen frontend arayüzler.",
    "capabilities.product.title": "Ürün Düşüncesi",
    "capabilities.product.text": "Bir fikri kullanılabilir, test edilebilir ve sürekli geliştirilebilir bir şeye dönüştürmek.",

    "contact.title1": "Aklında bir proje mi var?",
    "contact.title2": "Hadi inşa edelim.",
    "contact.sub": "Bir fikrin mi var, daha iyi bir dijital varlığa ihtiyacı olan bir işletmen mi, yoksa hayata geçirmek istediğin bir ürün mü?",
    "contact.emailLabel": "E-posta",

    "footer.role": "Web Geliştirici & Dijital Ürün Üreticisi",
    "footer.navAria": "Alt bilgi menüsü",

    "modal.eyebrow": "Canlı Önizleme",
    "modal.loading": "Demo yükleniyor…",
    "modal.blockedText": "Demo burada gösterilemiyor.",
    "modal.openNewTab": "Demoyu yeni sekmede aç",
    "modal.openFullPage": "Tam Sayfada Aç",
    "modal.closeAria": "Canlı önizlemeyi kapat",
    "modal.livePreviewSuffix": "canlı önizleme",
  },
};

// Language codes render in this order in the switcher. Any language
// present in TRANSLATIONS but missing here is still appended
// automatically, so you never have to touch this for a new language
// to work — this only controls left-to-right button order.
const LANG_ORDER = ["tr", "en"];
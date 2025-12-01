console.log("AllCfood multilingual script active!");

// ---------- TRANSLATIONS ----------
const translations = {
  en: {
    // MENU
    "menu-home": "Home",
    "menu-shop": "Shop",
    "menu-about": "About",
    "menu-contact": "Contact",
    "menu-offers": "Instant Offers",
    "menu-prompt": "Write Your Prompt",
    "menu-coffee": "Coffee Bar",

    // CONTACT PAGE
    "contact-title": "Welcome to AllCfood Shop",
    "contact-text": "Here you can write for us instantly.",

    // OFFERS PAGE
    "offers-title": "Instant Offers",
    "offers-description": "Check out our latest deals and special food offers!",
    "offer1-title": "Spicy Vegan Wrap",
    "offer1-text": "20% off — today only!",
    "offer2-title": "Italian Pizza Combo",
    "offer2-text": "Buy 1 get 1 free 🍕",

    // ABOUT PAGE
    "about-title": "About AllCfood",
    "about-text": "In this website you can find your favorite food from your original country from original producers.",

    // SHOP PAGE
    "shop-title": "Shop",
    "shop-text": "Browse our selection of authentic foods from around the world.",
    "shop-text2": "Here you can find ingredients and products to make your favorite dishes at home.",

    // PROMPT PAGE
    "prompt-title": "Write Your Prompt",
    "prompt-text": "Describe what food you want. We will recommend the best match!",

    // COFFEE PAGE
    "coffee-title": "Coffee & Tea",
    "coffee-text": "Explore our exclusive selection of coffees and teas.",

    // ESSENCE PAGE
    "essence-title": "Essence",
    "essence-description": "This is the essence page."
  },

  de: {
    // MENU
    "menu-home": "Startseite",
    "menu-shop": "Shop",
    "menu-about": "Über uns",
    "menu-contact": "Kontakt",
    "menu-offers": "Sofortangebote",
    "menu-prompt": "Prompt schreiben",
    "menu-coffee": "Kaffeebar",

    // CONTACT PAGE
    "contact-title": "Willkommen im AllCfood Shop",
    "contact-text": "Hier können Sie uns sofort schreiben.",

    // OFFERS PAGE
    "offers-title": "Sofortangebote",
    "offers-description": "Sehen Sie sich unsere neuesten Angebote und Spezialaktionen an!",
    "offer1-title": "Würziger veganer Wrap",
    "offer1-text": "20% Rabatt — nur heute!",
    "offer2-title": "Italienisches Pizza-Kombo",
    "offer2-text": "Kaufe 1, erhalte 1 gratis 🍕",

    // ABOUT PAGE
    "about-title": "Über AllCfood",
    "about-text": "Auf dieser Website finden Sie Ihre Lieblingsgerichte aus Ihrem Heimatland.",

    // SHOP PAGE
    "shop-title": "Shop",
    "shop-text": "Stöbern Sie in unserer Auswahl an authentischen Lebensmitteln aus aller Welt.",
    "shop-text2": "Hier finden Sie Zutaten und Produkte, um Ihre Lieblingsgerichte zu Hause zuzubereiten.",

    // PROMPT PAGE
    "prompt-title": "Prompt schreiben",
    "prompt-text": "Beschreiben Sie das gewünschte Essen. Wir empfehlen die beste Option!",

    // COFFEE PAGE
    "coffee-title": "Kaffee & Tee",
    "coffee-text": "Entdecken Sie unsere exklusive Auswahl an Kaffees und Tees.",

    // ESSENCE PAGE
    "essence-title": "Essenz",
    "essence-description": "Dies ist die Essenz-Seite."
  },

  fa: {
    // MENU
    "menu-home": "خانه",
    "menu-shop": "فروشگاه",
    "menu-about": "درباره ما",
    "menu-contact": "تماس با ما",
    "menu-offers": "پیشنهادهای فوری",
    "menu-prompt": "نوشتن پرامپت",
    "menu-coffee": "کافی‌بار",

    // CONTACT PAGE
    "contact-title": "به فروشگاه AllCfood خوش آمدید",
    "contact-text": "اینجا می‌توانید فوراً برای ما بنویسید.",

    // OFFERS PAGE
    "offers-title": "پیشنهادهای فوری",
    "offers-description": "جدیدترین تخفیف‌ها و پیشنهادهای غذایی را اینجا ببینید!",
    "offer1-title": "رپ وگان تند",
    "offer1-text": "۲۰٪ تخفیف — فقط امروز!",
    "offer2-title": "پیتزا ایتالیایی",
    "offer2-text": "یک بخر، یکی رایگان 🍕",

    // ABOUT PAGE
    "about-title": "درباره آل‌سی‌فود",
    "about-text": "در این وب‌سایت می‌توانید غذای مورد علاقه از کشور خود را از تولیدکنندگان اصلی پیدا کنید.",

    // SHOP PAGE
    "shop-title": "فروشگاه",
    "shop-text": "از میان مجموعه‌ای از غذاهای اصیل کشورهای مختلف انتخاب کنید.",
    "shop-text2": "اینجا می‌توانید مواد اولیه و محصولات لازم برای تهیه غذاهای مورد علاقه خود را پیدا کنید.",

    // PROMPT PAGE
    "prompt-title": "نوشتن پرامپت",
    "prompt-text": "غذای مورد نظر خود را توصیف کنید. ما بهترین پیشنهاد را ارائه می‌دهیم!",

    // COFFEE PAGE
    "coffee-title": "قهوه و چای",
    "coffee-text": "مجموعه‌ای از قهوه‌ها و چای‌های ویژه را بررسی کنید.",

    // ESSENCE PAGE
    "essence-title": "اسانس",
    "essence-description": "این صفحه اسانس است."
  },

  ru: {
    // MENU
    "menu-home": "Главная",
    "menu-shop": "Магазин",
    "menu-about": "О нас",
    "menu-contact": "Контакты",
    "menu-offers": "Мгновенные предложения",
    "menu-prompt": "Написать промпт",
    "menu-coffee": "Кофейный бар",

    // CONTACT PAGE
    "contact-title": "Добро пожаловать в магазин AllCfood",
    "contact-text": "Здесь вы можете написать нам мгновенно.",

    // OFFERS PAGE
    "offers-title": "Мгновенные предложения",
    "offers-description": "Посмотрите наши последние акции и специальные предложения!",
    "offer1-title": "Острый веганский ролл",
    "offer1-text": "Скидка 20% — только сегодня!",
    "offer2-title": "Итальянская пицца-комбо",
    "offer2-text": "Купи 1 — получи 1 бесплатно 🍕",

    // ABOUT PAGE
    "about-title": "О AllCfood",
    "about-text": "Здесь вы найдете любимую еду из вашей страны от оригинальных производителей.",

    // SHOP PAGE
    "shop-title": "Магазин",
    "shop-text": "Изучите наш ассортимент аутентичных продуктов со всего мира.",
    "shop-text2": "Здесь вы найдете ингредиенты и продукты для любимых блюд дома.",

    // PROMPT PAGE
    "prompt-title": "Написать промпт",
    "prompt-text": "Опишите, какую еду вы хотите. Мы подберем лучший вариант!",

    // COFFEE PAGE
    "coffee-title": "Кофе и чай",
    "coffee-text": "Откройте для себя наш эксклюзивный выбор кофе и чая."
  }
};

export enum Languages {
  EN = "en",
  UA = "ua",
}

interface NavigationMenu {
  title: string;
  id: string;
}

interface TranslationStructure {
  navigation: {
    menu: NavigationMenu[];
    languages: {
      name: string;
      id: Languages;
    }[];
  };
  hero: {
    title: string;
    subtitle: string;
  };
  about: {
    description: string;
    showCase: string[];
  };
  check: {
    description: string;
    buttonLabel: string;
  };
  contacts: {
    description: string;
    separator: string;
    form: {
      title: string;
      button: string;
      placeHolders: {
        name: string;
        phone: string;
        message: string;
      };
      errors: {
        name: string;
        phone: string;
        message: string;
      };
    };
  };
  footer: {
    copyRight: string;
    madeBy: string;
    title: string;
  };
  levelCheck: {
    title: string;
    description: string;
    actionButton: string;
  };
}

interface Locale {
  ua: TranslationStructure;
  en: TranslationStructure;
}

const year = new Date().getFullYear();

export const locale: Locale = {
  ua: {
    navigation: {
      menu: [
        {
          title: "Головна",
          id: "#hero",
        },
        {
          title: "Про Мене",
          id: "#about",
        },
        {
          title: "Тест",
          id: "#check",
        },
        {
          title: "Контакти",
          id: "#contacts",
        },
      ],
      languages: [
        {
          name: "АНГ",
          id: Languages.EN,
        },
        {
          name: "УКР",
          id: Languages.UA,
        },
      ],
    },
    hero: {
      title: "Англійська",
      subtitle: "Це Просто",
    },
    about: {
      description:
        "Привіт, мене звати Катерина, і я досвідчений викладач англійської мови з більш ніж 12-річним досвідом викладання. Моя пристрасть до викладання англійської походить з бажання допомогти студентам поліпшити їх мовні навички, неважливо чи вони тільки починають вивчати цю мову чи прагнуть розвиватися далі.",
      showCase: [
        "Комунікація",
        "Можливості",
        "Подорожі",
        "Дружба",
        "Глобалізація",
      ],
    },
    check: {
      description:
        "Готові визначити рівень володіння англійською мовою? Розпочніть ваш індивідуальний тест на рівень англійської зараз і отримайте план навчання, щоб досягти ваших мовних цілей!",
      buttonLabel: "Розпочати Тест",
    },
    contacts: {
      description:
        "Якщо в у вас є будь-які питання, бажання забронювати урок або просто сказати 'привіт', не соромтеся зв'язатися зі мною. Я завжди рада поспілкуватися зі своїми студентами та колегами",
      form: {
        title: "Напишіть мені",
        button: "Надіслати",
        placeHolders: {
          name: "Ім'я",
          phone: "Телефон",
          message: "Повідомлення",
        },
        errors: {
          name: "Введіть ім'я",
          phone: "Введіть телефон у форматі 0ХХХХХХХХХ",
          message: "Введіть повідомлення",
        },
      },
      separator: "Або",
    },
    footer: {
      copyRight: `© ${year} Котович`,
      madeBy: "Розроблено Озарком",
      title: "Слава Україні",
    },
    levelCheck: {
      title: "Тест на знання англійської мови",
      description:
        'Ласкаво прошу до тесту на знання англійської мови. Цей тест призначений для вимірювання вашого рівня знання та вмінь англійської мови. Він складається з запитань типу "багато варіантів відповіді", які охоплюють різні аспекти мови, такі як граматика, словниковий запас, та розуміння прочитаного.',
      actionButton: "Розпочати тест",
    },
  },
  en: {
    navigation: {
      menu: [
        {
          title: "Home",
          id: "#hero",
        },
        {
          title: "About Me",
          id: "#about",
        },
        {
          title: "English Test",
          id: "#check",
        },
        {
          title: "Contacts",
          id: "#contacts",
        },
      ],
      languages: [
        {
          name: "ENG",
          id: Languages.EN,
        },
        {
          name: "UKR",
          id: Languages.UA,
        },
      ],
    },
    hero: {
      title: "English",
      subtitle: "Is Easy",
    },
    about: {
      description:
        "Hi, my name is Katerina, and I'm an experienced English teacher with over 12 years of teaching experience. My passion for teaching English stems from a desire to help students improve their language skills, whether they are just beginning or looking to advance.",
      showCase: [
        "Communication",
        "Opportunities",
        "Travel",
        "Friendship",
        "Globalization",
      ],
    },
    check: {
      description:
        "Ready to discover your English language proficiency? Start your custom English level check now and get matched with the perfect learning plan to help you achieve your language goals!",
      buttonLabel: "Start Check",
    },
    contacts: {
      description:
        "If you have any questions, want to book a lesson, or just say hello, feel free to get in touch with me. I am always happy to hear from my students and colleagues.",
      form: {
        title: "Write to me",
        button: "Send Message",
        placeHolders: {
          name: "Name",
          phone: "Phone",
          message: "Message",
        },
        errors: {
          name: "Enter your name",
          phone: "Enter phone number in format 0ХХХХХХХХХ",
          message: "Enter your message",
        },
      },
      separator: "Or",
    },
    footer: {
      copyRight: `© ${year} Kotovych`,
      madeBy: "Made by Ozarko",
      title: "GLORY TO UKRAINE",
    },
    levelCheck: {
      title: "English Level Check",
      description:
        "Welcome to the English proficiency test. This test is designed to measure your level of English knowledge and skills. It consists of multiple choice questions covering various areas of the language such as grammar, vocabulary, reading comprehension and listening.",
      actionButton: "Start Test",
    },
  },
};

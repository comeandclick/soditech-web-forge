import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Translation dictionaries
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.solutions': 'Our Solutions',
    'nav.partnerships': 'Partnerships',
    'nav.environment': 'Environmental Commitment',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Get Quote',
    'nav.contactUs': 'Contact Us',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'Qui Sommes Nous',
    'nav.solutions': 'Nos Solutions',
    'nav.partnerships': 'Partenariats',
    'nav.environment': 'Engagement Environnemental',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Devis',
    'nav.contactUs': 'Nous Contacter',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.solutions': 'حلولنا',
    'nav.partnerships': 'الشراكات',
    'nav.environment': 'الالتزام البيئي',
    'nav.contact': 'اتصل بنا',
    'nav.getQuote': 'طلب عرض سعر',
    'nav.contactUs': 'اتصل بنا',
  }
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
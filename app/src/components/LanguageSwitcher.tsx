import { motion, AnimatePresence } from 'motion/react';
import { useI18n } from '../i18n/I18nProvider';
import { Languages } from 'lucide-react';
import { useState, useEffect } from 'react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log('LanguageSwitcher mounted, current language:', language);
  }, [language]);

  const languages = [
    { code: 'en' as const, name: 'English', flag: '🇺🇸' },
    { code: 'pt-BR' as const, name: 'Português', flag: '🇧🇷' },
  ];

  const currentLang = languages.find(l => l.code === language);

  const handleLanguageChange = (langCode: 'en' | 'pt-BR') => {
    console.log('Language button clicked:', langCode);
    console.log('Current language before change:', language);
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed top-4 right-4 z-[9999]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900/90 backdrop-blur-md border border-purple-500/50 rounded-lg text-purple-300 hover:text-purple-200 hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
          >
            <Languages className="w-4 h-4" />
            <span className="text-xl">{currentLang?.flag}</span>
            <span className="hidden sm:inline">{currentLang?.name}</span>
            <motion.svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="ml-1"
            >
              <path
                d="M2 4L6 8L10 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-md border border-purple-500/50 rounded-lg overflow-hidden shadow-xl"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 ${
                      language === lang.code
                        ? 'bg-purple-600/30 text-purple-200 border-l-4 border-purple-500'
                        : 'text-purple-300 hover:bg-purple-500/10 hover:text-purple-200'
                    }`}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="flex-1">{lang.name}</span>
                    {language === lang.code && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 rounded-full bg-purple-400"
                      />
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9998]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
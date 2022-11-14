import { useCallback, useState } from "react";
import { createHead, useHead } from "unhead";
import { SupportedLanguage } from "./LanguageSelector";

const head = createHead();

const LANGUAGE_CLASS: Record<SupportedLanguage, string> = {
  en: 'horizontal',
  ar: 'horizontal',
  mon: 'vertical-lr',
  jp: 'vertical-rl'
};

type Dir = 'ltr' | 'rtl' | 'auto';

const LANGUAGE_DIR: Record<SupportedLanguage, Dir> = {
  en: 'ltr',
  ar: 'rtl',
  mon: 'auto',
  jp: 'auto',
};

type UseLang = [ SupportedLanguage, (newLang: SupportedLanguage) => void ];

export function useLang(): UseLang {
    const [language, setCurrentLanguage] = useState<SupportedLanguage>('en');
    const setLanguage = useCallback((newLang: SupportedLanguage = 'en') => {
        const html = document.querySelector('html');
        if (html) {
            html.className = LANGUAGE_CLASS[newLang];
        }
        setCurrentLanguage(newLang);
        useHead({
            htmlAttrs: {
                lang: newLang,
                dir: LANGUAGE_DIR[newLang],
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
        });
    }, []);

    return [
        language,
        setLanguage,
    ];
}
import { EventHandler } from "react";

export type SupportedLanguage = 'en' | 'ar' | 'mon' | 'jp';

export type LanguageSelectorProps = {
    currentLanguage: SupportedLanguage,
    onChange: (newLanguage: SupportedLanguage) => void;
};

const ORDERED_LANGUAGE_OPTIONS: SupportedLanguage[] = ['en', 'ar', 'mon', 'jp'];

const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
    en: 'English',
    ar: 'عربى',
    mon: 'Mongolian',
    jp: '日本語',
};

export function LanguageSelector(props: LanguageSelectorProps) {
    return <select
        value={props.currentLanguage}
        onChange={(e) => props.onChange(e.target.value as SupportedLanguage)}
    >
        { ORDERED_LANGUAGE_OPTIONS.map((languageKey) =>
        <option
            key={languageKey}
            value={languageKey}
        >
            { LANGUAGE_LABELS[languageKey] }
        </option>) }
  </select>;
}
import { EventHandler } from "react";

export type SupportedLanguage = 'en' | 'ar' | 'mon';

export type LanguageSelectorProps = {
    currentLanguage: SupportedLanguage,
    onChange: (newLanguage: SupportedLanguage) => void;
};

const ORDERED_LANGUAGE_OPTIONS: SupportedLanguage[] = ['en', 'ar', 'mon'];

const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
    en: 'English',
    ar: 'Arabic',
    mon: 'Mongolian',
};

export function LanguageSelector(props: LanguageSelectorProps) {
    return <select
        onChange={(e) => props.onChange(e.target.value as SupportedLanguage)}
    >
        { ORDERED_LANGUAGE_OPTIONS.map((languageKey) =>
        <option
            value={languageKey}
            selected={props.currentLanguage === languageKey}
        >
            { LANGUAGE_LABELS[languageKey] }
        </option>) }
  </select>;
}
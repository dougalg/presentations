import './App.css'
import './lang/i18n'
import { LanguageSelector } from './lang/LanguageSelector'
import { useLang } from './lang/useLang'

function App() {
  const [currentLanguage, updateLanguage] = useLang();
  return (
    <div className="App">
      <p>A</p>
      <LanguageSelector
        currentLanguage={currentLanguage}
        onChange={updateLanguage}
      />
      <p>B</p>
      <p>عربى</p>
      <p>عربى</p>
    </div>
  )
}

export default App

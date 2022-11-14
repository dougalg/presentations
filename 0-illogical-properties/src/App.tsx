import './App.css'
import { UserCard, UserCardProps } from './components/UserCard';
import './lang/i18n'
import { LanguageSelector } from './lang/LanguageSelector'
import { useLang } from './lang/useLang'

const userData: UserCardProps = {
  name: 'Dougal Graham',
  role: 'Developer',
  userDescription: 'Some additional information here. Not too long, but not too short either.',
  phone: '+66 123-456-7890',
  email: 'dougal@test.com',
  address: {
    street: '12 Fake Street',
    city: 'Nonthaburi',
    province: 'Krungthep',
    country: 'Thailand',
  },
};

function App() {
  const [currentLanguage, updateLanguage] = useLang();
  return (
    <div className="App">
      <LanguageSelector
        currentLanguage={currentLanguage}
        onChange={updateLanguage}
      />
      <section className='cards'>
        <UserCard {...userData} />
      </section>
    </div>
  )
}

export default App

import Hero from './components/Hero.jsx';
import Concept from './components/Concept.jsx';
import Contact from './components/Contact.jsx';
import './styles/global.css';

function App() {
  return (
    <div className="app-container">
      {/* Navbar will go here */}

      <main>
        <Hero />
        <Concept />
      </main>

      <Contact />
    </div>
  )
}

export default App

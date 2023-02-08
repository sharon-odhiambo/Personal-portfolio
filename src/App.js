import './App.css';
import Navigation from './Nav';
import Works from './Works';
import Skills from './Skills';
import Contacts from './Contacts';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navigation />
      <section id="homepage" className="landing">
        <Home />
      </section>
      <Works />
      <Skills />
      <Contacts />
    </div>
  );
}

export default App;

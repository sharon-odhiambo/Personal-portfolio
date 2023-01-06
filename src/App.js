import './App.css';
import Navigation from './Nav';
import Works from './Works';
import Skills from './Skills';
import Contacts from './Contacts';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <section id="homepage" className="container align-items-center p-0 landing">
        <Navigation />
        <Home />
      </section>
      <Works />
      <Skills />
      <Contacts />
    </div>
  );
}

export default App;

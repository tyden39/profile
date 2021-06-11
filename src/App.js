import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import MySkills from './components/MySkills';
import WelCome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Header />
      <WelCome />
      <About />
      <MySkills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

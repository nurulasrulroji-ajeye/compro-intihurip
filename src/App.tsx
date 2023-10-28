import './App.css';
import { About, Footer, Hero, Mission, Navbar, Product } from './components';

function App() {
  return (
    <div className="w-full bg-white-color ">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Product />
      <Footer />
    </div>
  );
}

export default App;

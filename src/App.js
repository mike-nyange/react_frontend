import './App.scss';
import { About, Footer, Header, Skills, Testimonial, Work} from './Container'
import { Navbar } from './Components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;

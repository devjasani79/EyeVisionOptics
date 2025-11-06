import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Lenses from './components/Lenses';
import About from './components/About';
import Vision from './components/Vision';
import Menu from './components/Menu';
import Contact from './components/Contact';
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Lenses />
      <About />
      <Vision />
      <Menu />
      <Contact />
    </main>
  )
}
export default App;
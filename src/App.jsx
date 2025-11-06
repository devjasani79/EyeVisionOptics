import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Lenses from './components/Lenses';
import About from './components/About';
// import Visionary from './components/Visionary';
import Vision from './components/Vision';
gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Lenses/>
      <About />
    <Vision/>
      {/* <Visionary/> */}
    </main>
  )
}
export default App;
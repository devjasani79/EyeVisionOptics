import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import Lenses from './components/Lenses';
import CustomCursor from './components/CustomCursor';
gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <main>
      {/* <CustomCursor/> */}
      <Navbar/>
      <Hero/>
      {/* <Cocktails/> */}
      <Lenses/>
    </main>
  )
}
export default App;
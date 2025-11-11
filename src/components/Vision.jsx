import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import { featureLists, goodLists } from '../../constants/index.js'

const Vision = () => {
 const isMobile = useMediaQuery({ maxWidth: 767 });
 
 useGSAP(() => {
	const start = isMobile ? 'top 20%' : 'top top';
	
	const maskTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#Vision',
		start,
		end: 'bottom center',
		scrub: 1.5,
		pin: true
	 }
	})
	
	maskTimeline
	 .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut', })
	 .to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut '})
	 .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut'})
 })
 
 return (
	<div id="Vision" className="relative min-h-screen w-full flex flex-col justify-center items-center text-white overflow-hidden px-3 py-1">
	 <div className="container  h-full">
		<h2 className="will-fade">VISIONARY</h2>
		
		<div className="content">
		 <ul className="space-y-4 will-fade">
			{goodLists.map((feature, index) => (
			 <li key={index} className="flex items-center gap-2">
				<img src="/images/check.png" alt="check" />
				<p>{feature}</p>
			 </li>
			))}
		 </ul>
		 
		 <div className="vision-img">
			<img
				src="/images/vision/under-img1.jpg"
				alt="underimg"
				className="abs-center masked-img size-full object-contain"
			/>
		 </div>
		 
		 <ul className="space-y-4 will-fade">
			{featureLists.map((feature, index) => (
			 <li key={index} className="flex items-center justify-start gap-2">
				<img src="/images/check.png" alt="check" />
				<p className="md:w-fit w-60">{feature}</p>
			 </li>
			))}
		 </ul>
		</div>
		
		<div className="masked-container">
		 <h2 className="will-fade">Through the Lens</h2>
		 <div id="masked-content">
            
            <h3>Every Frame, A Story of Precision</h3>
            <p>
              Crafted to enhance clarity and comfort, our optics redefine how
              you see the world. With over{" "}
              <span className="text-[#0078FF] font-semibold">4.8/5</span>{" "}
              satisfaction from customers worldwide, Visionary isn’t just a
              name it’s a promise.
            </p>
		 </div>
		</div>
	 </div>
	</div>
 )
}
export default Vision
import { benefitCard1, benefitCard2, benefitCard3, benefitCard4, benefitCard5, benefitCard6, benefitIcon1, benefitIcon2, benefitIcon3, benefitIcon4, benefitImage2, benefitgradient } from "../assets"
import Heading from "./designs/Heading"
import Section from "./Section"
import Arrow from './../assets/svg/Arrow'
import ClipPath from '../assets/svg/ClipPath'


const Benefits = () => {
  return (
    <Section id='features'>
        <div className="container relative z-2">
            <Heading 
                className='md:max-w-md lg:max-w-2xl'
                title='Chart Smarter, Not Harder WIth Brainwave'
            />
        </div>
        <div className="flex flex-wrap gap-10 mb-10 justify-center">
          <div className="benefit-card" style={{backgroundImage: `url(${benefitCard1})`}}>
            <div className="innerBenefitCard ">
              <h5 className="h5 mb-5">Ask anything</h5>
              <p className="body-2 mb-6 text-n-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum odio vero rem, illo hic quibusdam?</p>
              <div className="flex items-center mt-auto">
                <img src={benefitIcon1} alt="benefit" />
                <p className="moreIcon">Explore more</p>
                <Arrow />
              </div>
            </div>
            <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
              <div className="absolute inset-0 opacity-10 transition-opacity hover:opacity-40">
                <img 
                 src={benefitImage2}
                 height={380}
                 width={362}
                 alt="ask"
                 className="w-full h-full object-cover"
                 />
              </div>
            </div>
            <ClipPath />
          </div>
          <div className="benefit-card" style={{backgroundImage: `url(${benefitCard2})`}}>
            <div className="innerBenefitCard ">
              <h5 className="h5 mb-5">Improve everyday</h5>
              <p className="body-2 mb-6 text-n-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum odio vero rem, illo hic quibusdam?</p>
              <div className="flex items-center mt-auto">
                <img src={benefitIcon2} alt="icon" />
              </div>
            </div>
            <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
              <div className="absolute inset-0 opacity-10 transition-opacity hover:opacity-40">
                <img 
                 src={benefitImage2}
                 height={380}
                 width={362}
                 alt="ask"
                 className="w-full h-full object-cover"
                 />
              </div>
              
            </div>
            <ClipPath />
            <div className="absolute -top-[30%] -z-[99] left-[40%] w-full">
              <img src={benefitgradient}
              className="relative" 
              width={1440}
              height={1800}
              alt="heroBackground" />
            </div>
          </div>
          <div className="benefit-card" style={{backgroundImage: `url(${benefitCard3})`}}>
            <div className="innerBenefitCard ">
              <h5 className="h5 mb-5">Connect everywhere</h5>
              <p className="body-2 mb-6 text-n-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum odio vero rem, illo hic quibusdam?</p>
              <div className="flex items-center mt-auto">
                <img src={benefitIcon3} alt="benefit" />
                <p className="moreIcon">Explore more</p>
                <Arrow />
              </div>
            </div>
            <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
              <div className="absolute inset-0 opacity-10 transition-opacity hover:opacity-40">
                <img 
                 src={benefitImage2}
                 height={380}
                 width={362}
                 alt="ask"
                 className="w-full h-full object-cover"
                 />
              </div>
            </div>
            <ClipPath />
          </div>
          <div className="benefit-card" style={{backgroundImage: `url(${benefitCard4})`}}>
            <div className="innerBenefitCard ">
              <h5 className="h5 mb-5">Fast responding</h5>
              <p className="body-2 mb-6 text-n-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum odio vero rem, illo hic quibusdam?</p>
              <div className="flex items-center mt-auto">
                <img src={benefitIcon4} alt="benefit" />
                <p className="moreIcon">Explore more</p>
                <Arrow />
              </div>
            </div>
            <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
              <div className="absolute inset-0 opacity-10 transition-opacity hover:opacity-40">
                <img 
                 src={benefitImage2}
                 height={380}
                 width={362}
                 alt="ask"
                 className="w-full h-full object-cover"
                 />
              </div>
            </div>
            <ClipPath />
            <div className="absolute -top-[30%] -z-[99] left-[40%] w-full">
              <img src={benefitgradient}
              className="relative fill-slate-500" 
              width={1440}
              height={1800}
              alt="heroBackground" />
            </div>
          </div>
          <div className="benefit-card" style={{backgroundImage: `url(${benefitCard5})`}}>
            <div className="innerBenefitCard ">
              <h5 className="h5 mb-5">Ask anything</h5>
              <p className="body-2 mb-6 text-n-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum odio vero rem, illo hic quibusdam?</p>
              <div className="flex items-center mt-auto">
                <img src={benefitIcon1} alt="benefit" />
                <p className="moreIcon">Explore more</p>
                <Arrow />
              </div>
            </div>
            <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
              <div className="absolute inset-0 opacity-10 transition-opacity hover:opacity-40">
                <img 
                 src={benefitImage2}
                 height={380}
                 width={362}
                 alt="ask"
                 className="w-full h-full object-cover"
                 />
              </div>
            </div>
            <ClipPath />
          </div>
          <div className="benefit-card" style={{backgroundImage: `url(${benefitCard6})`}}>
            <div className="innerBenefitCard ">
              <h5 className="h5 mb-5">Improve everyday</h5>
              <p className="body-2 mb-6 text-n-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum odio vero rem, illo hic quibusdam?</p>
              <div className="flex items-center mt-auto">
                <img src={benefitIcon2} alt="benefit" />
                <p className="moreIcon">Explore more</p>
                <Arrow />
              </div>
            </div>
            <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
              <div className="absolute inset-0 opacity-10 transition-opacity hover:opacity-40">
                <img 
                 src={benefitImage2}
                 height={380}
                 width={362}
                 alt="ask"
                 className="w-full h-full object-cover"
                 />
              </div>
            </div>
            <ClipPath />
          </div>
        </div>
    </Section>
  )
}

export default Benefits
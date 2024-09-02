import { smallSphere, stars } from "../assets"
import Heading from "./designs/Heading"
import PricingList from "./designs/PricingList"
import Section from "./Section"


const Pricing = () => {
  return (
    <Section className="overflow-hidden" id='pricing' crosses>
      <div className="container relative z-2">
        <div className="hidden relative justify-center lg:flex">
          <img 
           src={smallSphere}
           className="absolute z-1"
           width={225}
           height={225}
           alt="Sphere"
          />
          <div className=" top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none "> 
            <img src={stars}
            className="w-full"
            width={950}
            height={400}
             alt='stars' />
          </div>
        </div>
        <Heading tag='Get Started with Brainwave' title='Pay Once, Use Forever' />

        <div className="relative">
          <PricingList />
        </div>
      </div>

    </Section>
  )
}

export default Pricing
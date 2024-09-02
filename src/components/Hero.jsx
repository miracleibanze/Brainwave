import { curve, file02, heroBackground, homeSmile, plusSquare, robot, searchMd } from "../assets"
import BackgroundCircles from "./designs/BackgroundCircles"
import Button from "./designs/Button"
import CompanyLogo from "./designs/CompanyLogo"
import Generating from "./designs/Generating"
import Notification from "./designs/Notification"
import Section from "./Section"
import { Rings, Gradient, BottomLine } from "./designs/Hero"


const Hero = () => {
  return (
    <Section 
        className='pt-[12rem] -mt-[5.25rem]'
        crosses
        crossesOffset='lg:translate-y-[5.25rem]'
        customPaddings
        id='hero'
    >
        <div className="container relative">
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
                <div className="max-md:hidden">
                    <BackgroundCircles />
                </div>
                <h1 className="h1 pt-16 py-8 mb-6">Explore the possibilties of&nbsp;AI&nbsp; chatting with the&nbsp;
                    <span className="inline-block relative">Brainwave.<img src={curve} className="absolute top-full w-full left-0 xl:-mt-2" width={624} height={28} alt="curve"/></span>
                </h1>
                
                <p className="body-1 max-w-3xl mx-auto mb-6 lg:mb-8">Unleach the power of AI within Brainwave. Upgade your productivity with Brainwave, the open AI chat app.</p>
                <Button href='/' white>
                    Get started
                </Button>
                <div className="relative max-w-[23rem] mx-auto my-7 md:max-w-4xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl conic-gradient">
                        <div className="relative rounded-[1rem] bg-n-8">
                            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]"/>
                            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                <img src={robot} className="w-full scale-[1.7] translate-y-[10%] md:-translate-y-[10%] md:scale-[1] lg:-translate-y-[22.3%]"
                                width={1024}
                                height={490}
                                alt="AI" />

                                <Generating className="absolute right-4 left-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />    

                                <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl min-[1150px]:flex">
                                    <li className="p-5">
                                        <img src={homeSmile} />
                                    </li>
                                    <li className="p-5">
                                        <img src={searchMd} />
                                    </li>
                                    <li className="p-5">
                                        <img src={file02} />
                                    </li>
                                    <li className="p-5">
                                    <img src={plusSquare} />
                                    </li>
                                </ul>

                                <Notification  className="hidden lg:flex absolute -right-[5.5rem] bottom-[11rem] w-[18rem]"
                                 title="Code Generation"
                                />

                            </div>
                        </div>
                        <Gradient />
                    </div>
                    <div className="absolute -top-[4%] -z-[999] left-1/2 w-full -translate-x-1/2 md:-top-[30%] lg:-top-[63%]">
                        <img src={heroBackground}
                        className="relative md:scale-[1.3] scale-[2] lg:scale-[1.4]" 
                        width={1440}
                        height={1800}
                        alt="heroBackground" />
                    </div>
                    <Rings />
                </div>
            </div>
            <div className="companyLogo"><CompanyLogo className="hidden relative z-10 mt-20 lg:block" /></div>
        </div>
        <BottomLine />
    </Section>
  )
}

export default Hero
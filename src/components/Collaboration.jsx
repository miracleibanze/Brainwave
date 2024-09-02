import Section from "./Section"
import { brainwaveSymbol, check, discord, figma, framer, notion, photoshop, protopie, raindrop, slack } from "../assets"
import Button from './../components/designs/Button'
import { LeftCurve, RightCurve } from "./designs/Collaboration"


const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-2 lg:mb-8">AI Chat for seamless collaboration</h2>
          <ul className="max-w-[22rem] mb-8">
            <li className="mb-2 py-2">
              <div className="flex items-center">
                <img src={check} 
                width={24}
                height={24}
                alt="check" />
                <h6 className="body-2 ml-5">Seamless Integration</h6>

              </div>
                <p className="body-2 mt-3 text-n-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, cupiditate? </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <img src={check} 
                width={24}
                height={24}
                alt="check" />
                <h6 className="body-2 ml-5">Smart Automation</h6>

              </div>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <img src={check} 
                width={24}
                height={24}
                alt="check" />
                <h6 className="body-2 ml-5">Top-notch Security</h6>
                </div></li> 

          </ul>
          <Button>Try It Now</Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4 lg:mt-16">
          <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb:mb-32 lg:w-[22rem] lg:mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laudantium asperiores dolores.
          </p>

          <div className="relative left-1/2 my-8 lg:-mt-8 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:sclale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full"> 
              <div className="w-[6rem] aspect-square m-auto conic-gradient p-[0.2rem] rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>
            <ul>
              <li className="Collabs rotate-0">
                <div className="rotate-0">
                 <img
                    src={figma}
                    alt="Figma"
                    width={34}
                    height={36}
                  />
                </div>
              </li>
              <li className="Collabs rotate-[45deg]">
                <div className="-rotate-[45deg]">
                  <img
                    src={notion}
                    alt="Notion"
                    width={34}
                    height={36}
                  />
                </div>
              </li>
              <li className="Collabs rotate-[90deg]">
                <div className="-rotate-[90deg]">
                  <img
                    src={discord}
                    alt="Discord"
                    width={34}
                    height={36}
                  />
                </div>
              </li>
              <li className="Collabs rotate-[135deg]">
                <div className="-rotate-[135deg]">
                  <img
                    src={slack}
                    alt="Slack"
                    width={34}
                    height={36}
                  />
                </div>
              </li>
              <li className="Collabs rotate-[180deg]">
                <div className="rotate-[180deg]">
                  <img
                    src={photoshop}
                    alt="PhotoShop"
                    width={34}
                    height={36}
                  />
                </div>
              </li>
              <li className="Collabs rotate-[225deg]">
                <div className="-rotate-[225deg]">
                  <img
                    src={protopie}
                    alt="Protopie"
                    width={34}
                    height={36}
                  />
                </div>
              </li>
              <li className="Collabs rotate-[270deg]">
                <div className="-rotate-[270deg]">
                  <img
                    src={framer}
                    alt="Framer"
                    width={34}
                    height={36}
                  />
                </div>
              </li>
              <li className="Collabs rotate-[315deg]">
                <div className="-rotate-[315deg]">
                  <img
                    src={raindrop}
                    alt="RainDrop"
                    width={34}
                    height={36}
                  />
                </div>
              </li>
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Collaboration
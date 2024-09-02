import Heading from "./designs/Heading"
import Section from "./Section"
import { check, chromecast, disc02, recording01, recording03, service1, service2, service3, sliders04 } from "../assets"
import Generating from "./designs/Generating"
import { Gradient, PhotoChatMessage, VideoBar, VideoChatMessage } from "./designs/Services"

const Services = () => {
  return (
    <Section id='how-to-use'>
      <div className="container">
        <Heading title="Generative AI made for creators." text='Brainwave unlocks the pontental of AI-powered applications' />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/30 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img 
              src={service1}
              className="w-full h-full object-cover md:object-right"
              width={800}
              height={730}
              alt="Smartest AI"
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">Brainwave unlocks the pontental of AI-powered applications</p>
              <ul className="body-2">
                <li><img src={check} height={24}/><p>Photo generating</p></li>
                <li><img src={check} height={24}/><p>Photo enhance</p></li>
                <li><img src={check} height={24}/><p>Seamless Integration</p></li>
              </ul>
            </div>
            <Generating className='absolute right-4 left-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:-right-auto lg:bottom-8 lg:-translate-x-1/2' />
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/30 rounded-3xl overflow-hidden">
              <img src={service2} className="h-full w-full object-cover" width={630} height={750} alt="robot"/>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 ">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">Automatically enhance your photos using AI app&apos;s photos editing feature. Try it now!</p>  
              </div>
              <PhotoChatMessage />
            </div>

            
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The world's most powerful AI photo and video art generation engine. what will you create?
                </p>

                <ul className="flex items-center justify-between">
                  <li className='videoIcons'>
                    <div>
                      <img src={recording03} alt="" />
                    </div>
                  </li>
                  <li className='videoIcons'>
                    <div>
                      <img src={recording01} alt="" />
                    </div>
                  </li>
                  <li className='middleVideoIcon conic-gradient'>
                    <div>
                      <img src={disc02} alt="" />
                    </div>
                  </li>
                  <li className='videoIcons'>
                    <div>
                      <img src={chromecast} alt="" />
                    </div>
                  </li>
                  <li className='videoIcons'>
                    <div>
                      <img src={sliders04} alt="" />
                    </div>
                  </li>
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img 
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
                <VideoChatMessage /> 
                <VideoBar /> 

              </div>
            </div>
          </div>

          <Gradient />
         </div>
      </div>
    </Section>
  )
}

export default Services
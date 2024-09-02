import { brainwaveWhiteSymbol, gradient, play } from "../../assets";

export const Gradient = () => {
  return (
    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-20 mix-blend-color-dodge pointer-events-none">
      <img 
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={gradient}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  )
}

export const PhotoChatMessage = () => {
  return (
    <div className="absolute top-4 right-4 max-w-[17.5rem] py-6 px-8 bg-black rounded-t-xl rounded-bl-xl font-code text-base lg:top-8 lg:right-[3.75rem] lg:max-w-[17.5rem]">
      Hey Brainwave, enhance this Photo 
      <div className="absolute w-8 h-6 bg-black skew-x-[45deg] bottom-0 -right-3"/>
    </div>
  )
};

export const VideoChatMessage = () => {
  return (
    <div className="absolute top-8 left-[3.125rem] w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-n-5 rounded-t-xl rounded-br-xl font-code text-base md:max-w-[17.5rem]">
      Video generated!
      <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-color-1 rounded-[0.75rem]">
        <img
        src={brainwaveWhiteSymbol}
        width={26}
        height={26}
        alt="Brainwave"
         />
      </div>
      <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">
        done in 500ms
      </p>
      <div className="absolute w-8 h-6 bg-n-5 -skew-x-[45deg] bottom-0 -left-3"/>
    </div>
  )
}


export const VideoBar = () => {
  return (
    <div className="absolute bottom-8 left-[3.125rem] flex justify-between gap-2 items-center right-[3.125rem] w-auto">
      <div>
        <img 
         src={play}
          className="relative w-8 h- bottom-0 left-0"
        />
      </div>
      <div className="relative w-full ml-6 h-1 bg-n-4 rounded-[50%] bottom-0 -left-3">
        <div className="relative w-1/2 h-full bg-color-1" />
      </div>
    </div>
  )
}

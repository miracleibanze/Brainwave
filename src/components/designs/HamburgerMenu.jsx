import { background } from "../../assets"
import BackgroundCircles from "./BackgroundCircles"
import Rings from "./Rings"

const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden z-20">
        <div className="absolute inset-0 opacity-[.03]">
            <img src={background} width={688} alt="Background" height={953} className="w-full h-full object-cover "/>

            <Rings />
            <div className="absolute w-full h-full">
            </div>
        </div>
    </div>
  )
}

export default HamburgerMenu
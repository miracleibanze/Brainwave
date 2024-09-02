import { brainwave } from '../assets'
import Button from './designs/Button'
import MenuSvg from '../assets/svg/MenuSvg'
import { useState } from 'react'
import HamburgerMenu from './designs/HamburgerMenu'
import BackgroundCircles from './designs/BackgroundCircles'
import { Link } from 'react-scroll'
import Rings from './designs/Rings'
const Header = () => {

    const [openNavigation, setOpenNavigation] = useState(false)

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
        } else {
            setOpenNavigation(true);
        }
    }
    const handleClick = () => {
        setOpenNavigation(false);
    }
    window.onscroll = () => {
        if (openNavigation) {
            setOpenNavigation(false);
        }
    }

  return (
    <div className={`fixed top-0 left-0 z-15 bg-n-8/90 lg:bg-n-8/90 flex w-full items-center px-8 ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4"></div>

        <a>
            <img src={brainwave} alt="Brainwave" width={180} height={50} className='my-4'/>
        </a>
        <nav className={`${openNavigation ? 'flex' : 'hidden' } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
            <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:items-center'>
            <Link to="feature" smooth={true} className='m-0 p-0'><a href="#feature" onClick={handleClick}>Features</a></Link>
            <Link to="pricing" smooth={true} className='m-0 p-0'><a href="#pricing" onClick={handleClick}>Pricings</a></Link>
            <Link to="how-to-use" smooth={true} className='m-0 p-0'><a href="#how-to-use" onClick={handleClick}>How to use</a></Link>
            <Link to="road-map" smooth={true} className='m-0 p-0'><a href="#road-map" onClick={handleClick}>Road map</a></Link>
            <Link to="newaccount" smooth={true} className='m-0 p-0'><a href="#newaccount" className='onlyMobile'>New account</a></Link>
            <Link to="login" smooth={true} className='m-0 p-0'><a href="#login" className='onlyMobile'>Sign in</a></Link>
            <div className='absolute w-screen h-screen max-lg:flex hidden -z-5'>
            <BackgroundCircles />
            <Rings />
            </div>
            </div>
            <HamburgerMenu />
        </nav>

        <a href="#signup" className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'>
            New account
        </a>
        <Button className='hidden lg:flex' href='#login'>
            Sign in            
        </Button>
        
        <Button className='ml-auto lg:hidden' onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation}/>
        </Button>
    </div>
  )
}

export default Header
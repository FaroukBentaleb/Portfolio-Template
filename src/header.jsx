import LinkedinPic from './assets/img/linkedin.png'
import FacebookPic from './assets/img/facebook.png'
import InstagramPic from './assets/img/instagram.png'
import OptionPic from './assets/img/opt.svg'
import { useMediaQuery } from 'react-responsive';
function Header(){
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
    return(
        <>
            <div className="flex flex-row justify-center sm:pt-5 pt-2 bg-transparent text-white">
                <div className="flex justify-start items-center sm:w-1/2 sm:h-16 h-6">
                    <h2 className='font-serif font-bold sm:text-4xl text-xl'>Username</h2>
                </div>
                {!isSmallScreen && 
                    <div className="flex flex-row sm:h-16 justify-evenly items-center w-1/2 sm:w-1/2">
                        <button className='h-4/5 w-1/6 hover:bg-[#0a2652]'>Home</button>
                        <button className='h-4/5 w-1/6 hover:bg-[#0a2652]'>Skills</button>
                        <button className='h-4/5 w-1/6 hover:bg-[#0a2652]'>Projects</button>
                        <div className='flex flex-col justify-end items-end text-gray-300'>
                            <div className='flex sm:gap-4 gap-1'>
                                <button><img className="sm:w-8 w-4 border rounded-2xl bg-white hover:border-black" src={LinkedinPic} alt="linkedin"/></button>
                                <button><img className="sm:w-8 w-4 border rounded-2xl bg-white hover:border-black" src={FacebookPic} alt="Facebook"/></button>
                                <button><img className="sm:w-8 w-4 border rounded-2xl bg-white hover:border-black" src={InstagramPic} alt="Instagram"/></button>
                            </div>
                        </div>
                        <button className="border sm:h-14 sm:w-36 text-xs sm:text-sm p-2 hover:bg-[#0F3062]">Let's Connect</button>
                    </div>
                }
            </div>
        </>
    );
}
export default Header
import LinkedinPic from './assets/img/linkedin.png'
import FacebookPic from './assets/img/facebook.png'
import InstagramPic from './assets/img/instagram.png'
function Header(){
    return(
        <>
            <div className="flex flex-row justify-center p-5 bg-transparent text-white">
                <div className="flex justify-start items-center w-1/2 h-16">
                    <h2 className='font-serif font-bold text-4xl'>Username</h2>
                </div>
                <div className="flex flex-row h-16 justify-evenly items-center w-1/2">
                    <a>Home</a>
                    <a>Skills</a>
                    <a>Projects</a>
                    <div className='flex flex-col justify-end items-end text-gray-300'>
                        <div className='flex gap-2'>
                            <img className="w-8 border rounded-2xl bg-white" src={LinkedinPic} alt="linkedin"/>
                            <img className="w-8 border rounded-2xl bg-white" src={FacebookPic} alt="Facebook"/>
                            <img className="w-8 border rounded-2xl bg-white" src={InstagramPic} alt="Instagram"/>
                        </div>
                    </div>
                    <button className="border h-14 w-36">Let's Connect</button>
                </div>
            </div>
        </>
    );
}
export default Header
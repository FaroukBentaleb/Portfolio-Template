import LinkedinPic from './assets/img/linkedin.png'
import FacebookPic from './assets/img/facebook.png'
import InstagramPic from './assets/img/instagram.png'
function Footer(){
    return(
        <>
            <div className='flex flex-row gap-10 border w-2/3 h-60 justify-center items-center rounded-[3rem] bg-white absolute left-1/2 -translate-x-1/2 -mt-24 shadow-lg'>
                <div className='font-serif text-2xl font-bold'>
                    <p>Subscribe to my Newsletter</p>
                    <p>& Never miss latest updates</p>
                </div>
                <div className='grid grid-flow-col gap-5 border border-gray-400 rounded-[1rem] p-2'>
                    <input type="text" placeholder='Enter your Email' className=""/>
                    <button className='bg-slate-400 rounded-xl h-12 w-40'>Submit</button>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-1 border border-black h-96 bg-[#0B2753] text-white p-20">
                <div className=' grid font-serif w-1/2 justify-start items-end pb-10'>
                    <h2 className='text-5xl'>Username</h2>
                </div>
                <div className='flex flex-col justify-end items-end w-1/2 text-gray-300'>
                    <div className='flex gap-2'>
                        <img className="w-8 border rounded-2xl bg-white" src={LinkedinPic} alt="linkedin"/>
                        <img className="w-8 border rounded-2xl bg-white" src={FacebookPic} alt="Facebook"/>
                        <img className="w-8 border rounded-2xl bg-white" src={InstagramPic} alt="Instagram"/>
                    </div>
                    Copyright {2025} . All Rights Reserved
                </div>
            </div>
        </>
    );

}
export default Footer
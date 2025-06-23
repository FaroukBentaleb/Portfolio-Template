import LinkedinPic from './assets/img/linkedin.png'
import FacebookPic from './assets/img/facebook.png'
import InstagramPic from './assets/img/instagram.png'
function Footer(){
    return(
        <>
            <div className='flex sm:flex-row flex-col sm:gap-10 gap-5 border sm:w-2/3 w-80 sm:h-60 h-52 justify-center items-center sm:rounded-[3rem] rounded-3xl bg-white absolute left-1/2 -translate-x-1/2 -mt-24 shadow-lg'>
                <div className='font-serif sm:text-2xl font-bold'>
                    <p>Subscribe to my Newsletter</p>
                    <p>& Never miss latest updates</p>
                </div>
                <div className='grid grid-flow-col sm:gap-5 gap-2 border border-gray-400 sm:rounded-[1rem] rounded-md sm:p-2 p-1'>
                    <input type="text" placeholder='Enter your Email' className=""/>
                    <button className='bg-slate-400 sm:rounded-xl rounded-md sm:h-12 h-10 sm:w-40 w-14'>Submit</button>
                </div>
            </div>
            <div className="flex sm:flex-row flex-col justify-center gap-1 border border-black sm:h-96 bg-[#0B2753] text-white sm:p-20 p-32 pb-10">
                <div className=' grid font-serif w-1/2 justify-start items-end sm:pb-10 pb-8'>
                    <h2 className='sm:text-5xl text-4xl'>Username</h2>
                </div>
                <div className='flex flex-col sm:justify-end justify-center sm:items-end items-center sm:w-1/2 text-gray-300 gap-2'>
                    <div className='flex gap-2'>
                        <img className="w-8 border rounded-2xl bg-white" src={LinkedinPic} alt="linkedin"/>
                        <img className="w-8 border rounded-2xl bg-white" src={FacebookPic} alt="Facebook"/>
                        <img className="w-8 border rounded-2xl bg-white" src={InstagramPic} alt="Instagram"/>
                    </div>
                    <p className='w-64'>Copyright {2025} . All Rights Reserved</p>
                </div>
            </div>
        </>
    );

}
export default Footer
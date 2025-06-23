import Icon from './assets/img/icon.png'
import Arrow from './assets/img/arrow.svg'
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
function App() {
  return (
    <>
      <div className="flex sm:flex-row flex-col sm:p-40 p-10">
        <div className="flex flex-col justify-center items-start sm:w-3/5">
          <h2 className="sm:text-xl font-bold bg-slate-400 w-auto text-[#0d2f61] sm:p-2 sm:mb-5">Welcome to My Portfolio</h2>
          <h1 className="sm:text-4xl text- font-bold text-blue-300">Hi! <t/>
              <TypeAnimation
                sequence={[
                  ' I am a Junior Developer', 4000,
                  ' I am a  Full-stack Developer', 4000,
                  ' I am a  Backend Developer', 4000,
                  ' I am a  Frontend Developer', 4000,
                  ' I am a  React Enthusiast', 4000,
                  ' I am a  Open Source Contributor', 4000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{
                  display: 'inline-block',
                  color: '#93c5fd',
                  fontWeight: 'bold',
                  paddingRight: '5px'
                }}/>
          </h1>
          <p className="sm:text-xl text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquam consequatur ab sapiente vitae. Ex necessitatibus iste inventore cumque officia voluptas repellendus non placeat. Est praesentium adipisci iste dolorem dicta.</p>
          <div className='flex flex-row gap-2 sm:m-10 m-30 w-auto text-white cursor-pointer'>
            <button className='sm:text-lg text-xs'>Let's connect </button>
            <img className='sm:w-8 w-5' src={Arrow} />
          </div>
        </div>
        <div className="mt-20 sm:w-2/5">
          <img src={Icon} className='animate-bounce animate-duration-100000' style={{ animationDuration: '4s' }} />
        </div>
      </div>
    </>
  );
}

export default App

import { useState } from 'react';
import Pic from './assets/img/proj.png'
import ArrowL from './assets/img/arrow_left.png'
import ArrowR from './assets/img/arrow_right.png'
import { useMediaQuery } from 'react-responsive';
function Project(){
    const Projects = [
        { name: "Title1", img: Pic, desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum tempora delectus, pariatur ipsum, neque dolore obcaecati quis eos molestiae laboriosam, error necessitatibus dignissimos nisi quae totam odit reprehenderit repudiandae doloremque!"},
        { name: "Title2", img: Pic, desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum tempora delectus, pariatur ipsum, neque dolore obcaecati quis eos molestiae laboriosam, error necessitatibus dignissimos nisi quae totam odit reprehenderit repudiandae doloremque!"},
        { name: "Title3", img: Pic, desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum tempora delectus, pariatur ipsum, neque dolore obcaecati quis eos molestiae laboriosam, error necessitatibus dignissimos nisi quae totam odit reprehenderit repudiandae doloremque!"},
        { name: "Title4", img: Pic, desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum tempora delectus, pariatur ipsum, neque dolore obcaecati quis eos molestiae laboriosam, error necessitatibus dignissimos nisi quae totam odit reprehenderit repudiandae doloremque!"},
        { name: "Title5", img: Pic, desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum tempora delectus, pariatur ipsum, neque dolore obcaecati quis eos molestiae laboriosam, error necessitatibus dignissimos nisi quae totam odit reprehenderit repudiandae doloremque!"},
        
    ];
    let [index,setIndex] = useState(0);
    let [direction,setDirection] = useState("");
    const handleNext = () => {
        setDirection("slideInRight");
        const step = isSmallScreen ? 2 : 3;
        if (index + step >= Projects.length) {
            setIndex(0);
        } 
        else {
            setIndex(index + step);
        }
    };

   const handlePrev = () => {
        setDirection("slideInLeft");
        const step = isSmallScreen ? 2 : 3;
        if (index === 0) {
            if (Projects.length % step === 0) {
                setIndex(Projects.length - step);
            } else {
                setIndex(Projects.length - (Projects.length % step));
            }
        } 
        else {
            setIndex(index - step);
        }
    };
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
    return (
        <>
            <div className="flex flex-col sm:gap-8 gap-3 border border-gray-700 sm:p-8 p-2 sm:w-2/3 mr-2 ml-2 h-auto justify-center items-center rounded-[2rem] from-[#0c2747] to-[#163d6b] shadow-2xl sm:mx-auto -mt-32 mb-52">
                <div className="font-serif sm:text-4xl text-2xl font-extrabold text-[#FCFFFE] tracking-wide select-none">
                    Projects
                </div>
                <div className="flex flex-row items-center w-full sm:max-w-4xl">
                    <button onClick={handlePrev}>
                        <img src={ArrowL} />
                    </button>
                    <ul className="flex flex-row sm:gap-6 gap-3 sm:justify-center justify-center flex-1 rounded-[1rem] sm:px-5 px-2 sm:py-6 py-2 bg-[#16426b]/80 backdrop-blur-sm text-slate-300 overflow-hidden">
                    {Projects.map((proj, Indexx) =>
                        Indexx >= index && Indexx < index + (isSmallScreen ? 2 : 3) ? (
                        <li key={Indexx} className={`flex-shrink-0 ${ direction === 'slideInRight' ? 'animate-slideInRight' : ''} ${direction === 'slideInLeft' ? 'animate-slideInLeft' : ''}`}>
                            <div className="flex flex-col items-center border border-white rounded-xl justify-between sm:w-64 w-36 p-6 bg-[#163d6b] text-white shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                            <img
                                className="rounded-full sm:w-24 sm:h-24 w-20 object-cover sm:mb-4 border-2 border-white shadow-md"
                                src={proj.img}
                                alt={proj.name}
                            />
                            <h1 className="sm:text-xl font-bold sm:mb-2">{proj.name}</h1>
                            <p className="text-center text-slate-300 sm:text-sm text-xs line-clamp-4 leading-relaxed">
                                {proj.desc}
                            </p>
                            </div>
                        </li>
                        ) : null
                    )}
                    </ul>
                    <button onClick={handleNext}>
                        <img src={ArrowR} />
                    </button>
                </div>
            </div>
        </>
    );
}
export default Project
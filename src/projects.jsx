import { useState } from 'react';
import Pic from './assets/img/proj.png'
import ArrowL from './assets/img/arrow_left.png'
import ArrowR from './assets/img/arrow_right.png'
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
        if (index + 3 >= Projects.length) {
            setIndex(0);
        } 
        else {
            setIndex(index + 3);
        }
    };

   const handlePrev = () => {
        setDirection("slideInLeft");
        if (index === 0) {
            if (Projects.length % 3 === 0) {
                setIndex(Projects.length - 3);
            } else {
                setIndex(Projects.length - (Projects.length % 3));
            }
        } 
        else {
            setIndex(index - 3);
        }
    };
    return (
        <>
            <div className="flex flex-col gap-8 border border-gray-700 p-8 w-2/3 h-auto justify-center items-center rounded-[2rem] bg-gradient-to-br from-[#0c2747] to-[#163d6b] shadow-2xl mx-auto -mt-32 mb-52">
                <div className="font-serif text-4xl font-extrabold text-[#FCFFFE] tracking-wide select-none">
                    Projects
                </div>
                <div className="flex flex-row items-center w-full max-w-4xl">
                    <button onClick={handlePrev}>
                        <img src={ArrowL} />
                    </button>
                    <ul className="flex flex-row gap-6 flex-1 rounded-[1rem] px-5 py-6 bg-[#16426b]/80 backdrop-blur-sm text-slate-300 overflow-hidden">
                    {Projects.map((proj, Indexx) =>
                        Indexx >= index && Indexx < index + 3 ? (
                        <li key={Indexx} className={`flex-shrink-0 ${ direction === 'slideInRight' ? 'animate-slideInRight' : ''} ${direction === 'slideInLeft' ? 'animate-slideInLeft' : ''}`}>
                            <div className="flex flex-col items-center border border-white rounded-xl justify-between w-64 p-6 bg-[#163d6b] text-white shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                            <img
                                className="rounded-full w-24 h-24 object-cover mb-4 border-2 border-white shadow-md"
                                src={proj.img}
                                alt={proj.name}
                            />
                            <h1 className="text-xl font-bold mb-2">{proj.name}</h1>
                            <p className="text-center text-slate-300 text-sm line-clamp-4 leading-relaxed">
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
import htmlPic from './assets/img/skills/html.png'
import cssPic from './assets/img/skills/css.png'
import javaPic from './assets/img/skills/java.png'
import mysqlPic from './assets/img/skills/mysql.png'
import phpPic from './assets/img/skills/php.png'
import pythonPic from './assets/img/skills/python.png'
import reactPic from './assets/img/skills/react.png'
function Skill(){
    const skills = [
        { name: "HTML", img: htmlPic, level: 80 },
        { name: "CSS", img: cssPic, level: 75 },
        { name: "Java", img: javaPic, level: 70 },
        { name: "MySQL", img: mysqlPic, level: 65 },
        { name: "PHP", img: phpPic, level: 60 },
        { name: "Python", img: pythonPic, level: 85 },
    ];
    return (
        <>
            <div className='flex flex-col gap-5 border sm:p-6 sm:pb-20 pb-10 sm:w-2/3 mr-5 ml-5 sm:h-auto h-72 justify-center items-center rounded-[3rem] bg-[#0f3062] sm:right-1/2 -mt-10 sm:-mt-32 mb-52 shadow-lg sm:mx-auto'>
                <div className='font-serif sm:text-3xl text-2xl sm:mt-5 mt-2 font-bold text-[#FCFFFE]'>
                    <p>Skills</p>
                </div>
                <div className='flex flex-col sm:gap-5 gap-2 rounded-[1rem] text-xs pl-5 pr-5 sm:pl-28 sm:pr-28 text-slate-400 overflow-hidden'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil beatae, eos iste incidunt repellat iure ducimus quam veniam odio quasi adipisci libero ea reprehenderit aspernatur fugit modi suscipit? Suscipit, mollitia.</p>
                        <div className="grid grid-cols-2 sm:gap-4 gap-1 w-full text-white">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex items-center sm:gap-6 gap-2 w-full">
                                    <img className="sm:w-12 sm:h-12 w-6 object-contain" src={skill.img} alt={skill.name} />
                                    <div className="flex-1 sm:h-4 bg-gray-500 rounded-lg overflow-hidden">
                                        <div
                                            className="sm:h-4 h-2 bg-green-500"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                    <span className="sm:w-10 sm:text-sm">{skill.level}%</span>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        </>
    );
}
export default Skill
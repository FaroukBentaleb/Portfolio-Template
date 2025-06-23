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
            <div className='flex flex-col gap-5 border p-6 pb-20 w-2/3 h-auto justify-center items-center rounded-[3rem] bg-[#0f3062] right-1/2 -mt-32 mb-52 shadow-lg mx-auto'>
                <div className='font-serif text-3xl mt-5 font-bold text-[#FCFFFE]'>
                    <p>Skills</p>
                </div>
                <div className='flex flex-col gap-5 rounded-[1rem] pl-28 pr-28 text-slate-400 overflow-hidden'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil beatae, eos iste incidunt repellat iure ducimus quam veniam odio quasi adipisci libero ea reprehenderit aspernatur fugit modi suscipit? Suscipit, mollitia.</p>
                        <div className="grid grid-cols-2 gap-4 w-full text-white">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex items-center gap-6 w-full">
                                    <img className="w-12 h-12 object-contain" src={skill.img} alt={skill.name} />
                                    <div className="flex-1 h-4 bg-gray-500 rounded-lg overflow-hidden">
                                        <div
                                            className="h-4 bg-green-500"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                    <span className="w-10 text-sm">{skill.level}%</span>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        </>
    );
}
export default Skill
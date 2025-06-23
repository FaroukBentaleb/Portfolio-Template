import htmlPic from './assets/img/skills/html.png'
import cssPic from './assets/img/skills/css.png'
import javaPic from './assets/img/skills/java.png'
import mysqlPic from './assets/img/skills/mysql.png'
import phpPic from './assets/img/skills/php.png'
import pythonPic from './assets/img/skills/python.png'
import reactPic from './assets/img/skills/react.png'
function Skill(){
    return (
        <>
            <div className='flex flex-col gap-10 border p-6 w-2/3 h-auto justify-center items-center rounded-[3rem] bg-[#0f3062] -mt-32 mb-52 shadow-lg'>
                <div className='font-serif text-2xl font-bold text-[#FCFFFE]'>
                    <p>Skills</p>
                </div>
                <div className='flex flex-col gap-5 rounded-[1rem] pl-28 pr-28 text-slate-400 overflow-hidden'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil beatae, eos iste incidunt repellat iure ducimus quam veniam odio quasi adipisci libero ea reprehenderit aspernatur fugit modi suscipit? Suscipit, mollitia.</p>
                        <div className="m-12 text-white columns-3 gap-4">
                            <ul>
                                <li>
                                    <div className=' gap-10'>
                                        <img className="w-1/3 mb-4 flex items-center gap-2" src={htmlPic}/>
                                        <div className="flex h-5">
                                            <div className="w-1/2 border border-white rounded-lg bg-green-500"></div>
                                            <div className="w-1/2 border border-white rounded-lg bg-gray-500 -ml-6"></div>
                                        </div>
                                    </div>
                                </li>
                                <li><img className="w-1/3 mb-4 flex items-center gap-2" src={cssPic}/></li>
                                <li><img className="w-1/3 mb-4 flex items-center gap-2" src={javaPic}/></li>
                                <li><img className="w-1/3 mb-4 flex items-center gap-2" src={mysqlPic}/></li>
                                <li><img className="w-1/3 mb-4 flex items-center gap-2" src={phpPic}/></li>
                                <li><img className="w-1/3 mb-4 flex items-center gap-2" src={pythonPic}/></li>
                            </ul>
                        </div>
                </div>
            </div>
        </>
    );
}
export default Skill
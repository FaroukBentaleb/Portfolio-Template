import Icon from './assets/img/icon.png'
import Arrow from './assets/img/arrow.svg'
function App() {
  return (
    <>
      <div className="flex flex-row p-40">
        <div className="flex flex-col justify-center items-start w-3/5">
          <h2 className="text-xl font-bold bg-slate-400 w-auto text-[#0d2f61] p-2 mb-5">Welcome to My Portfolio</h2>
          <h1 className="text-4xl font-bold text-blue-300">Hi! I'm a junior developper </h1>
          <p className="text-xl text-blue-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquam consequatur ab sapiente vitae. Ex necessitatibus iste inventore cumque officia voluptas repellendus non placeat. Est praesentium adipisci iste dolorem dicta.</p>
          <div className='m-12 w-44'>
            <button>Let's connect </button>
            <img src={Arrow} />
          </div>
        </div>
        <div className="w-2/5">
          <img src={Icon} />
        </div>
      </div>
    </>
  );
}

export default App

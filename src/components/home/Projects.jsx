import {Link} from 'react-router'
import featured from '../../assets/data/projects'
export default function Projects(){
    return(
        <div className="flex flex-col md:h-[calc(100vh-2.5rem)] fade-in-section flex justify-center bg-black text-lightBeige ml-4 mr-4 md:ml-20 md:mr-20 lg:mr-20 h-[66vh]">
            <div className="flex flex-row justify-between items-center">
                <h2 className="flex text-xl md:text-4xl font-semibold mb-6 ">Featured work</h2>
                <Link to="/projects">View all projects</Link>
            </div>
            <div className="flex gap-8">
            {featured.map(elt => {
                return (<div className="flex flex-col w-1/3 hover:scale-101 rounded-md border border-white/20">
                    <div className="flex items-center gap-2 px-3 py-2 bg-gray-900 select-none rounded-md rounded-b-none border border-gray-900">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    </div>
                    <div key={elt.id} className="backdrop-blur-md bg-blackCards  rounded-lg rounded-t-none shadow-lg p-6 h-114 flex flex-col ">
                        
                    <img src={elt.img} alt={elt.title} className="rounded mb-4 w-128 h-4/12 object-cover rounded" />
                    <h2 className="text-white text-2xl font-bold mb-2 h-1/12">{elt.title}</h2>
                    <div className="h-5/12">
                    <p className="text-white/80 mb-6">{elt.desc}</p>
                    <div className="flex gap-2 flex-wrap cursor-default">
                        {elt.stack.map(tech=>{
                            return(
                                <div className="bg-gray-600 px-2 py-1 shadow-md rounded">{tech}</div>
                            )
                        })}
                    </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="text-black bg-lightBeige p-2 px-4" onClick={()=>window.open(elt.website,'_blank')}>Website</button>
                        <button onClick={()=>window.open(elt.source,'_blank')}>Source code</button>
                    </div>
                    <div className="absolute inset-0 pointer-events-none z-0">
                        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.07),_transparent_70%)] 
                                        bg-no-repeat bg-cover mix-blend-screen opacity-70" />
                    </div>
                    </div>
                    
                    </div>
                );
                })}                    
            </div>
        </div>
    )
}
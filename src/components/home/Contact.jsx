import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { 
    faGithub, 
    faLinkedin, 
    faXTwitter, 
} from '@fortawesome/free-brands-svg-icons'
export default function Contact() {
    function Socials({link,icon,name}){
        return(<div onClick={()=>window.open(link,'_blank')} className="flex hover:scale-102 cursor-default flex-col items-center backdrop-blur-md bg-blackCards rounded-lg shadow-sm md:flex-row ">
            <div
                className="p-4 flex text-5xl justify-center items-center rounded-lg rounded-r-none shadow-inner backdrop-blur-md"
            >
                <FontAwesomeIcon icon={icon}/>
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="text-lg font-bold tracking-tight text-lightBeige">{name}</h5>
                <p className="font-normal text-secondaryBeige">{link.startsWith("mailto:") ? link.replace("mailto:", "") : link}</p>
            </div>
        </div>)
    }
    return (
        <section className="relative md:h-[calc(100vh-2.5rem)] flex justify-between items-center fade-in-section bg-black text-lightBeige">
            <div className="mx-20 w-1/2">
            <h2 className="flex text-xl md:text-4xl font-semibold mb-2 ">Contact me...</h2>
            <p className="text-secondaryBeige mb-8">
            Use either the form below or connect through my socials
            </p>
                <form action="#" className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-lightBeige">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-blackCards rounded-lg p-3 px-4 border border-white/20 block w-full" placeholder="example@gmail.com" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-lightBeige">Subject</label>
                        <input type="text" id="subject" className="shadow-sm bg-blackCards rounded-lg p-3 px-4 border border-white/20 block w-full" placeholder="What is this about?"/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-lightBeige">Your message</label>
                        <textarea id="message" rows="4" className="shadow-sm bg-blackCards rounded-lg p-3 px-4 border border-white/20 block w-full" placeholder="Leave your message here..."></textarea>
                    </div>
                    <div className="flex mt-4">
                        <button type="submit" className="bg-[#303e44] mt-4 hover:bg-headerBeige hover:text-black border border-white/20 py-3 px-4 text-sm font-medium text-center text-white rounded-lg sm:w-fit flex gap-2 items-center">
                            Send message
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-1/2 flex flex-col gap-4 px-20 ">
                <Socials icon={faGithub} name="Github" link="https://github.com/sameersharmadev"/>
                <Socials icon={faLinkedin} name="Linkedin" link="https://www.linkedin.com/in/sameersharma777/"/>
                <Socials icon={faXTwitter} name="X" link="https://x.com/Sameersharma_77"/>
                <Socials icon={faEnvelope} name="Email" link="mailto:sameersh571@gmail.com"/>
            </div>
        </section>
    );
}

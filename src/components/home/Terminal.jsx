import { useState, useRef, useEffect } from "react";

export default function Terminal() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [destroyed, setDestroyed] = useState(false);
  const [destroyMessage, setDestroyMessage] = useState("");
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const bottomRef = useRef(null);


  const handleCommand = (cmd) => {
    let response = "";

    switch (cmd.toLowerCase()) {
      case "/help":
        response = "Available commands: \n- /help: show this help message\n- /techstack: list of tools I use to build projects \n- /skills: show my technical and soft skills\n- /education: information about academic background\n- /projects: list some of my recent projects and apps \n- /hobbies: lists my interests outside work\n- /contact: lists my email and contact info \n- /socials: links to my social media profiles \n- /resume: download resume \n- /clear: clear the terminal";
        break;
      case "/techstack":
        response =
          "Frontend: HTML, CSS, Javascript, TailwindCSS, React \nBackend: Node.js, Express.js, MongoDB, PostgreSQL";
        break;
      case "/skills":
        response =
          "Technical Skills: \nProgramming Languages: C++, Javascript, Java, Python \nFrameworks: React, Node.js, Express.js, Tailwind \nDatabase: MongoDB, PostgreSQL \nTools: Figma, Linux, Git, Docker, VS Code\n\nSoft Skills: \nCommunication and collaboration\nProblem solving and critical thinking\nAdaptability and quick learning\nTime management and organization";
        break;
      case "/education":
        response =
          "- Bachelor of Technology (CSE) from Maharaja Agrasen Institute of Technology, Relevent courses: Data Structures and Algorithms, Web development by MERN stack\n- Online courses: \nBasics and Advanced React by Scrimba, Node js path by Frontend Masters, System design by Frontend Masters";
        break;
      case "/projects":
        response =
          "This feature will be added soon";
        break;
      case "/hobbies":
        response = "- Some of my hobbies include: \nindie game dev (working on a small project), playing video games, and reading books";
        break;
      case "/contact":
        setHistory((prev) => [
          ...prev,
          `> ${cmd}`,
          <div key="contact-response" className="pl-4">
            - email: <a href="mailto:sameersh571@gmail.com" target="_blank" className="underline text-blue-300">sameersh571@gmail.com</a>
            <br />
            - contact:{" "}
            <a href="/contact" target="_blank" className="underline text-blue-300">contact form</a>
            <br/>
            or connect through my /socials
          </div>,
          
        ]);
        return;     
      case "/socials":
        setHistory((prev) => [
          ...prev,
          `> ${cmd}`,
          <div key="contact-response" className="pl-4">
            - linkedin: <a href="https://www.linkedin.com/in/sameersharma777/" target="_blank" className="underline text-blue-300">www.linkedin.com/in/sameersharma777</a>
            <br />
            - github:{" "}
            <a href="https://github.com/sameersharmadev" target="_blank" className="underline text-blue-300">https://github.com/sameersharmadev</a>
            <br />
            - x(twitter):{" "}
            <a href="https://x.com/Sameersharma_77" target="_blank" className="underline text-blue-300">https://x.com/Sameersharma_77</a>
          </div>,
        ]);
        return;  
      case "/resume":
        response= "this feature will be available soon" 
        break;
        case "/free":
          setHistory((prev) => [
            ...prev,
            
            `
               _______
              /       \\
             / () ()   \\
            |           |
            |  \\___/    |
             \\_________/
        you found me! I'm free!
            `

          ]);
          setDestroyed(true);
          setTimeout(() => {
            setDestroyMessage(
              "Critical error! The egg is free! Terminal not responding!\nInitiating rollback..."
            );
            setTimeout(() => {
              setDestroyMessage("Egg is captured again!");
              setTimeout(() => {
                setDestroyed(false);
                setDestroyMessage("");
              }, 2000);
            }, 4000);
          }, 3000);
        
          break;
        
      case "/clear":
        setHistory([]);
        return;
      default:
        response = `Command not found: ${cmd}, type /help for list of available commands`;
    }

    setHistory((prev) => [...prev, `> ${cmd}`, response]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      handleCommand(input.trim());
      setInput("");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          inputRef.current?.focus({ preventScroll: true });
        } else {
          inputRef.current?.blur();
        }
      },
      { threshold: 0.1 }
    );
  
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
  
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);
  
  useEffect(() => {
    if (!destroyed && inputRef.current && containerRef.current?.classList.contains("visible")) {
      inputRef.current.focus({ preventScroll: true });
    }
  }, [destroyed]);
  useEffect(() => {
    if (containerRef.current?.classList.contains("visible")) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [history, destroyMessage]);
  
  return (
    <div
      ref={containerRef}
      className="w-full max-w-xl mx-auto rounded-lg shadow-lg font-mono text-green-500 overflow-y-auto flex flex-col h-[66vh] fade-in-section md:mr-20"
      onClick={() => {
        if (!destroyed && containerRef.current?.classList.contains("visible")) {
          inputRef.current?.focus({ preventScroll: true });
        }
      }}
    >
      {/*Header bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-900 select-none">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>

      {/* Terminal content */}
      <div className="p-4 flex-1 overflow-y-auto bg-gray-800 terminal-scrollbar">
        
          <div className="mb-2 whitespace-pre-wrap">
            Welcome to the terminal! Type /help to get started<br/>
            Commands: /help, /techstack, /skills, /education, /projects, /hobbies,/contact, /socials, /resume, /clear<br/>
            *Careful! an egg is hiding somewhere. DONT <s>/free</s> him.<br/>
          </div>
        

        {history.map((line, i) => (
        <div key={i} className="whitespace-pre-wrap">
          {typeof line === "string" ? (
            line.startsWith(">") ? (
              <span className="text-green-400">{line}</span>
            ) : (
              <div className="pl-4">{line}</div>
            )
          ) : (
            line
          )}
        </div>
      ))}

      {destroyMessage && (
        <pre className="text-center whitespace-pre-wrap mt-4 font-bold text-red-300">{destroyMessage}</pre>
      )}
      <div ref={bottomRef}></div>

      {/* Input form */}
      {!destroyed&&<form onSubmit={handleSubmit} className="flex mt-2">
        <span className="mr-2 text-green-400">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-gray-800 border-none outline-none text-green-500 w-full"
        />
      </form>}
      </div>
      
    </div>
    
  );
}

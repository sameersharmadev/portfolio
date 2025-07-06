import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faEnvelope,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [time, setTime] = useState("");
  const [replyTime, setReplyTime] = useState("");
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultIcon, setResultIcon] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    setResultIcon(null);

    try {
      const res = await fetch('/api/send/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, subject, message }),
      });

      const data = await res.json();

      if (res.ok && !data.error) {
        setResultIcon('success');
        setEmail('');
        setSubject('');
        setMessage('');
        setStatus('');
        setTimeout(() => setResultIcon(null), 3000);
      } else {
        setStatus(data.error || 'Failed to send message.');
        setResultIcon('error');
        setTimeout(() => setResultIcon(null), 3000);
      }
    } catch (error) {
      console.error(error);
      setStatus(`Server error: ${error.message}`);
      setResultIcon('error');
      setTimeout(() => setResultIcon(null), 3000);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    const now = new Date();
    const options = {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    const currentHourIST = parseInt(
      now.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        hour12: false,
      })
    );

    setTime(now.toLocaleTimeString("en-IN", options).replace(/am|pm/, m => m.toUpperCase()));
    setReplyTime(
      currentHourIST >= 23 || currentHourIST < 7
        ? `I'll reply within ${currentHourIST >= 23 ? 24 - currentHourIST + 7 : 7 - currentHourIST} hours`
        : "I'll reply within 2–3 hours"
    );
  }, []);

  return (
    <section className="mt-16 md:mt-20 flex flex-col fade-in-section justify-center bg-black text-lightBeige px-4 md:px-16 lg:px-20 lg:py-8 xl:px-32 xl:py-12 2xl:px-48 2xl:py-16 xl:mt-20">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 min-h-[32rem]">
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="text-2xl mt-8 md:mt-0 md:text-4xl font-semibold mb-6">Contact me</h2>

          <form onSubmit={handleSubmit} className="space-y-6 xl:space-y-10 2xl:space-y-14 flex-1">
            {/* Email */}
            <div className="relative w-full">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer bg-blackCards border border-white/20 w-full p-4 pt-6 rounded-lg text-white xl:text-xl 2xl:text-2xl placeholder-transparent focus:outline-none focus:ring-2 focus:ring-headerBeige"
                placeholder="Your email"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-4 text-lightBeige text-base xl:text-2xl 2xl:text-3xl transition-all
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                  peer-focus:top-1 peer-focus:text-sm peer-focus:text-headerBeige
                  peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-sm"
              >
                Your email*
              </label>
            </div>

            {/* Subject */}
            <div className="relative w-full">
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="peer bg-blackCards border border-white/20 w-full p-4 pt-6 rounded-lg text-white xl:text-xl 2xl:text-2xl placeholder-transparent focus:outline-none focus:ring-2 focus:ring-headerBeige"
                placeholder="Subject"
              />
              <label
                htmlFor="subject"
                className="absolute left-4 top-4 text-lightBeige text-base xl:text-2xl 2xl:text-3xl transition-all
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                  peer-focus:top-1 peer-focus:text-sm peer-focus:text-headerBeige
                  peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-sm"
              >
                Subject
              </label>
            </div>

            {/* Message */}
            <div className="relative w-full">
              <textarea
                id="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="peer bg-blackCards border border-white/20 w-full p-4 pt-6 pr-12 rounded-lg text-white xl:text-xl 2xl:text-2xl placeholder-transparent focus:outline-none focus:ring-2 focus:ring-headerBeige"
                placeholder="Your message"
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-4 text-lightBeige text-base xl:text-2xl 2xl:text-3xl transition-all
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                  peer-focus:top-1 peer-focus:text-sm peer-focus:text-headerBeige
                  peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-sm"
              >
                Your message*
              </label>

              <button
                type="submit"
                disabled={loading}
                className={`absolute bottom-6 right-3 rounded-full w-10 h-10 transition-all flex items-center justify-center 
    ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#303e44] hover:bg-headerBeige hover:text-black text-white'}`}
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : resultIcon === 'success' ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : resultIcon === 'error' ? (
                  <FontAwesomeIcon icon={faTimes} />
                ) : (
                  <FontAwesomeIcon icon={faPaperPlane} />
                )}
              </button>

            </div>
            <p className="text-gray-400">(Please enter correct email so I can reach back)</p>

            {resultIcon === 'error' && status && (
              <p className="text-sm xl:text-lg 2xl:text-xl text-red-400">{status}</p>
            )}
          </form>
        </div>

        {/* Info Sidebar */}
        <div className="w-full mt-8 lg:w-1/2 px-6 xl:px-12 2xl:px-20 flex flex-col justify-center">
          <ul className="space-y-4 xl:space-y-8 text-gray-300 text-sm md:text-base xl:text-2xl 2xl:text-3xl">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">💬</span>
              <span><strong>Just Say Hi:</strong> Reach out even if it’s just to chat or say hey.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">🤝</span>
              <span><strong>Collaboration Ideas:</strong> Open to collaboration in projects.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500">💼</span>
              <span><strong>Opportunities:</strong> Open to internships and full stack roles.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500">🧑‍💻</span>
              <span><strong>Freelance Work:</strong> Actively available for short-term projects.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">🕵️‍♂️</span>
              <span><strong>Just Curious?</strong> No pressure, drop a message about anything!</span>
            </li>
            <li className="flex items-start gap-2 mt-8">
              <span className="text-green-400">🟢</span>
              <span>The current time at my location is {time}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">💌</span>
              <span>{replyTime}</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-3 mt-8">
            <a href="https://github.com/sameersharmadev" target="_blank" rel="noopener noreferrer"
              className="flex h-8 md:h-10 w-fit items-center overflow-hidden bg-[#3b4452] text-white text-xs md:text-sm rounded-md hover:bg-[#4b5567] transition-colors">
              <div className="w-8 md:w-10 flex items-center justify-center bg-[#4b5567] h-full">
                <FontAwesomeIcon icon={faGithub} className="text-white text-sm md:text-lg" />
              </div>
              <span className="px-3">GitHub</span>
            </a>

            <a href="https://www.linkedin.com/in/sameersharma777/" target="_blank" rel="noopener noreferrer"
              className="flex h-8 md:h-10 w-fit items-center overflow-hidden bg-[#3b4452] text-white text-xs md:text-sm rounded-md hover:bg-[#4b5567] transition-colors">
              <div className="w-8 md:w-10 flex items-center justify-center bg-[#4b5567] h-full">
                <FontAwesomeIcon icon={faLinkedin} className="text-white text-sm md:text-lg" />
              </div>
              <span className="px-3">LinkedIn</span>
            </a>

            <a href="https://x.com/Sameersharma_77" target="_blank" rel="noopener noreferrer"
              className="flex h-8 md:h-10 w-fit items-center overflow-hidden bg-[#3b4452] text-white text-xs md:text-sm rounded-md hover:bg-[#4b5567] transition-colors">
              <div className="w-8 md:w-10 flex items-center justify-center bg-[#4b5567] h-full">
                <FontAwesomeIcon icon={faXTwitter} className="text-white text-sm md:text-lg" />
              </div>
              <span className="px-3">Twitter</span>
            </a>

            <a href="mailto:sameersh571@gmail.com"
              className="flex h-8 md:h-10 w-fit items-center overflow-hidden bg-[#3b4452] text-white text-xs md:text-sm rounded-md hover:bg-[#4b5567] transition-colors">
              <div className="w-8 md:w-10 flex items-center justify-center bg-[#4b5567] h-full">
                <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm md:text-lg" />
              </div>
              <span className="px-3">Email</span>
            </a>
          </div>


        </div>
      </div>
    </section>
  );
}

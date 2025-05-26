import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
export default function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  function Socials({ link, icon, name }) {
    return (
      <div
        onClick={() => window.open(link, '_blank')}
        className="flex hover:scale-102 cursor-default items-center backdrop-blur-md bg-blackCards rounded-lg shadow-sm flex-row xl:mb-6 2xl:mb-8 xl:p-6 2xl:p-8"
      >
        <div className="p-6 flex text-3xl md:text-4xl justify-center items-center rounded-lg rounded-r-none shadow-inner backdrop-blur-md xl:text-5xl 2xl:text-7xl">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="text-lg font-bold tracking-tight text-lightBeige xl:text-3xl 2xl:text-4xl xl:mb-2 2xl:mb-4">{name}</h5>
          <p className="font-normal text-secondaryBeige md:hidden xl:text-xl 2xl:text-2xl">
            {link.length > 20 ? `${link.slice(0, 20)}...` : link}
          </p>
          <p className="hidden md:block font-normal text-secondaryBeige xl:text-2xl 2xl:text-3xl">
            {link.startsWith('mailto:') ? link.replace('mailto:', '') : link}
          </p>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      const res = await fetch('http://localhost:3000/send/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, subject, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('(Message sent successfully!)');
        setEmail('');
        setSubject('');
        setMessage('');
        setTimeout(() => {
          setStatus('');
        }, 5000);
      } else {
        setStatus(data.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Server error: ', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative mx-8 lg:h-[calc(100vh-5rem)] xl:h-[calc(90vh-5rem)] 2xl:h-[calc(80vh-5rem)] mt-16 md:mt-0 flex flex-col lg:flex-row justify-between items-center fade-in bg-black text-lightBeige xl:gap-12 2xl:gap-16 xl:mx-32 2xl:mx-64">
      <div className="lg:ml-20 lg:w-1/2 md:w-10/12">
        <h2 className="flex text-xl md:text-4xl md:mt-16 lg:mt-0 font-semibold mb-2 xl:text-5xl 2xl:text-6xl xl:mb-4 2xl:mb-6">Contact me...</h2>
        <p className="text-secondaryBeige mb-8 xl:text-3xl 2xl:text-4xl xl:mt-4 xl:mb-12 2xl:mt-6 2xl:mb-16">
          Use either the form below or connect through my socials
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 xl:space-y-8 2xl:space-y-12">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-lightBeige xl:text-3xl 2xl:text-4xl xl:mb-4 2xl:mb-6">
              Your email*
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm bg-blackCards rounded-lg p-3 px-4 border border-white/20 block w-full xl:text-3xl 2xl:text-4xl xl:p-6 2xl:p-8 xl:rounded-xl"
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-lightBeige xl:text-3xl 2xl:text-4xl xl:mb-4 2xl:mb-6">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="shadow-sm bg-blackCards rounded-lg p-3 px-4 border border-white/20 block w-full xl:text-3xl 2xl:text-4xl xl:p-6 2xl:p-8 xl:rounded-xl"
              placeholder="What is this about?"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-lightBeige xl:text-3xl 2xl:text-4xl xl:mb-4 2xl:mb-6">
              Your message*
            </label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="shadow-sm bg-blackCards rounded-lg p-3 px-4 border border-white/20 block w-full xl:text-3xl 2xl:text-4xl xl:p-6 2xl:p-8 xl:rounded-xl"
              placeholder="Leave your message here..."
              required
            ></textarea>
          </div>

          <div className="flex items-center mt-4">
            <button
              type="submit"
              className="bg-[#303e44] group min-w-[160px] flex justify-between mt-4 hover:bg-headerBeige hover:text-black border border-white/20 py-3 px-4 text-sm font-medium text-center text-white rounded-lg sm:w-fit flex gap-2 items-center xl:text-3xl 2xl:text-4xl xl:p-6 2xl:p-8"
              disabled={loading}
            >
              {loading ? (
                <>
                  Sending message
                  <svg
                    className="animate-spin h-4 w-4 text-lightBeige group-hover:text-black xl:h-6 xl:w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                </>
              ) : (
                <>
                  Send message <FontAwesomeIcon icon={faPaperPlane} />
                </>
              )}
            </button>
            {status && <p className="text-sm mt-4 ml-4 xl:text-lg 2xl:text-xl">{status}</p>}
          </div>
        </form>
      </div>

      {/* Social Links */}
      <div className="flex flex-col gap-4 lg:px-20 md:w-10/12 lg:w-1/2 xl:gap-6 2xl:gap-8">
        <Socials icon={faGithub} name="Github" link="https://github.com/sameersharmadev" />
        <Socials icon={faLinkedin} name="Linkedin" link="https://www.linkedin.com/in/sameersharma777/" />
        <Socials icon={faXTwitter} name="X" link="https://x.com/sameersharma_77" />
        <Socials icon={faEnvelope} name="Email" link="mailto:sameersh571@gmail.com" />
      </div>
    </section>
  );
}
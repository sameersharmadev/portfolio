import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

function Socials({ link, icon, name }) {
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className="flex flex-col items-center gap-4 bg-blackCards p-6 rounded-lg shadow-md cursor-pointer hover:text-headerBeige transition w-32 xl:w-48 xl:h-48 2xl:w-52 2xl:h-52 justify-center"
    >
      <FontAwesomeIcon icon={icon} className="text-xl md:text-4xl xl:text-5xl 2xl:text-6xl" />
      <h5 className="text-base md:text-lg xl:text-xl 2xl:text-2xl font-medium text-lightBeige">{name}</h5>
    </div>
  );
}

export default function Contact() {
  const [time, setTime] = useState("");
  const [replyTime, setReplyTime] = useState("");

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

    if (currentHourIST >= 23 || currentHourIST < 7) {
      const hoursUntil7AM = currentHourIST >= 23 ? 24 - currentHourIST + 7 : 7 - currentHourIST;
      setReplyTime(`I'll reply within ${hoursUntil7AM} hours`);
    } else {
      setReplyTime("I'll reply within 2–3 hours");
    }
  }, []);

  return (
    <section className="relative my-16 md:my-24 flex flex-col lg:flex-row items-center justify-center fade-in-section bg-black text-lightBeige xl:gap-8 2xl:gap-12 xl:mx-20 2xl:mx-32 xl:h-[60vh] 2xl:h-[60vh]">
      {/* Left Column */}
      <div className="mx-4 lg:ml-20 xl:mx-16 2xl:mx-32 flex md:w-1/2 flex-col items-center lg:items-start xl:gap-12 2xl:gap-16">
        {/* Heading */}
        <div className="text-center lg:text-left mb-8">
          <h2 className="text-xl md:text-4xl font-semibold xl:text-5xl 2xl:text-6xl">Contact me...</h2>
          <p className="w-3/4 md:w-full mx-auto md:mx-0 text-secondaryBeige mt-4 text-sm md:text-base xl:text-3xl 2xl:text-4xl">
            You can fill out the contact form or connect with me through my socials below.
          </p>
        </div>

        {/* Button */}
        <div className="w-10/12 lg:w-3/4 md:w-10/12 mb-12 flex justify-center lg:justify-start">
          <button
            onClick={() => (window.location.href = "/contact")}
            className="hover:bg-[#303e44] group min-w-[160px] flex justify-center bg-headerBeige text-black border border-white/20 py-3 px-4 text-sm font-medium text-center hover:text-white rounded-lg sm:w-fit lg:text-lg xl:text-3xl 2xl:text-4xl xl:p-6 2xl:p-8"
          >
            Go to contact form
          </button>
        </div>

        {/* Social Links */}
        <div className="flex flex-row gap-4 flex-wrap md:flex-nowrap justify-center lg:justify-start items-center mb-20">
          <Socials icon={faGithub} name="Github" link="https://github.com/sameersharmadev" />
          <Socials icon={faLinkedin} name="Linkedin" link="https://www.linkedin.com/in/sameersharma777/" />
          <Socials icon={faXTwitter} name="X/Twitter" link="https://x.com/Sameersharma_77" />
          <Socials icon={faEnvelope} name="Email" link="mailto:sameersh571@gmail.com" />
        </div>
      </div>

      {/* Right Column */}
      <div className="w-1/2 hidden lg:flex justify-start items-start -mt-16">
        <ul className="space-y-4 text-gray-300 text-sm md:text-base xl:text-3xl xl:space-y-8 2xl:text-4xl 2xl:space-y-8">
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
            <span><strong>Just Curious?</strong> No pressure — drop a message about anything!</span>
          </li>
          <li className="flex items-start gap-2 mt-16">
            <span className="text-green-400">🟢</span>
            <span>The current time at my location is {time}</span>
          </li>
          <li claszsName="flex items-start gap-2">
            <span className="text-yellow-500 mr-3">💌</span>
            <span>{replyTime}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

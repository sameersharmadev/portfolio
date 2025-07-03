import fitFocus from '../img/projects/fitfocus.png'
import opulence from '../img/projects/opulence.png'
import speedmaster from '../img/projects/speedmaster.png'
import devlog from '../img/projects/devlog.png'
import chrono from '../img/projects/chrono.png'

export const projects = [
    {
        id: 1,
        title: "FitFocus",
        img: fitFocus,
        desc: "FitFocus is a web app that delivers personalized diet plans and nutrition advice via email.",
        stack: ["HTML", "CSS", "Javascript"],
        website: "https://fitfocus.sameersharma.me/",
        source: "https://github.com/sameersharmadev/fitfocus"
    },
    {
        id: 2,
        title: "Opulence",
        img: opulence,
        desc: "Opulence is a restaurant app for viewing the menu and making online table reservations.",
        stack: ["HTML", "CSS", "Javascript"],
        website: "https://opulence.sameersharma.me/",
        source: "https://github.com/sameersharmadev/opulence"
    },
    {
        id: 3,
        title: "Speedmaster",
        img: speedmaster,
        desc: "Speedmaster is a product landing page for a classic watch, highlighting its legacy.",
        stack: ["HTML", "CSS", "Javascript"],
        website: "https://speedmaster.sameersharma.me/",
        source: "https://github.com/sameersharmadev/speedmaster"
    }
]
export const featured = [
    {
        id: 4,
        title: "Devlog",
        img: devlog,
        desc: "Devlog is a collaborative blogging platform focused on user experience, customizability, and modern full-stack practices.",
        detailedDesc: `
        <p><strong>Devlog</strong> is a collaborative blogging platform built with a focus on user experience, customizability, and modern development best practices.</p>
        <ul>
            <li> <strong>Auth:</strong> JWT-based login with password hashing and Google OAuth.</li>
            <li> <strong>Profiles:</strong> Public user profiles with avatars, bio, post count, ratings, and social features.</li>
            <li> <strong>Markdown Editor:</strong> Rich formatting toolbar, image uploads via Supabase, and SEO-optimized posts.</li>
            <li> <strong>Discovery:</strong> Real-time global search, For You and Trending feeds.</li>
            <li> <strong>Backend:</strong> PostgreSQL schema, Supabase storage, and robust error handling.</li>
        </ul>`,
        stack: ["React", "Node.js", "PostgreSQL", "Supabase"],
        website: "https://devlog.sameersharma.me/",
        source: "https://github.com/sameersharmadev/devlog"
    },
    {
        id: 5,
        title: "Chrono",
        img: chrono,
        desc: "Chrono is a powerful, minimalist task management system designed to boost productivity through structured workflows, intuitive UI, and Pomodoro-based focus sessions.",
        detailedDesc: `
        <div>
  <p><strong>Chrono</strong> is a powerful, minimalist task management system designed to boost productivity through structured workflows, intuitive UI, and Pomodoro-based focus sessions.</p>
  <br/>
  <ul>
    <li><strong>Tasks:</strong> Create, update, and organize tasks with due dates, reminders, and priority levels.</li>
    <li> <strong>Auth:</strong> JWT-based login with password hashing and Google OAuth.</li>
    <li><strong>Calendar View:</strong> Full-screen monthly calendar with visual indicators for due tasks, reminders, and progress.</li>
    <li><strong>Stats & Streaks:</strong> Weekly summaries, daily streak tracking, and task completion charts.</li>
    <li><strong>Backend:</strong> PostgreSQL schema with task logs, tags, and reminders (via cron).</li>
  </ul>
</div>`,
        stack: ["React", "Express.js", "PostgreSQL", "Supabase"],
        website: "https://chrono.sameersharma.me/",
        source: "https://github.com/sameersharmadev/chrono"
    }
]
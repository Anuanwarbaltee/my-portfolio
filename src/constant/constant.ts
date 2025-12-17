import kamkaj from "../assets/kamkaj.jpg"

const constantData = {
    name: "Muhammad Anwar",

    personalInfo: {
        name: "Muhammad Anwar",
        email: "anwardines786@gmail.com",
        secondEmail: "anubaltee786@gmail.com",
        phoneNumber1: "03152063564",
        phoneNumber2: "03422262366",
        address: {
            city: "Rawalpindi",
            state: "Punjab",
            country: "Pakistan"
        },
        Image: ""
    },

    socialLinks: [
        { icon: 'Github', href: "https://github.com", label: "GitHub" },
        { icon: 'Linkedin', href: "https://linkedin.com", label: "LinkedIn" },
        { icon: 'Twitter', href: "https://twitter.com", label: "Twitter" },
        { icon: 'Mail', href: "mailto:anwardines786@gmail.com", label: "Email" },
    ],

    experties: 'Frontend React Developer | MERN Stack Enthusiast | UI/UX Focused Developer',

    heroDescription:
        "A passionate React developer dedicated to building clean, scalable, and user-friendly web applications. I love turning ideas into smooth digital experiences.",

    aboutme: {
        description1:
            "I'm a frontend developer with 2.5+ years of professional experience specializing in building high-quality, responsive, and interactive web applications.",
        description2:
            "My main stack includes React, JavaScript, and modern UI frameworks. I enjoy crafting clean architectures, reusable components, and smooth user experiences.",
        description3:
            "I’ve worked on multiple real-world projects including CRM systems, document viewers, multi-hotel booking platforms, admin dashboards, and business applications.",
        description4:
            "I love solving complex problems, learning new technologies, and collaborating with teams to build impactful products.",

        tilesData: [
            { icon: "", title: "Clean Code", description: "Writing reusable, scalable, and maintainable code." },
            { icon: "", title: "UI/UX Focused", description: "Delivering modern, intuitive, and responsive interfaces." },
            { icon: "", title: "High Performance", description: "Optimizing apps for speed, SEO, and smooth user flow." }
        ]
    },

    //  Experience 
    experiences: [
        {
            title: "Frontend React Developer",
            company: "XTECSOFT Pvt Ltd",
            period: "2023 - 2025",
            description:
                "Working as a core frontend developer on multiple enterprise-level projects including CRM hubs, merchant reporting tools, multi-hotel booking system, and document previewers.",
            highlights: [
                "Developed large-scale CRM modules using React, Redux Thunk, and MUI",
                "Implemented advanced document viewer supporting PDF, DOCX, TXT, Images",
                // "Built multi-hotel booking UI with responsive layouts and clean UX",
                "Optimized complex dashboards and improved performance by 35%",
                "Worked closely with backend teams to integrate REST APIs"
            ],
        },
        {
            title: "Junior Full Stack Developer",
            company: "Digital Solutions Ltd.",
            period: "2020 - 2022",
            description:
                "Developed responsive web applications using MERN stack. Contributed to API integrations, UI development, and admin dashboards.",
            highlights: [
                "Built user dashboards with React, Node.js, and MongoDB",
                "Created reusable UI components and improved maintainability",
                "Integrated multiple third-party services and API endpoints",
                "Reduced UI bugs by 30% through testing and refactoring"
            ],
        },
    ],

    //  Updated Skills 
    skills: [
        {
            category: "Frontend",
            skills: [
                "React",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "HTML5",
                "CSS3",
                "Redux",
                "MUI",
            ],
        },
        {
            category: "Backend",
            skills: [
                "Node.js",
                "Express",
                "MongoDB",
                "REST APIs",
            ],
        },
    ],

    //  Updated Education 
    education: [
        {
            degree: "Master in Computer Science (MCS)",
            institution: "University of Karachi",
            period: "2020 - 2022",
            description: "Focused on Software Engineering, Web Development, and Database Systems.",
            achievements: [
                "Developed multiple academic projects using MERN Stack",
                "Represented university in inter-department hackathons",
                "Member of Programming & Web Development Society"
            ],
        },
        {
            degree: "Associate Degree in computer Science (ADP'cs)",
            institution: "Government College University Faisalabad",
            period: "2018 - 2020",
            description: "Studied Computer Science fundamentals and programming basics.",
            achievements: [
                "Participated in coding competitions",
                "Top performer in Computer Science subjects"
            ],
        },
    ],

    //  Projects (kept same) 
    projects: [
        {
            title: "Home Services Marketplace Platform",
            description:
                "A service-based marketplace platform built using an MVC architecture that connects customers with professional service providers for home maintenance, repair, cleaning, and other on-demand services across Pakistan.",
            technologies: [
                "HTML",
                "CSS",
                "Bootstrap5",
                "JavaScript",
                "Responsive UI Design"
            ],
            liveUrl: "https://www.kamkaj.pk",
            githubUrl: null,
            image: kamkaj,
        },
        {
            title: "Task Management App",
            description:
                "Collaborative project management tool with real-time updates, team chat, and file sharing capabilities.",
            technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "AI Content Generator",
            description:
                "AI-powered content generation platform using OpenAI API for creating marketing copy and blog posts.",
            technologies: ["React", "Python", "FastAPI", "OpenAI"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Social Media Dashboard",
            description:
                "Analytics dashboard for managing multiple social media accounts with scheduled posting and insights.",
            technologies: ["Vue.js", "Express", "Redis", "Chart.js"],
            liveUrl: "#",
            githubUrl: "#",
        },
    ],
};

export default constantData
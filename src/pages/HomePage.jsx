import AchievementCard from "../components/AchievementCard";
import ProfilePortrait from "../components/ProfilePortrait";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import SkillCard from "../components/SkillCard";
import { achievements, projects, skillCategories } from "../data/portfolioData";

const profileLinks = {
  linkedin: {
    label: `linkedin.com/in/Giorgi_Tkebuchava`,
    href: `https://www.linkedin.com/in/giorgi-tkebuchava-9986b13a9/`,
  },
  github: {
    label: `github.com/Giorgi_Tkebuchava`,
    href: `https://github.com/buchqi`,
  },
};

function HomePage() {
  return (
    <main>
      <section id="home" className="relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_34%),radial-gradient(circle_at_85%_25%,_rgba(15,23,42,0.08),_transparent_28%),linear-gradient(135deg,_#ffffff,_#f7f8fb)]" />
        <div className="section-shell relative grid min-h-[calc(100vh-73px)] items-center gap-14 py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Giorgi Tkebuchava
            </h1>
            <p className="mt-4 text-2xl font-semibold text-accent">
              Junior Software Developer | Backend & AI Systems Engineer
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-graphite lg:mx-0">
              I build practical software systems that combine backend
              engineering with modern AI development, including AI agent
              orchestration, RAG pipelines, MCP integrations, and intelligent
              automation workflows. With hands-on experience in Python, FastAPI,
              React, and scalable product development, I focus on creating
              real-world software solutions that bridge traditional engineering
              with advanced AI-powered systems.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#projects"
                className="rounded-lg bg-accent px-6 py-3 text-center text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-accent-dark"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-line bg-white px-6 py-3 text-center text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="grid gap-8">
            <ProfilePortrait />
            <div className="rounded-lg border border-line bg-night p-6 text-white shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
                Focus Areas
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  "Python backend systems",
                  "API design and databases",
                  "AI-assisted tooling",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-sm font-medium text-slate-200">{item}</p>
                  </div>
                ))}{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell">
        <SectionHeader
          kicker="About Me"
          title="A concise snapshot for recruiters"
        ></SectionHeader>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            [
              "Personal Summary",
              "I am a junior software developer focused on backend engineering, AI systems development, and building practical software solutions that solve real-world problems. My experience includes developing scalable applications, intelligent automation systems, and product-oriented software using Python, FastAPI, React, and modern engineering practices. I continuously expand my expertise through hands-on development, technical experimentation, and high-impact project building.",
            ],
            [
              "Career Goals",
              "My goal is to grow into an advanced software and AI engineer by building increasingly sophisticated backend systems, intelligent automation products, and scalable AI-powered applications. I aim to contribute to innovative technical teams, deepen my expertise in software architecture and machine learning, and eventually work on cutting-edge technologies that combine engineering excellence with modern AI implementation.",
            ],
            [
              "Technical Direction",
              "My technical focus centers on backend systems, full-stack product development, and intelligent software engineering. I specialize in Python development while actively advancing in modern AI systems design, automation workflows, and scalable product architecture. My direction is centered on bridging traditional software engineering with next-generation AI solutions.",
            ],
            [
              "Education",
              "I am currently studying Computer Science at Kutaisi International University, where I continue strengthening my theoretical and practical foundation in software engineering, system design, and advanced technical problem-solving. My background also includes high-level STEM achievements, international innovation recognition, and technical leadership experiences that support my long-term engineering ambitions.",
            ],
          ].map(([title, text]) => (
            <article key={title} className="panel p-6">
              <h3 className="text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-graphite">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="bg-white">
        <div className="section-shell">
          <SectionHeader
            kicker="Skills"
            title="Technical toolkit"
          ></SectionHeader>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {skillCategories.map((category) => (
              <SkillCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="section-shell relative overflow-visible"
      >
        <SectionHeader kicker="Projects" title="Selected work"></SectionHeader>
        <div className="relative mt-10 grid items-start gap-6 overflow-visible lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="achievements" className="bg-white">
        <div className="section-shell">
          <SectionHeader
            kicker="Achievements"
            title="Awards, learning, and leadership"
          ></SectionHeader>
          <div className="relative mt-10 grid gap-5 border-l border-blue-100 pl-6 md:grid-cols-2">
            {achievements.map((achievement) => (
              <AchievementCard
                key={achievement.title}
                achievement={achievement}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell">
        <SectionHeader kicker="Contact" title="Let us connect">
          Replace the usernames once to generate recruiter-facing profile links
          automatically.
        </SectionHeader>
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="panel p-6">
            <div className="space-y-5 text-sm text-graphite">
              <p>
                <span className="font-semibold text-ink">Email:</span>{" "}
                giorgitkebuchava15@gmail.com
              </p>
              <p>
                <span className="font-semibold text-ink">LinkedIn:</span>{" "}
                <a
                  href={profileLinks.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all font-medium text-accent underline-offset-4 transition hover:text-accent-dark hover:underline focus:outline-none focus:ring-4 focus:ring-blue-100"
                  aria-label="Open LinkedIn profile in a new tab"
                >
                  {profileLinks.linkedin.label}
                </a>
              </p>
              <p>
                <span className="font-semibold text-ink">GitHub:</span>{" "}
                <a
                  href={profileLinks.github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all font-medium text-accent underline-offset-4 transition hover:text-accent-dark hover:underline focus:outline-none focus:ring-4 focus:ring-blue-100"
                  aria-label="Open GitHub profile in a new tab"
                >
                  {profileLinks.github.label}
                </a>
              </p>
            </div>
            <a
              href="[RESUME LINK]"
              className="mt-8 inline-flex rounded-lg bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-accent"
            >
              Download Resume
            </a>
          </div>

          <form className="panel grid gap-5 p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-lg border border-line px-4 py-3 font-normal text-ink outline-none transition focus:border-accent focus:ring-4 focus:ring-blue-100"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Email
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="rounded-lg border border-line px-4 py-3 font-normal text-ink outline-none transition focus:border-accent focus:ring-4 focus:ring-blue-100"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Message
              <textarea
                rows="5"
                placeholder="Write your message"
                className="resize-none rounded-lg border border-line px-4 py-3 font-normal text-ink outline-none transition focus:border-accent focus:ring-4 focus:ring-blue-100"
              />
            </label>
            <button
              type="button"
              className="w-full rounded-lg bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-accent-dark sm:w-auto sm:justify-self-start"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default HomePage;

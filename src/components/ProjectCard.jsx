function ProjectCard({ project }) {
  const hasProjectImage =
    typeof project.image === "string" && !project.image.startsWith("[");

  return (
    <article className="group relative z-10 min-h-[520px] rounded-lg border border-line bg-night shadow-soft transition-all duration-500 ease-in-out focus-within:z-30 focus-within:border-blue-200 focus-within:shadow-2xl md:min-h-[340px] md:hover:z-30 md:hover:min-h-[540px] md:hover:-translate-y-3 md:hover:scale-x-[1.01] md:hover:border-blue-200 md:hover:shadow-2xl md:focus-within:min-h-[540px] md:focus-within:-translate-y-3 md:focus-within:scale-x-[1.01]">
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div className="h-full bg-gradient-to-br from-slate-200 via-white to-blue-100 transition duration-700 ease-in-out md:group-hover:scale-105 md:group-focus-within:scale-105">
          {hasProjectImage ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center px-6 text-center text-sm font-semibold uppercase tracking-[0.18em] text-graphite">
              {project.image}
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-night/82 via-night/20 to-night/78 transition duration-500 md:group-hover:bg-night/80 md:group-focus-within:bg-night/80" />
      </div>

      <div className="relative flex min-h-[520px] flex-col justify-between p-6 text-white transition-all duration-500 md:min-h-[340px] md:group-hover:min-h-[540px] md:group-focus-within:min-h-[540px]">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-slate-900/40 bg-night/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg backdrop-blur">
            Project
          </p>
          <h3 className="max-w-sm text-2xl font-semibold tracking-tight drop-shadow">
            {project.title}
          </h3>
        </div>

        <div className="rounded-lg border border-white/10 bg-night/55 p-4 shadow-lg backdrop-blur transition-all duration-500 ease-in-out md:group-hover:bg-night/80 md:group-focus-within:bg-night/80">
          <p className="text-sm leading-6 text-slate-100 transition-all duration-500 md:line-clamp-2 md:group-hover:line-clamp-none md:group-focus-within:line-clamp-none">
            {project.shortDescription}
          </p>

          <div className="mt-5 max-h-[500px] translate-y-0 overflow-hidden opacity-100 transition-all duration-500 ease-in-out md:mt-0 md:max-h-0 md:translate-y-5 md:opacity-0 md:group-hover:mt-5 md:group-hover:max-h-[500px] md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:mt-5 md:group-focus-within:max-h-[500px] md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100">
            <p className="text-sm leading-7 text-slate-100">{project.description}</p>
            <p className="mt-4 text-sm font-semibold text-white">
              <span className="text-blue-200">Tech Stack:</span> {project.techStack}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.github}
                className="rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-ink"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard

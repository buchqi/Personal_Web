function SkillCard({ title, skills }) {
  return (
    <article className="panel p-6">
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  )
}

export default SkillCard

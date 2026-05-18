function AchievementCard({ achievement }) {
  return (
    <article className="relative rounded-lg border border-line bg-white p-6 shadow-soft">
      <div className="absolute -left-2 top-7 h-4 w-4 rounded-full border-4 border-white bg-accent shadow" />
      <p className="text-sm font-semibold text-accent">{achievement.date}</p>
      <h3 className="mt-2 text-lg font-semibold text-ink">{achievement.title}</h3>
      <p className="mt-3 text-sm leading-7 text-graphite">{achievement.description}</p>
    </article>
  )
}

export default AchievementCard

export default function SkillPill({ label, className }) {
  return (
    <div className={`text-accent-3 font-lato font-bold text-sm 
      border border-accent-3 rounded-full px-3 py-1 ${className}`}>
      {label}
    </div>
  )
}
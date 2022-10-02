export default function ThemeButton({ label, className, redirectUrl }) {
  return (
    <button
      className={`rounded-lg border-2 px-4 py-2 font-bold text-lg duration-300 ${className}`}>
      <a href={redirectUrl} target="_blank">{label}</a>
    </button>
  )
}

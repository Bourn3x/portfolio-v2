export default function ThemeButton({ label, className, redirectUrl }) {
  return (
    <a href={redirectUrl} target="_blank" rel="noopener noreferrer">
      <button
        className={`rounded-lg border-2 px-4 py-2 font-bold text-lg duration-300 ${className}`}>
        {label}
      </button>
    </a>
  )
}

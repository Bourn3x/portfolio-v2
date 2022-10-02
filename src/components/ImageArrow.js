export default function Arrow({ label, extraClassName, onClick }){
  return (
    <button
      onClick={onClick} 
      className={`absolute top-1/2 text-2xl font-mono text-white bg-raisin-black 
        w-8 rounded-full z-10 opacity-80 hover:opacity-100 duration-200
        ${extraClassName}`}>
      {label}
    </button>
  )
}

import { colors } from "constants/colors";

export default function Footer() {
  return (
    <>
      <div className="border-b border-gray-300 w-full"/>

      <footer className="flex flex-col sm:flex-row items-start justify-center gap-x-12 gap-y-8 px-4 py-4 bg-amber-50">

        <div className="flex flex-col items-start">
          <div className="font-medium text-2xl font-bold mb-2">Colors Used</div>
          <div className="grid grid-cols-4 gap-x-4">
            {colors.map(color =>
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full ${color.accent}`} />
                <div>{color.hexcode}</div>
              </div> 
            )}
          </div>
        </div>

        <div className="text-left">
          <div className="font-medium text-2xl font-bold mb-2">Contact</div>
          <div className="text-xl">
            LinkedIn - 
            <a
              href="https://www.linkedin.com/in/julian-chong-lee-wen/" 
              target="_blank"
              className="ml-2 ">
              https://www.linkedin.com/in/julian-chong-lee-wen/
            </a>
          </div>
          <div className="mt-2 text-xl">
            Email - julianchong10@gmail.com
          </div>
        </div>

      </footer>
    </>
  )
}

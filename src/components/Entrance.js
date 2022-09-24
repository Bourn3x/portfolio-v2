import LottieToaster from "./LottieToaster";
import Navbar from "./Navbar";
import Profile from "./Profile";

export default function Entrance() {
  return (
    <div className="flex w-full">

      <div className="bg-bright-gray w-1/4 flex items-center justify-center">
        <LottieToaster />
      </div>

      <div className="bg-chinese-black w-3/4 pl-20">
        <Navbar />
        <Profile />
      </div>
    </div>
  )
}

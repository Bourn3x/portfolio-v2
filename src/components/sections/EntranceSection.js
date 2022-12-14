import LottieToaster from "components/LottieToaster";
import Navbar from "components/Navbar";
import Profile from "components/Profile";

export default function Entrance() {
  return (
    <section id="intro">
      <div className="flex w-full">

        <div className="bg-toasty-orange w-1/4 hidden lg:flex items-center justify-center">
          <LottieToaster />
        </div>

        <div className="bg-chinese-black w-full lg:w-3/4 px-4 sm:px-10 md:pl-20">
          <Navbar />
          <Profile />
        </div>
      </div>
    </section>
  )
}

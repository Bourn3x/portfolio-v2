import { motion } from "framer-motion";
import { PROFILE_ENTRANCE_DEPLAY } from "constants/timings";

const motionProfilecontainer = {
  show: {
    transition: {
      delayChildren: PROFILE_ENTRANCE_DEPLAY,
      staggerChildren: 0.2,
    }
  }
}

const motionProfileItem = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
}

export default function Profile() {
  return (
    <motion.div
      variants={motionProfilecontainer}
      initial="hidden"
      animate="show"
      className="relative mt-24 w-fit mb-36">

      <motion.img variants={motionProfileItem} className="absolute" src="entrance-border-1.svg" />

      <div className="px-4 xxs:px-12 md:px-20 lg:px-16 xl:px-32 pt-32 pb-40">
        <motion.h1 
          variants={motionProfileItem} 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-lotion-white font-bold relative header">
          Full Stack Developer
          <span className="text-accent-1 ml-1 font-sans">.</span>
        </motion.h1>
        <motion.div variants={motionProfileItem} className="header-underline"/>
        <motion.h2 variants={motionProfileItem} className="text-xl md:text-2xl text-lotion-white font-bold ml-1 mt-8">
          Hi, I’m Julian! <br/>
          I like building scalable full stack 🚀 products with great <br/>
          user experience.... and clean coding.
        </motion.h2>
      </div>

      <motion.img variants={motionProfileItem} className="absolute right-0 bottom-0" src="entrance-border-2.svg" />

      <style jsx>{`
        :global(.header) {
          transform-style: preserve-3d;
        }
        :global(.header-underline) {
          width: 60%;
          height: 5px;
          background-color: var(--accent-1);
          transform: translateZ(-1px);
        }
        @media (min-width: 640px) {
          :global(.header-underline) {
            margin-left: -20px;
            width: 320px;
          }
        }
        @media (min-width: 768px) {
          :global(.header-underline) {
            margin-left: -40px;
            width: 416px;
          }
        }
        @media (min-width: 1024px) {
          :global(.header-underline) {
            width: 488px;
          }
        }
      `}</style>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { INTRO_COVER_EXIT_DELAY } from "/src/util/timings";

const motionNavbarcontainer = {
  show: {
    transition: {
      delayChildren: INTRO_COVER_EXIT_DELAY,
      staggerChildren: 0.2,
    }
  }
}

const motionNavbarItem = {
  hidden: {
    y: -10,
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

const links = [
  {
    label: "Intro",
    section: "#intro",
    color: "border-accent-1",
  },
  {
    label: "Skills",
    section: "#skills",
    color: "border-accent-2",
  },
  {
    label: "Work Experience",
    section: "#work",
    color: "border-accent-3",
  },
  {
    label: "Personal Projects",
    section: "#personal",
    color: "border-accent-4",
  },
];

export default function Navbar() {
  return (
    <motion.div 
      variants={motionNavbarcontainer}
      initial="hidden"
      animate="show"
      className="flex pt-12">
      {links.map(link => 
        <motion.div key={link.label} variants={motionNavbarItem}>
          <div className="mr-8 cursor-pointer link-container">
            <p className="text-2xl text-bright-gray font-bold">{link.label}</p>
            <div className={`border-b-2 ${link.color} w-3/4 duration-500 link-underline`} />   
          </div>
        </motion.div>
      )}

      <style jsx>{`
        .link-container:hover > .link-underline {
          width: 100%;
        }
      `}</style>
    </motion.div>
  )
}

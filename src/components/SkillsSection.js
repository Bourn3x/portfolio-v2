import { motion } from "framer-motion";
import SkillsHolder from "./SkillsHolder";
import { SKILLS } from "../constants/skills";

const motionSkillsContainer = {
  show: {
    transition: {
      staggerChildren: 0.2,
    }
  }
}

const motionSkillsItem = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
}

export default function SkillsSection() {
  return (
    <motion.div
      variants={motionSkillsContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mt-72 px-32"
    >
      <motion.h1 variants={motionSkillsItem} className="text-7xl text-accent-2 font-bold">
        Skills
      </motion.h1>
      <motion.h2 variants={motionSkillsItem} className="text-3xl font-semibold mt-2 mb-32">
        Some stuff that I'm
        <span className="text-accent-2"> pretty good </span>
        at.
      </motion.h2>

      {SKILLS.map(skillObject =>
        <SkillsHolder 
          key={skillObject.category}
          motionConfig={motionSkillsItem}
          {...skillObject}
        />
      )}
    </motion.div>
  )
}

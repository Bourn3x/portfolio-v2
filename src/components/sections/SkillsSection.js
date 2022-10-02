import { motion } from "framer-motion";
import SkillsHolder from "components/SkillsHolder";
import { SKILLS } from "constants/skills";

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
    <section>
      <motion.div
        variants={motionSkillsContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-48 md:mt-72 px-6 xxs:px-12 md:px-24 lg:px-32"
      >
        <motion.h1 variants={motionSkillsItem} className="text-6xl xxs:text-7xl text-accent-2 font-bold">
          Skills
        </motion.h1>
        <motion.h2 variants={motionSkillsItem} className="text-2xl xxs:text-3xl font-semibold mt-2 mb-16 lg:mb-32">
          Some stuff that I&apos;m
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
    </section>
  )
}

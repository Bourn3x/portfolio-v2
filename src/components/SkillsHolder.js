import { motion } from "framer-motion";

export default function SkillsHolder({ category, skills, motionConfig }) {
  return (
    <motion.div variants={motionConfig} className="block lg:flex mb-24">

      <div className="flex mb-12 lg:mb-0 lg:w-44">
        <h3 className="text-4xl text-accent-2 font-bold">
          {category}
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-12 w-full max-w-5xl">
        {skills.map(skill =>
          <motion.div
            whileHover={{
              scale: 1.2,
              color: 'var(--accent-2)',
              transition: { duration: 0.2 },
            }} 
            key={skill.name} 
            className="flex flex-col items-center text-chinese-black"
          >
            <i className={`${skill.iconClassName} text-4xl xxs:text-5xl`} />
            <p className="font-medium mt-2 text-2xl">{skill.name}</p>
          </motion.div>
        )}
      </div>

    </motion.div>
  )
}
import { motion } from "framer-motion";
import PersonalProjectHolder from "components/PersonalProjectHolder";

const motionPersonalContainer = {
  show: {
    transition: {
      staggerChildren: 0.3,
    }
  }
}

const motionPersonalItem = {
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

export default function PersonalSection() {
  return (
    <section>
      <motion.div
        variants={motionPersonalContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center px-4"
      >
        <motion.h1 variants={motionPersonalItem} className="text-6xl xxs:text-7xl text-accent-4 font-bold pt-40 text-center">
          Personal Projects
        </motion.h1>
        <motion.h2 variants={motionPersonalItem} className="text-2xl xxs:text-3xl font-semibold mt-2 mb-16 xs:mb-32 text-center">
          A few
          <span className="text-accent-4"> side projects </span>
          I&apos;ve worked on during my free time.
        </motion.h2>

        <div className="flex flex-col gap-y-12">
          <PersonalProjectHolder
            imageUrl="personals/needsomethingtodo.png"
            title="1. Need Something To Do"
            description="An app that generates random activities for
            you to do. Built using React.js, and Vivus to animate SVGs."
            skills={["React.js", "Vivus"]}
            siteUrl="https://needsomethingtodo.vercel.app/"
            gitUrl="https://github.com/Bourn3x/need-something-to-do"
            motionConfig={motionPersonalItem}
          />
          <PersonalProjectHolder
            imageUrl="personals/portfolio-v2.png"
            title="2. Portfolio V2"
            description="Second iteration of my portfolio. Here I
            showcase my skills, work experience, and personal projects
            in a simplistic web UI."
            skills={["Next.js", "TailwindCSS", "Framer Motion", "Figma"]}
            siteUrl="/"
            gitUrl="https://github.com/Bourn3x/portfolio-v2"
            motionConfig={motionPersonalItem}
          />
          <PersonalProjectHolder
            imageUrl="personals/styl.png"
            title="3. Styl"
            description="An official landing page for an auditing and
            accounting firm."
            skills={["HTML", "CSS", "Bootstrap 4", "Figma"]}
            siteUrl="https://www.styl.com.my/"
            motionConfig={motionPersonalItem}
          />
          <PersonalProjectHolder
            imageUrl="personals/pew.gif"
            title="4. Space Invaders"
            description="A retro classic video game inspired from Space Invaders.
            Built from scratch using C++, and SFML to render assets."
            skills={["C/C++", "SFML"]}
            gitUrl="https://github.com/Bourn3x/Space-Invaders-v2"
            motionConfig={motionPersonalItem}
          />
        </div>
      </motion.div>
    </section>
  )
}
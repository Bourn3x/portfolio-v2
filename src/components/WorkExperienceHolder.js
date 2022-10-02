import { motion } from "framer-motion";
import ImageSlider from "components/ImageSlider";
import SkillPill from "components/SkillPill";

export default function WorkExperienceHolder({
  images,
  title,
  description,
  skills,
  motionConfig,
}) {
  return (
    <motion.div variants={motionConfig}>
      <ImageSlider 
        images={images}
      />
      <div className="max-w-md">
        <h2 className="text-2xl xxs:text-3xl font-bold mt-8 mb-4 text-accent-3">
          {title}
        </h2>
        <p className="text-justify text-lotion-white font-medium font-lato text-md mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-4">
          {skills.map(skill => <SkillPill key={skill} label={skill}/>)}
        </div>
      </div>

    </motion.div>
  )
}

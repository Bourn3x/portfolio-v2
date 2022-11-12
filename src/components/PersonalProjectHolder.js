import Image from "next/image";
import { motion } from "framer-motion";
import SkillPill from "./SkillPill";
import ThemeButton from "./ThemeButton";

export default function PersonalProjectHolder({
  imageUrl,
  imageHeight = 305,
  title,
  description,
  skills,
  siteUrl,
  gitUrl,
  motionConfig,
}) {  
  return (
    <motion.div variants={motionConfig} className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-6 max-w-6xl">
      <div className="max-w-2xl image-container">
        <Image src={imageUrl} width={535} height={imageHeight} className="rounded-xl" quality={100} priority alt=""/>
        {/* <img src={imageUrl} alt="" className="rounded-xl"/> */}
      </div>

      <div>
        <h3 className="text-3xl font-bold text-accent-4">
          {title}
        </h3>
        <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
          {skills.map(skill => 
            <SkillPill
              key={skill}
              label={skill}
              className="!text-accent-4 !border-accent-4"
            />
          )}
        </div>
        <p className="text-justify text-md font-bold text-chinese-black font-lato my-4 max-w-2xl lg:max-w-md">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-x-4 gap-y-4">
          {siteUrl &&
            <ThemeButton 
              label="Go To Site"
              className="border-accent-4 text-accent-4 hover:bg-accent-4 hover:text-lotion-white"
              redirectUrl={siteUrl}
            />
          }
          {gitUrl &&
            <ThemeButton 
              label="View Git Repo"
              className="border-accent-3 text-accent-3 hover:bg-accent-3 hover:text-lotion-white"
              redirectUrl={gitUrl}
            />
          }
        </div>
        
      </div>
    </motion.div>
  )
}
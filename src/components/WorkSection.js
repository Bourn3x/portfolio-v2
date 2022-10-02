import { motion } from "framer-motion";
import WorkExperienceHolder from "components/WorkExperienceHolder";
import { bitcarraImages, esriImages, suriaLabsImages, jetspreeImages } from "constants/images";

const motionWorkContainer = {
  show: {
    transition: {
      staggerChildren: 0.5,
    }
  }
}

const motionWorkItem = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
}

export default function WorkSection() {
  return (
    <motion.section
      variants={motionWorkContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mt-48 md:mt-72 bg-raisin-black"
    >
      <div className="flex flex-col items-center px-4">
        <motion.h1 variants={motionWorkItem} className="text-6xl xxs:text-7xl text-accent-3 font-bold pt-40">
          Work Experience
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-20 mt-16 max-w-7xl">
          <WorkExperienceHolder
            images={bitcarraImages}
            title="1. Bitcarra"
            description="Bitcarra is a blockchain website where users 
            can play games using the inhouse currency, or their crypto cash. 
            Worked in a team of 6 to develop the client side, admin portal, 
            and RESTful APIs."
            skills={["React.js", "SvelteKit", "NestJS", "TypeScript", "postgreSQL", "typeORM"]}
            motionConfig={motionWorkItem}
          />
          <WorkExperienceHolder 
            images={esriImages}
            title="2. Petronas MyProData"
            description="MyProData is a dashboard developed to allow companies to
            download data, and information on geographic fields such as Seismic data,
            GIS, petroleum wells, etc. Worked in a team of 3 to develop the client 
            side, admin portal, and RESTful APIs."
            skills={["Next.js", "TypeScript", "MySQL", "Objection.js"]}
            motionConfig={motionWorkItem}
          />
          <WorkExperienceHolder 
            images={suriaLabsImages}
            title="3. SuriaLabs Payment"
            description="Solo developed a website to allow my company's clients
            to pay us using credit/debit card. This allows for international clients
            to make payments easily."
            skills={["Svelte", "FastAPI", "Stripe", "Docker", "Helm", "Kubernetes"]}
            motionConfig={motionWorkItem}
          />
          <WorkExperienceHolder 
            images={jetspreeImages}
            title="4. Jetspree"
            description="In a team of 2, developed an e-commerce mobile app from scratch.
            Includes features such as auctioning, live chat, item filterting, 
            shopping card, and checkout."
            skills={["Flutter", "Redux"]}
            motionConfig={motionWorkItem}
          />
        </div>

        <div className="h-72" />
      </div>
    </motion.section>
  )
}

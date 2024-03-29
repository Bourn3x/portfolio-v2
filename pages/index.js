import { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import LottiePenguin from 'components/LottiePenguin';
import EntranceSection from 'components/sections/EntranceSection';
import SkillsSection from 'components/sections/SkillsSection';
import WorkSection from 'components/sections/WorkSection';
import PersonalSection from 'components/sections/PersonalSection';
import Footer from 'components/sections/Footer';
import { INTRO_COVER_EXIT_DELAY } from 'constants/timings';

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

const motionIntroCoverContainer = {
  show: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: "110vw",
    transition: {
      ease: "easeInOut",
      duration: INTRO_COVER_EXIT_DELAY,
    }
  }
}

export default function Home() {
  const [finishIntro, setFinishIntro] = useState(false);

  return (
    <>
      <Head>
        <title>Julian&apos;s Portfolio</title>
        <meta name="description" content="Julian's Beautiful Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <div className="min-h-[100vh] min-w-[100vw] overflow-x-hidden relative">
          <AnimatePresence>
            {!finishIntro &&
              <motion.div
                className="h-screen w-screen flex items-center justify-center bg-gray-500 absolute z-50 overflow-hidden"
                key="intro-cover"
                variants={motionIntroCoverContainer}
                initial="show"
                animate="show"
                exit="exit"
                onAnimationComplete={() => {
                  setTimeout(() => setFinishIntro(true), INTRO_COVER_EXIT_DELAY * 1000 )}
                }
              >
                <LottiePenguin />
              </motion.div>
            }
          </AnimatePresence>

          {
            finishIntro &&
            <>
              <EntranceSection />
              <SkillsSection />
              <WorkSection />
              <PersonalSection />
              <div className="h-48"/>
              <Footer />
            </>
          }
        </div>
      </main>
    </>
  )
}

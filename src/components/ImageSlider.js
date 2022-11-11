import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import ImageArrow from "components/ImageArrow";
import Image from "next/image";

const imageMotionVariants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      y: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function ImageSlider({ images }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [imagesMapped, setImagesMapped] = useState([]);

  useEffect(() => {
    // Preload images
    setImagesMapped(images.map(imageFilename => 
      <Image src={imageFilename} width={410} height={230} priority/>
    ));
  }, [])

  const paginate = (newDirection) => {
    let newPage = page + newDirection;
    if (newPage >= images.length) {
      newPage = 0;
    }
    else if (newPage < 0) {
      newPage = images.length - 1;
    }
    setPage([newPage, newDirection]);
  };

  return (
    <div className="relative rounded-lg flex flex-col items-center overflow-hidden container">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div 
          key={page}
          custom={direction}
          variants={imageMotionVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="rounded-xl absolute w-11/12 top-3 image-container"
        >
          {imagesMapped[page]}
        </motion.div>
      </AnimatePresence>

      <ImageArrow 
        label="►"
        extraClassName="pl-1 right-0.5"
        onClick={() => paginate(1)}
      />
      <ImageArrow 
        label="◄"
        extraClassName="pr-0.5 left-0.5"
        onClick={() => paginate(-1)}
      />

      <div className="mt-4 absolute bottom-3 flex gap-x-2">
        {React.Children.toArray(new Array(images.length).fill(0).map((_, i) => 
          <div
            key={i}
            className={`rounded-full border-2 border-white w-3 h-3 duration-500 ${page == i 
              ? 'bg-white' 
              : ''}`
            }
          />
        ))}
      </div>

      <style jsx>{`
        .container {
          overflow: hidden;
          height: 60vw;
          max-height: 280px;
          max-width: 450px;
          background-image: linear-gradient(to bottom right, var(--accent-3), var(--accent-4));
        }

        .image-container {
          max-width: 95% !important;
          max-height: 90%;
        }
      `}</style>
    </div>
  )
}
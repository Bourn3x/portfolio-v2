import { motion } from 'framer-motion';
import Lottie from "react-lottie";
import penguin from "lotties/penguin.json";

const lottieOptions = {
  loop: false,
  autoplay: true,
  animationData: penguin,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export default function LottiePenguin() {
  return (
    <motion.div
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Lottie options={lottieOptions} isClickToPauseDisabled={true}/>
    </motion.div>
  );
}

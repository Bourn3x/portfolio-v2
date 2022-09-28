import { motion } from 'framer-motion';
import Lottie from "react-lottie";
import toaster from "../lotties/toaster.json";
import { PROFILE_ENTRANCE_DEPLAY } from "/src/constants/timings";

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: toaster,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export default function LottieToaster() {
  return (
    <motion.div
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: PROFILE_ENTRANCE_DEPLAY + 1, duration: 1 }}
    >
      <Lottie 
        style={{ "maxWidth": "300px" }}
        options={lottieOptions}
        isClickToPauseDisabled={true}
      />
    </motion.div>
  );
}

import { motion } from "framer-motion";

const LoadingDots = () => (
  <span className="inline-flex items-center gap-[3px]" aria-hidden="true">
    {[0, 0.16, 0.32].map((delay, index) => (
      <motion.span
        key={index}
        className="h-[5px] w-[5px] rounded-full bg-current"
        animate={{
          y: [0, -2, 0],
          opacity: [0.35, 1, 0.35],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      />
    ))}
  </span>
);

export default LoadingDots;

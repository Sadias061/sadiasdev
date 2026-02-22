import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Layers,
  Terminal,
  Braces,
  GitBranch,
  Cpu,
  Server,
  Wifi,
  Cloud,
  Shield,
} from "lucide-react";

const icons = [
  { Icon: Code2, x: "8%", y: "15%", delay: 0, duration: 7 },
  { Icon: Database, x: "85%", y: "20%", delay: 1.5, duration: 8 },
  { Icon: Globe, x: "70%", y: "60%", delay: 0.5, duration: 6 },
  { Icon: Layers, x: "15%", y: "70%", delay: 2, duration: 9 },
  { Icon: Terminal, x: "50%", y: "10%", delay: 1, duration: 7 },
  { Icon: Braces, x: "90%", y: "80%", delay: 0.8, duration: 8 },
  { Icon: GitBranch, x: "30%", y: "85%", delay: 1.2, duration: 6 },
  { Icon: Cpu, x: "75%", y: "40%", delay: 2.5, duration: 7 },
  { Icon: Server, x: "20%", y: "45%", delay: 0.3, duration: 9 },
  { Icon: Wifi, x: "60%", y: "75%", delay: 1.8, duration: 8 },
  { Icon: Cloud, x: "40%", y: "30%", delay: 0.7, duration: 7 },
  { Icon: Shield, x: "5%", y: "90%", delay: 2.2, duration: 6 },
];

const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map(({ Icon, x, y, delay, duration }, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/[0.15] dark:text-primary/[0.10]"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -15, 5, -10, 0],
            rotate: [0, 3, -2, 1, 0],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={28} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;

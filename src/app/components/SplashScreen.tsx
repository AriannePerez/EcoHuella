import { motion } from "motion/react";
import { Leaf } from "lucide-react";

export function SplashScreen({ onFinish }: { onFinish: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={() => setTimeout(onFinish, 2000)}
      className="fixed inset-0 bg-gradient-to-br from-[#00FF94] via-[#B4F8C8] to-[#0A2463] flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          duration: 1.2,
        }}
        className="relative"
      >
        <div className="w-32 h-32 bg-white/20 backdrop-blur-xl rounded-[2rem] flex items-center justify-center shadow-2xl border-4 border-white/30">
          <Leaf className="w-16 h-16 text-white" strokeWidth={2.5} />
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute -top-2 -right-2 w-8 h-8 bg-[#0A2463] rounded-full flex items-center justify-center border-2 border-white"
        >
          <span className="text-white text-xs">✓</span>
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-4xl text-white tracking-tight"
      >
        Eco Huella
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-2 text-white/90"
      >
        Pequeñas acciones, gran impacto.
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-12 flex gap-2"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: i * 0.2,
            }}
            className="w-2 h-2 bg-white rounded-full"
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

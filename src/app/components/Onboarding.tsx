import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Scan, Award, TrendingDown, ChevronRight } from "lucide-react";

const slides = [
  {
    icon: Scan,
    title: "Escanea tus productos",
    description:
      "Usa nuestra cámara inteligente para escanear códigos de barras y conocer el impacto ambiental de tus compras.",
    color: "from-[#00FF94] to-[#B4F8C8]",
  },
  {
    icon: TrendingDown,
    title: "Reduce tu huella",
    description:
      "Recibe consejos personalizados y retos diarios para disminuir tu impacto en el planeta de forma divertida.",
    color: "from-[#B4F8C8] to-[#0A2463]",
  },
  {
    icon: Award,
    title: "Gana recompensas",
    description:
      "Desbloquea insignias, sube de nivel y compite con la comunidad mientras cuidas el medio ambiente.",
    color: "from-[#0A2463] to-[#00FF94]",
  },
];

export function Onboarding({ onFinish }: { onFinish: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onFinish();
    }
  };

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className="fixed inset-0 bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md flex flex-col items-center text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className={`w-40 h-40 rounded-[2.5rem] bg-gradient-to-br ${slides[currentSlide].color} flex items-center justify-center shadow-2xl mb-12`}
            >
              <CurrentIcon
                className="w-20 h-20 text-white"
                strokeWidth={2}
              />
            </motion.div>

            <h2 className="text-3xl mb-4 text-foreground">
              {slides[currentSlide].title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="px-6 pb-12">
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                width: index === currentSlide ? 32 : 8,
                backgroundColor:
                  index === currentSlide ? "#00FF94" : "#E8F5F1",
              }}
              className="h-2 rounded-full"
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-full bg-[#00FF94] text-[#0A2463] h-14 rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
        >
          <span>{currentSlide === slides.length - 1 ? "Comenzar" : "Siguiente"}</span>
          <ChevronRight className="w-5 h-5" />
        </button>

        {currentSlide < slides.length - 1 && (
          <button
            onClick={onFinish}
            className="w-full mt-4 text-muted-foreground h-12"
          >
            Saltar
          </button>
        )}
      </div>
    </div>
  );
}

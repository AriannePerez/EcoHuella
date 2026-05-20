import { motion } from "motion/react";
import {
  X,
  TrendingUp,
  Droplets,
  Leaf,
  AlertCircle,
  CheckCircle,
  Sparkles,
  Share2,
} from "lucide-react";
import confetti from "canvas-confetti";
import { useEffect } from "react";

export function ScanResult({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00FF94", "#B4F8C8", "#0A2463"],
      });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const impacts = [
    {
      icon: TrendingUp,
      label: "Huella de carbono",
      value: "Alto",
      detail: "2.4 kg CO₂",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      icon: Droplets,
      label: "Consumo de agua",
      value: "Medio",
      detail: "145 litros",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: Leaf,
      label: "Reciclabilidad",
      value: "Alto",
      detail: "85% reciclable",
      color: "text-[#00FF94]",
      bg: "bg-[#00FF94]/10",
    },
  ];

  const tips = [
    "Busca alternativas con menos empaque de plástico",
    "Considera productos de marcas locales para reducir transporte",
    "Recicla el envase en el contenedor amarillo",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background z-50 flex flex-col"
    >
      <div className="flex items-center justify-between p-6 border-b border-border">
        <h2 className="text-xl text-foreground">Resultado del Escaneo</h2>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-6 py-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-[#00FF94]/20 to-[#B4F8C8]/20 rounded-[2rem] p-6 mb-6 border border-[#00FF94]/30"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-lg flex-shrink-0">
                🥤
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-foreground mb-1">
                  Coca-Cola Zero 500ml
                </h3>
                <p className="text-muted-foreground text-sm">
                  Bebida carbonatada sin azúcar
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#00FF94] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#0A2463]" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Has ganado</p>
                  <p className="text-foreground">+25 Puntos Eco</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Impacto total</p>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <p className="text-foreground">Medio-Alto</p>
                </div>
              </div>
            </div>
          </motion.div>

          <h4 className="text-foreground mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-primary" />
            Análisis de Impacto Ambiental
          </h4>

          <div className="space-y-3 mb-6">
            {impacts.map((impact, index) => (
              <motion.div
                key={impact.label}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-2xl p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 ${impact.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <impact.icon className={`w-6 h-6 ${impact.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-muted-foreground">
                        {impact.label}
                      </span>
                      <span className={`text-sm ${impact.color}`}>
                        {impact.value}
                      </span>
                    </div>
                    <p className="text-foreground">{impact.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <h4 className="text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            Consejos Ecológicos
          </h4>

          <div className="space-y-3 mb-6">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border"
              >
                <div className="w-6 h-6 rounded-full bg-[#00FF94]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#00FF94] text-xs">✓</span>
                </div>
                <p className="text-sm text-foreground flex-1">{tip}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-[#0A2463] to-[#1E4A7F] rounded-2xl p-6 text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#00FF94]/20 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-[#00FF94]" />
              </div>
              <div>
                <h4 className="mb-1">Alternativa Eco-Friendly</h4>
                <p className="text-white/70 text-sm">
                  Te recomendamos productos similares con menor impacto
                </p>
              </div>
            </div>
            <button className="w-full bg-[#00FF94] text-[#0A2463] h-12 rounded-xl">
              Ver alternativas
            </button>
          </motion.div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-background border-t border-border">
        <div className="flex gap-3">
          <button className="flex-1 bg-primary text-primary-foreground h-14 rounded-2xl flex items-center justify-center gap-2">
            <Share2 className="w-5 h-5" />
            Compartir
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-card border-2 border-border text-foreground h-14 rounded-2xl"
          >
            Cerrar
          </button>
        </div>
      </div>
    </motion.div>
  );
}

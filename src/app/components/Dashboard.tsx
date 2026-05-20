import { motion } from "motion/react";
import {
  Leaf,
  TrendingDown,
  Award,
  Zap,
  Target,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export function Dashboard() {
  const challenges = [
    {
      id: 1,
      title: "Usa transporte público",
      progress: 2,
      total: 5,
      points: 50,
      icon: "🚌",
    },
    {
      id: 2,
      title: "Compra productos locales",
      progress: 1,
      total: 3,
      points: 30,
      icon: "🛒",
    },
    {
      id: 3,
      title: "Reduce uso de plástico",
      progress: 4,
      total: 7,
      points: 70,
      icon: "♻️",
    },
  ];

  const stats = [
    { label: "CO₂ ahorrado", value: "145", unit: "kg", icon: TrendingDown },
    { label: "Racha actual", value: "12", unit: "días", icon: Zap },
    { label: "Ranking", value: "#87", unit: "", icon: Award },
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-24">
      <div className="px-6 pt-8 pb-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl text-foreground mb-1">¡Hola, Ana!</h1>
            <p className="text-muted-foreground">Sigues haciendo la diferencia 🌱</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00FF94] to-[#B4F8C8] flex items-center justify-center shadow-lg">
            <span className="text-xl">👤</span>
          </div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-br from-[#00FF94] to-[#B4F8C8] rounded-[2rem] p-6 shadow-xl mb-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-[#0A2463]" />
              <span className="text-[#0A2463]">Tu Huella de Carbono</span>
            </div>

            <div className="flex items-end gap-3 mb-4">
              <h2 className="text-5xl text-[#0A2463]">2.4</h2>
              <span className="text-xl text-[#0A2463] mb-2">ton CO₂/mes</span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex-1 h-3 bg-white/30 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "35%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-[#0A2463] rounded-full"
                />
              </div>
              <span className="text-[#0A2463] text-sm">35%</span>
            </div>

            <p className="text-[#0A2463]/80 text-sm">
              ¡Excelente! Estás 65% por debajo del promedio nacional
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className="bg-card rounded-2xl p-4 border border-border shadow-sm"
            >
              <stat.icon className="w-5 h-5 text-primary mb-2" />
              <div className="text-2xl text-foreground mb-0.5">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.unit} {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            <h3 className="text-lg text-foreground">Retos Diarios</h3>
          </div>
          <button className="text-primary text-sm flex items-center gap-1">
            Ver todos
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3 mb-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className="bg-card rounded-2xl p-4 border border-border shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {challenge.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-foreground">{challenge.title}</h4>
                    <div className="flex items-center gap-1 text-primary bg-primary/10 px-2 py-1 rounded-lg text-xs ml-2">
                      <Sparkles className="w-3 h-3" />
                      +{challenge.points}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: `${(challenge.progress / challenge.total) * 100}%`,
                        }}
                        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {challenge.progress}/{challenge.total}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-[#0A2463] to-[#1E4A7F] rounded-2xl p-6 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 text-8xl opacity-10">🏆</div>
          <h3 className="text-lg mb-2">¡Sigue así!</h3>
          <p className="text-white/80 text-sm mb-4">
            Solo te faltan 50 puntos para alcanzar el nivel Eco Maestro
          </p>
          <button className="bg-[#00FF94] text-[#0A2463] px-6 py-2 rounded-xl text-sm">
            Ver recompensas
          </button>
        </motion.div>
      </div>
    </div>
  );
}

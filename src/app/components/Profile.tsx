import { motion } from "motion/react";
import {
  User,
  Settings,
  Share2,
  Trophy,
  TrendingDown,
  Calendar,
  Heart,
  Leaf,
  ChevronRight,
  Moon,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { useState } from "react";

export function Profile() {
  const [darkMode, setDarkMode] = useState(false);

  const stats = [
    { label: "Escaneos", value: "156", icon: "🔍" },
    { label: "Días activo", value: "45", icon: "📅" },
    { label: "CO₂ ahorrado", value: "145kg", icon: "🌍" },
  ];

  const achievements = [
    { icon: "👣", name: "Primera Huella" },
    { icon: "🔥", name: "Racha Semanal" },
    { icon: "🔍", name: "Eco Explorador" },
    { icon: "🌱", name: "Eco Guerrero" },
  ];

  const activities = [
    {
      date: "Hoy",
      items: [
        { icon: "🥤", action: "Escaneaste Coca-Cola Zero", points: 25 },
        { icon: "✅", action: "Completaste reto diario", points: 50 },
      ],
    },
    {
      date: "Ayer",
      items: [
        { icon: "🛒", action: "Compraste producto local", points: 30 },
        { icon: "♻️", action: "Reciclaste 5 productos", points: 40 },
      ],
    },
  ];

  const menuItems = [
    { icon: Bell, label: "Notificaciones", value: "Activadas" },
    { icon: Shield, label: "Privacidad", value: null },
    { icon: HelpCircle, label: "Ayuda y soporte", value: null },
    { icon: Share2, label: "Invitar amigos", value: null },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex-1 overflow-y-auto pb-24">
      <div className="px-6 pt-8 pb-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl text-foreground">Perfil</h1>
          <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
            <Settings className="w-5 h-5 text-foreground" />
          </button>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-br from-[#00FF94] to-[#B4F8C8] rounded-[2rem] p-6 mb-6 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative flex items-start gap-4 mb-6">
            <div className="w-20 h-20 bg-white rounded-[1.5rem] flex items-center justify-center text-4xl shadow-lg">
              👤
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-2xl text-[#0A2463] mb-1">Ana García</h2>
              <p className="text-[#0A2463]/70">Eco Guerrero 🌳</p>
            </div>
            <button className="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-[#0A2463]" />
            </button>
          </div>

          <div className="relative grid grid-cols-3 gap-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white/20 backdrop-blur-xl rounded-xl p-3 text-center"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-xl text-[#0A2463] mb-0.5">{stat.value}</div>
                <div className="text-xs text-[#0A2463]/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg text-foreground flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" />
            Logros Destacados
          </h3>
          <button className="text-primary text-sm flex items-center gap-1">
            Ver todos
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex gap-3 mb-6 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.name}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className="flex-shrink-0 w-20 bg-card border-2 border-primary rounded-2xl p-3 text-center"
            >
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <p className="text-xs text-foreground truncate">
                {achievement.name}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg text-foreground flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Actividad Reciente
          </h3>
        </div>

        <div className="space-y-4 mb-6">
          {activities.map((day, dayIndex) => (
            <motion.div
              key={day.date}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * dayIndex }}
            >
              <p className="text-sm text-muted-foreground mb-2">{day.date}</p>
              <div className="space-y-2">
                {day.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-card rounded-xl p-4 border border-border flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground text-sm">{item.action}</p>
                    </div>
                    <div className="text-primary text-sm">+{item.points}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="h-px bg-border mb-6" />

        <div className="space-y-2 mb-6">
          <button
            onClick={toggleDarkMode}
            className="w-full bg-card rounded-xl p-4 border border-border flex items-center gap-4 hover:border-primary transition-colors"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Moon className="w-5 h-5 text-primary" />
            </div>
            <span className="flex-1 text-left text-foreground">Modo oscuro</span>
            <div
              className={`w-12 h-7 rounded-full transition-colors ${
                darkMode ? "bg-primary" : "bg-muted"
              } relative`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  darkMode ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </div>
          </button>

          {menuItems.map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className="w-full bg-card rounded-xl p-4 border border-border flex items-center gap-4 hover:border-primary transition-colors"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="flex-1 text-left text-foreground">
                {item.label}
              </span>
              {item.value ? (
                <span className="text-sm text-muted-foreground">{item.value}</span>
              ) : (
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              )}
            </motion.button>
          ))}
        </div>

        <button className="w-full bg-destructive/10 text-destructive rounded-xl p-4 border border-destructive/20 flex items-center justify-center gap-2">
          <LogOut className="w-5 h-5" />
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}

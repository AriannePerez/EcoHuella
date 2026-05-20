import { motion } from "motion/react";
import { Trophy, Award, Crown, Star, Lock, TrendingUp } from "lucide-react";

export function Rewards() {
  const levels = [
    { id: 1, name: "Eco Novato", points: 0, unlocked: true, icon: "🌱" },
    { id: 2, name: "Eco Aprendiz", points: 500, unlocked: true, icon: "🌿" },
    { id: 3, name: "Eco Guerrero", points: 1500, unlocked: true, icon: "🌳" },
    { id: 4, name: "Eco Maestro", points: 3000, unlocked: false, icon: "🏆" },
    { id: 5, name: "Eco Leyenda", points: 5000, unlocked: false, icon: "👑" },
  ];

  const badges = [
    {
      id: 1,
      name: "Primera Huella",
      description: "Completaste tu primer escaneo",
      unlocked: true,
      icon: "👣",
      date: "12 May 2026",
    },
    {
      id: 2,
      name: "Racha Semanal",
      description: "7 días consecutivos activo",
      unlocked: true,
      icon: "🔥",
      date: "10 May 2026",
    },
    {
      id: 3,
      name: "Eco Explorador",
      description: "Escaneaste 50 productos",
      unlocked: true,
      icon: "🔍",
      date: "08 May 2026",
    },
    {
      id: 4,
      name: "Rey del Reciclaje",
      description: "Reciclaste 100 productos",
      unlocked: false,
      icon: "♻️",
      progress: 67,
    },
    {
      id: 5,
      name: "Campeón Local",
      description: "Top 10 en tu ciudad",
      unlocked: false,
      icon: "🏅",
      progress: 0,
    },
    {
      id: 6,
      name: "Eco Influencer",
      description: "10 amigos se unieron por ti",
      unlocked: false,
      icon: "🌟",
      progress: 40,
    },
  ];

  const leaderboard = [
    { rank: 1, name: "Carlos M.", points: 8945, avatar: "👨" },
    { rank: 2, name: "María G.", points: 7821, avatar: "👩" },
    { rank: 3, name: "Luis R.", points: 6543, avatar: "🧑" },
    { rank: 87, name: "Tú (Ana)", points: 2450, avatar: "👤", isUser: true },
  ];

  const currentLevel = levels.find((l) => !l.unlocked) || levels[levels.length - 1];
  const currentProgress = 2450;
  const nextLevelPoints = currentLevel.points;
  const progressPercent = (currentProgress / nextLevelPoints) * 100;

  return (
    <div className="flex-1 overflow-y-auto pb-24">
      <div className="px-6 pt-8 pb-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl text-foreground">Recompensas</h1>
          <div className="flex items-center gap-2 bg-[#00FF94]/20 px-4 py-2 rounded-xl">
            <Star className="w-5 h-5 text-[#00FF94]" />
            <span className="text-foreground">2,450 pts</span>
          </div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-br from-[#00FF94] to-[#B4F8C8] rounded-[2rem] p-6 mb-6 shadow-xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-6xl">{currentLevel.icon}</div>
            <div className="flex-1">
              <p className="text-[#0A2463]/70 text-sm mb-1">Nivel actual</p>
              <h3 className="text-2xl text-[#0A2463] mb-1">{currentLevel.name}</h3>
              <p className="text-[#0A2463]/70 text-sm">
                {nextLevelPoints - currentProgress} pts para el siguiente nivel
              </p>
            </div>
          </div>
          <div className="h-3 bg-[#0A2463]/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full bg-[#0A2463] rounded-full"
            />
          </div>
        </motion.div>

        <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
          {levels.map((level, index) => (
            <motion.div
              key={level.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className={`flex-shrink-0 w-20 ${
                level.unlocked
                  ? "bg-card border-2 border-primary"
                  : "bg-muted border border-border"
              } rounded-2xl p-3 text-center`}
            >
              <div className="text-3xl mb-2 opacity-100">{level.icon}</div>
              <p
                className={`text-xs ${
                  level.unlocked ? "text-foreground" : "text-muted-foreground"
                } truncate`}
              >
                {level.name.split(" ")[1]}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            <h3 className="text-lg text-foreground">Insignias</h3>
          </div>
          <span className="text-sm text-muted-foreground">3 de 6</span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className={`${
                badge.unlocked
                  ? "bg-card border-2 border-primary"
                  : "bg-muted border border-border"
              } rounded-2xl p-4 relative overflow-hidden`}
            >
              {!badge.unlocked && (
                <div className="absolute inset-0 bg-muted/80 backdrop-blur-[2px] flex items-center justify-center z-10">
                  <Lock className="w-6 h-6 text-muted-foreground" />
                </div>
              )}
              <div className="text-4xl mb-3">{badge.icon}</div>
              <h4 className="text-sm text-foreground mb-1">{badge.name}</h4>
              <p className="text-xs text-muted-foreground mb-2">
                {badge.description}
              </p>
              {badge.unlocked && badge.date && (
                <p className="text-xs text-primary">{badge.date}</p>
              )}
              {!badge.unlocked && badge.progress !== undefined && (
                <div className="mt-2">
                  <div className="h-1.5 bg-background rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${badge.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {badge.progress}%
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" />
            <h3 className="text-lg text-foreground">Ranking Comunitario</h3>
          </div>
          <button className="text-primary text-sm flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            Ver completo
          </button>
        </div>

        <div className="space-y-2">
          {leaderboard.map((user, index) => (
            <motion.div
              key={user.rank}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className={`${
                user.isUser
                  ? "bg-primary/10 border-2 border-primary"
                  : "bg-card border border-border"
              } rounded-2xl p-4 flex items-center gap-4`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  user.rank === 1
                    ? "bg-gradient-to-br from-yellow-400 to-yellow-600 text-white"
                    : user.rank === 2
                    ? "bg-gradient-to-br from-gray-300 to-gray-500 text-white"
                    : user.rank === 3
                    ? "bg-gradient-to-br from-orange-400 to-orange-600 text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {user.rank <= 3 ? <Crown className="w-5 h-5" /> : `#${user.rank}`}
              </div>
              <div className="text-3xl">{user.avatar}</div>
              <div className="flex-1">
                <h4 className="text-foreground">{user.name}</h4>
                <p className="text-xs text-muted-foreground">
                  {user.points.toLocaleString()} puntos
                </p>
              </div>
              {user.rank <= 3 && (
                <div className="text-2xl">
                  {user.rank === 1 ? "🥇" : user.rank === 2 ? "🥈" : "🥉"}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

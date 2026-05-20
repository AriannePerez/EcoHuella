import { motion } from "motion/react";
import { Home, Trophy, User, Scan } from "lucide-react";

type NavTab = "home" | "rewards" | "profile";

interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onScanClick: () => void;
}

export function BottomNav({ activeTab, onTabChange, onScanClick }: BottomNavProps) {
  const tabs = [
    { id: "home" as NavTab, icon: Home, label: "Inicio" },
    { id: "rewards" as NavTab, icon: Trophy, label: "Recompensas" },
    { id: "profile" as NavTab, icon: User, label: "Perfil" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <div className="bg-background/80 backdrop-blur-xl border-t border-border">
        <div className="max-w-md mx-auto px-6 py-3">
          <div className="flex items-center justify-around relative">
            {tabs.map((tab, index) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex flex-col items-center gap-1 py-2 px-4 relative ${
                    index === 1 ? "mr-16" : ""
                  }`}
                >
                  <div className="relative">
                    <tab.icon
                      className={`w-6 h-6 transition-colors ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                      />
                    )}
                  </div>
                  <span
                    className={`text-xs transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onScanClick}
              className="absolute left-1/2 -translate-x-1/2 -top-8 w-16 h-16 bg-gradient-to-br from-[#00FF94] to-[#B4F8C8] rounded-[1.5rem] shadow-2xl flex items-center justify-center border-4 border-background"
            >
              <Scan className="w-7 h-7 text-[#0A2463]" strokeWidth={2.5} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

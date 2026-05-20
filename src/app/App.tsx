import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { SplashScreen } from "./components/SplashScreen";
import { Onboarding } from "./components/Onboarding";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { Rewards } from "./components/Rewards";
import { Profile } from "./components/Profile";
import { Scanner } from "./components/Scanner";
import { ScanResult } from "./components/ScanResult";
import { BottomNav } from "./components/BottomNav";

type Screen =
  | "splash"
  | "onboarding"
  | "login"
  | "home"
  | "rewards"
  | "profile"
  | "scanner"
  | "scanResult";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("splash");
  const [activeTab, setActiveTab] = useState<"home" | "rewards" | "profile">("home");

  useEffect(() => {
    if (["home", "rewards", "profile"].includes(currentScreen)) {
      setActiveTab(currentScreen as "home" | "rewards" | "profile");
    }
  }, [currentScreen]);

  const handleTabChange = (tab: "home" | "rewards" | "profile") => {
    setActiveTab(tab);
    setCurrentScreen(tab);
  };

  return (
    <div className="size-full flex items-center justify-center bg-background">
      <div className="w-full h-full max-w-md mx-auto relative flex flex-col bg-background shadow-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          {currentScreen === "splash" && (
            <SplashScreen
              key="splash"
              onFinish={() => setCurrentScreen("onboarding")}
            />
          )}
          {currentScreen === "onboarding" && (
            <Onboarding
              key="onboarding"
              onFinish={() => setCurrentScreen("login")}
            />
          )}
          {currentScreen === "login" && (
            <Login key="login" onLogin={() => setCurrentScreen("home")} />
          )}
        </AnimatePresence>

        {["home", "rewards", "profile"].includes(currentScreen) && (
          <>
            {currentScreen === "home" && <Dashboard key="dashboard" />}
            {currentScreen === "rewards" && <Rewards key="rewards" />}
            {currentScreen === "profile" && <Profile key="profile" />}
            <BottomNav
              activeTab={activeTab}
              onTabChange={handleTabChange}
              onScanClick={() => setCurrentScreen("scanner")}
            />
          </>
        )}

        <AnimatePresence>
          {currentScreen === "scanner" && (
            <Scanner
              key="scanner"
              onClose={() => setCurrentScreen(activeTab)}
              onScan={() => setCurrentScreen("scanResult")}
            />
          )}
          {currentScreen === "scanResult" && (
            <ScanResult
              key="scanResult"
              onClose={() => setCurrentScreen(activeTab)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
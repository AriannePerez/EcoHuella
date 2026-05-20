import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Lock, Leaf, Eye, EyeOff } from "lucide-react";

export function Login({ onLogin }: { onLogin: () => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 bg-background flex flex-col">
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-center mb-12 mt-8"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-[#00FF94] to-[#B4F8C8] rounded-[1.5rem] flex items-center justify-center shadow-lg">
            <Leaf className="w-10 h-10 text-white" strokeWidth={2.5} />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="max-w-md mx-auto"
        >
          <h1 className="text-3xl text-center mb-2 text-foreground">
            {isLogin ? "¡Bienvenido de nuevo!" : "Únete a Eco Huella"}
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            {isLogin
              ? "Continúa tu viaje hacia un planeta más verde"
              : "Comienza a reducir tu impacto ambiental hoy"}
          </p>

          <div className="space-y-4">
            {!isLogin && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
              >
                <label className="block mb-2 text-foreground">Nombre</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full h-14 bg-input-background rounded-2xl px-4 text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </motion.div>
            )}

            <div>
              <label className="block mb-2 text-foreground">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full h-14 bg-input-background rounded-2xl pl-12 pr-4 text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-foreground">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full h-14 bg-input-background rounded-2xl pl-12 pr-12 text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="text-right">
                <button className="text-primary text-sm">
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
            )}

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={onLogin}
              className="w-full bg-[#00FF94] text-[#0A2463] h-14 rounded-2xl shadow-lg hover:shadow-xl transition-all mt-6"
            >
              {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
            </motion.button>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-background text-muted-foreground">
                  o continúa con
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="h-14 rounded-2xl border-2 border-border hover:border-primary transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Google</span>
              </button>
              <button className="h-14 rounded-2xl border-2 border-border hover:border-primary transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                <span>Facebook</span>
              </button>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-muted-foreground"
              >
                {isLogin ? "¿No tienes cuenta? " : "¿Ya tienes cuenta? "}
                <span className="text-primary">
                  {isLogin ? "Regístrate" : "Inicia sesión"}
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, X, Zap, Info } from "lucide-react";

export function Scanner({ onClose, onScan }: { onClose: () => void; onScan: () => void }) {
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      onScan();
    }, 2000);
  };

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="fixed inset-0 bg-[#0A2463] z-50 flex flex-col"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A2463]/80" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between p-6">
          <h2 className="text-white text-xl">Escanear Producto</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center px-6">
          <div className="relative w-full max-w-sm aspect-square">
            <motion.div
              animate={{
                boxShadow: isScanning
                  ? "0 0 60px rgba(0, 255, 148, 0.6)"
                  : "0 0 0px rgba(0, 255, 148, 0)",
              }}
              className="absolute inset-0 rounded-[3rem] border-4 border-[#00FF94]"
            >
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#00FF94] rounded-tl-[3rem]" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#00FF94] rounded-tr-[3rem]" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#00FF94] rounded-bl-[3rem]" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#00FF94] rounded-br-[3rem]" />

              <AnimatePresence>
                {isScanning && (
                  <motion.div
                    initial={{ top: "0%", opacity: 0 }}
                    animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00FF94] to-transparent"
                  />
                )}
              </AnimatePresence>
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white/60">
                <Camera className="w-16 h-16 mx-auto mb-4" />
                <p>Coloca el código de barras dentro del marco</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 pb-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 mb-6 border border-white/20"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00FF94]/20 flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-[#00FF94]" />
              </div>
              <div>
                <h4 className="text-white mb-1">Consejo rápido</h4>
                <p className="text-white/70 text-sm">
                  Asegúrate de tener buena iluminación para obtener mejores resultados
                </p>
              </div>
            </div>
          </motion.div>

          <button
            onClick={handleScan}
            disabled={isScanning}
            className="w-full bg-[#00FF94] text-[#0A2463] h-14 rounded-2xl flex items-center justify-center gap-2 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isScanning ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-5 h-5" />
                </motion.div>
                <span>Escaneando...</span>
              </>
            ) : (
              <>
                <Camera className="w-5 h-5" />
                <span>Escanear Ahora</span>
              </>
            )}
          </button>

          <button onClick={onClose} className="w-full mt-3 text-white/70 h-12">
            Cancelar
          </button>
        </div>
      </div>
    </motion.div>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Mic, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-28">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm text-emerald-300 border border-emerald-400/30">
            <Sparkles size={16} />
            AI Powered Textile Procurement
          </span>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight">
            Source Fabrics
            <span className="text-emerald-400"> Smarter </span>
            with AI
          </h1>

          <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
            Find suppliers, compare fabrics, receive AI recommendations,
            and place bulk textile orders in minutes.
          </p>

          <div className="mt-12 max-w-3xl mx-auto rounded-2xl bg-white p-3 shadow-2xl flex gap-3">

            <Input
              placeholder="Need 500 meters of cotton fabric for shirts under ₹180..."
              className="border-0 shadow-none text-black"
            />

            <Button className="gap-2">
              <Sparkles size={18} />
              Find with AI
            </Button>

            <Button variant="outline">
              <Mic size={18} />
            </Button>

          </div>

          <div className="mt-12 flex justify-center gap-10 text-center">

            <div>
              <h2 className="text-3xl font-bold">1500+</h2>
              <p className="text-slate-300">Suppliers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">12000+</h2>
              <p className="text-slate-300">Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">98%</h2>
              <p className="text-slate-300">AI Match Accuracy</p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
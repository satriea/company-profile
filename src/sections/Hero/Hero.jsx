import { motion } from "framer-motion";

import Container from "../../components/common/Container";

import HeroContent from "./HeroContent";
import HeroStorePreview from "./HeroStorePreview";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[32rem] w-[32rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-slate-500/10 blur-3xl" />
      </div>

      {/* Subtle grid */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      <Container
        size="2xl"
        className="
          relative z-10 flex min-h-screen items-center
          py-28 sm:py-32 lg:py-24
        "
      >
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-16 xl:gap-24">
          <HeroContent />

          <HeroStorePreview />
        </div>
      </Container>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="
          absolute bottom-7 left-1/2 hidden -translate-x-1/2
          flex-col items-center gap-2 text-slate-500
          lg:flex
        "
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
          Scroll
        </span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-8 w-px bg-gradient-to-b from-blue-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
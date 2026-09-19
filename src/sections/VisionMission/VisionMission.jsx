import { motion } from "framer-motion";
import { FiArrowUpRight, FiTarget } from "react-icons/fi";

import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import Button from "../../components/common/Button";

import { visionMission } from "../../data/visionMission";

import VisionCard from "./VisionCard";
import MissionList from "./MissionList";

export default function VisionMission() {
  return (
    <section
      id="vision-mission"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

        <div className="absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-slate-200/60 blur-3xl" />
      </div>

      <Container className="relative">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Vision & Mission"
            title="Arah dan"
            highlight="Komitmen Kami"
            description="Menjadi perusahaan yang terus berkembang dengan memberikan nilai terbaik bagi pelanggan, partner, dan seluruh stakeholder."
          />
        </motion.div>

        {/* Vision */}
        <VisionCard vision={visionMission.vision} />

        {/* Mission */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Mission Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="
              rounded-[2rem] border border-slate-200 bg-white
              p-8 sm:p-10
            "
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <FiTarget size={30} />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Mission
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Bagaimana kami{" "}
              <span className="text-blue-600">mewujudkannya.</span>
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Setiap langkah kami diarahkan untuk memberikan pengalaman
              terbaik dan membangun hubungan jangka panjang dengan pelanggan
              serta seluruh stakeholder.
            </p>
          </motion.div>

          {/* Mission List */}
          <MissionList missions={visionMission.missions} />
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            mt-10 flex flex-col gap-5 rounded-3xl
            border border-blue-100 bg-blue-50/60 p-6
            sm:flex-row sm:items-center sm:justify-between sm:p-8
          "
        >
          <div>
            <p className="text-sm font-bold text-slate-950">
              Our Vision. Our Mission. Our Commitment.
            </p>

            <p className="mt-1 text-sm text-slate-600">
              Bertumbuh secara berkelanjutan bersama pelanggan dan partner.
            </p>
          </div>

          <Button
            href="#stores"
            variant="ghost"
            size="sm"
            icon="external"
            className="shrink-0 self-start px-0 hover:bg-transparent sm:self-center"
          >
            Jelajahi jaringan kami
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
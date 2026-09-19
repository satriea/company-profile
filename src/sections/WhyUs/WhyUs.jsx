import { motion } from "framer-motion";
import { FiShield } from "react-icons/fi";

import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";

import { whyUsReasons } from "../../data/whyUs";

import WhyUsCard from "./WhyUsCard";

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="
        relative overflow-hidden
        bg-slate-950 py-24 sm:py-28
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute -left-40 top-0
            h-96 w-96 rounded-full
            bg-blue-600/10 blur-3xl
          "
        />

        <div
          className="
            absolute -right-40 bottom-0
            h-96 w-96 rounded-full
            bg-blue-500/10 blur-3xl
          "
        />

        <div
          className="
            absolute left-1/2 top-1/2
            h-72 w-72 -translate-x-1/2
            -translate-y-1/2 rounded-full
            bg-blue-600/5 blur-3xl
          "
        />
      </div>

      <Container className="relative">
        {/* ================================================= */}
        {/* SECTION HEADER */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Why Sinar Mas Selluler"
            title="Dibangun dengan"
            highlight="Kepercayaan"
            description="Kami terus membangun hubungan jangka panjang dengan pelanggan melalui produk, pelayanan, dan pengalaman retail yang dapat diandalkan."
            dark
          />
        </motion.div>

        {/* ================================================= */}
        {/* REASONS GRID */}
        {/* ================================================= */}

        <div
          className="
            mt-14 grid gap-px overflow-hidden
            rounded-3xl border border-white/10
            bg-white/10
            sm:grid-cols-2 lg:grid-cols-3
          "
        >
          {whyUsReasons.map((reason, index) => (
            <WhyUsCard
              key={reason.id}
              reason={reason}
              index={index}
            />
          ))}
        </div>

        {/* ================================================= */}
        {/* BOTTOM STATEMENT */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            mt-12 rounded-3xl
            border border-white/10
            bg-white/[0.03]
            p-8 sm:p-10
          "
        >
          <div
            className="
              flex flex-col gap-6
              lg:flex-row lg:items-center
              lg:justify-between
            "
          >
            {/* Content */}
            <div className="max-w-2xl">
              <p
                className="
                  text-sm font-semibold uppercase
                  tracking-[0.18em] text-blue-400
                "
              >
                Our Commitment
              </p>

              <h3
                className="
                  mt-3 text-2xl font-bold text-white
                  sm:text-3xl
                "
              >
                Tumbuh bersama pelanggan, partner, dan masyarakat.
              </h3>

              <p
                className="
                  mt-3 text-sm leading-7 text-slate-400
                  sm:text-base
                "
              >
                Kami percaya bahwa pertumbuhan perusahaan dibangun dari
                kepercayaan, pelayanan yang konsisten, serta hubungan yang
                berkelanjutan dengan seluruh stakeholder.
              </p>
            </div>

            {/* Commitment Badge */}
            <div className="flex shrink-0 items-center gap-3">
              <div
                className="
                  flex h-12 w-12 items-center
                  justify-center rounded-full
                  bg-blue-600 text-white
                  shadow-lg shadow-blue-600/20
                "
              >
                <FiShield size={22} />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Trusted Partnership
                </p>

                <p className="text-xs text-slate-500">
                  Built for long-term relationship
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
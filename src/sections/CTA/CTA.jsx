import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiMapPin,
  FiMessageCircle,
} from "react-icons/fi";

import Container from "../../components/common/Container";
import Button from "../../components/common/Button";

import { company } from "../../data/company";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />

        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />
      </div>

      <Container className="relative">
        {/* ================================================= */}
        {/* CTA CARD */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            bg-slate-950
            px-8
            py-12
            shadow-2xl
            shadow-slate-900/20
            sm:px-12
            sm:py-16
            lg:px-16
          "
        >
          {/* ================================================= */}
          {/* DECORATIVE ELEMENTS */}
          {/* ================================================= */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="pointer-events-none absolute right-20 top-20 h-32 w-32 rounded-full border border-white/5" />

          <div className="pointer-events-none absolute right-28 top-28 h-16 w-16 rounded-full border border-white/5" />

          {/* ================================================= */}
          {/* CONTENT */}
          {/* ================================================= */}

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            {/* ================================================= */}
            {/* MAIN CONTENT */}
            {/* ================================================= */}

            <div className="max-w-3xl">
              {/* Eyebrow */}

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-blue-500" />

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Let's Connect
                </span>
              </div>

              {/* Heading */}

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Temukan kebutuhan teknologi Anda bersama{" "}
                <span className="text-blue-400">
                  Sinar Mas Selluler.
                </span>
              </h2>

              {/* Description */}

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                Kunjungi jaringan toko kami dan temukan berbagai pilihan
                smartphone, accessories, serta layanan yang sesuai dengan
                kebutuhan Anda.
              </p>

              {/* ================================================= */}
              {/* BUTTONS */}
              {/* ================================================= */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href="#stores"
                  variant="primary"
                  size="lg"
                  icon="arrow"
                  className="sm:w-auto"
                >
                  <span className="inline-flex items-center gap-1">
                    <FiMapPin size={18} />
                    Temukan Toko
                  </span>
                </Button>

                <Button
                  href="#about"
                  variant="dark"
                  size="lg"
                  icon={null}
                  className="border-white/15 bg-white/5 backdrop-blur-sm hover:bg-white/10"
                >
                  Tentang Kami
                </Button>
              </div>
            </div>

            {/* ================================================= */}
            {/* CONTACT CARD */}
            {/* ================================================= */}

            <div className="w-full lg:w-80">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
                {/* Icon */}

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <FiMessageCircle size={22} />
                </div>

                {/* Label */}

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Get in Touch
                </p>

                {/* Title */}

                <h3 className="mt-2 text-xl font-bold text-white">
                  Hubungi Kami
                </h3>

                {/* Description */}

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Kami siap membantu kebutuhan informasi produk dan layanan
                  Sinar Mas Selluler.
                </p>

                {/* Phone */}

                {company.contact?.phone && (
                  <a
                    href={`tel:${company.contact.phone}`}
                    className="
                      mt-6
                      block
                      text-sm
                      font-semibold
                      text-blue-400
                      transition-colors
                      hover:text-blue-300
                    "
                  >
                    {company.contact.phone}
                  </a>
                )}

                {/* Email */}

                {company.contact?.email && (
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="
                      mt-2
                      block
                      break-all
                      text-sm
                      text-slate-400
                      transition-colors
                      hover:text-white
                    "
                  >
                    {company.contact.email}
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
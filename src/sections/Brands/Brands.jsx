import { motion } from "framer-motion";
import { FiSmartphone } from "react-icons/fi";

import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import Button from "../../components/common/Button";

import BrandGrid from "./BrandGrid";

export default function Brands() {
  return (
    <section
      id="brands"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      {/* ================================================= */}
      {/* BACKGROUND DECORATION */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />
      </div>

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <Container className="relative">
        {/* ================================================= */}
        {/* SECTION HEADER */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.6,
          }}
        >
          <SectionHeading
            eyebrow="Our Brands"
            title="Brand yang"
            highlight="Kami Hadirkan"
            description="Menghadirkan berbagai pilihan brand teknologi untuk memberikan lebih banyak pilihan sesuai kebutuhan pelanggan."
          />
        </motion.div>

        {/* ================================================= */}
        {/* BRAND GRID */}
        {/* ================================================= */}

        <div className="mt-14">
          <BrandGrid />
        </div>

        {/* ================================================= */}
        {/* BOTTOM INFORMATION */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mt-12
            flex
            flex-col
            gap-6
            rounded-3xl
            border
            border-slate-200
            bg-slate-50
            p-7
            sm:p-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* ================================================= */}
          {/* INFORMATION */}
          {/* ================================================= */}

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <FiSmartphone size={22} />
            </div>

            <div>
              <h3 className="font-bold text-slate-950">
                Pilihan untuk Berbagai Kebutuhan
              </h3>

              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
                Temukan smartphone dan produk teknologi dari berbagai brand
                yang tersedia melalui jaringan Sinar Mas Selluler.
              </p>
            </div>
          </div>

          {/* ================================================= */}
          {/* CTA */}
          {/* ================================================= */}

          <Button
            href="#stores"
            variant="ghost"
            size="sm"
            icon="external"
            className="shrink-0 self-start lg:self-center"
          >
            Temukan di Toko
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
import { motion } from "framer-motion";

import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";

import { services } from "../../data/services";

import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />
      </div>

      <Container className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Our Services"
            title="Solusi untuk Kebutuhan"
            highlight="Teknologi Anda"
            description="Kami menghadirkan berbagai produk dan layanan untuk mendukung kebutuhan teknologi dan komunikasi pelanggan."
          />
        </motion.div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
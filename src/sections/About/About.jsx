import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiShoppingBag,
} from "react-icons/fi";

import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import Button from "../../components/common/Button";

import { company } from "../../data/company";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      {/* ================================================= */}
      {/* BACKGROUND DECORATION */}
      {/* ================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />
      </div>

      <Container className="relative">
        {/* ================================================= */}
        {/* MAIN CONTENT */}
        {/* ================================================= */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="Lebih dari Sekadar"
              highlight="Toko"
            />

            <div className="mt-6">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                {company.description}
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                {company.shortDescription}
              </p>
            </div>

            {/* CTA */}
            <Button
              href="#stores"
              variant="secondary"
              size="lg"
              icon="external"
              className="mt-8"
            >
              Jelajahi Jaringan Kami
            </Button>
          </motion.div>

          {/* ================================================= */}
          {/* RIGHT VISUAL */}
          {/* ================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 shadow-2xl shadow-slate-900/10 sm:p-10">
              {/* Decorative Circle */}
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-2xl" />

              <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">
                {/* Company Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-blue-300 backdrop-blur-sm">
                  <FiBriefcase size={30} />
                </div>

                {/* Company Name */}
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  {company.name}
                </p>

                <h3 className="mt-3 max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Membangun kepercayaan melalui pelayanan.
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                  Dengan pengalaman dan jaringan retail yang terus berkembang,
                  kami berkomitmen memberikan pengalaman terbaik bagi setiap
                  pelanggan.
                </p>

                {/* Divider */}
                <div className="my-8 h-px bg-white/10" />

                {/* Company Information */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Founded */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                      <FiCalendar size={20} />
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        Established
                      </p>

                      <p className="mt-1 text-lg font-bold text-white">
                        {company.founded}
                      </p>
                    </div>
                  </div>

                  {/* Network */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                      <FiShoppingBag size={20} />
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        Store Network
                      </p>

                      <p className="mt-1 text-lg font-bold text-white">
                        30+ Stores
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* FLOATING LOCATION CARD */}
            {/* ================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:flex lg:-left-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FiMapPin size={19} />
              </div>

              <div>
                <p className="text-xs font-medium text-slate-400">
                  Network Coverage
                </p>

                <p className="text-sm font-bold text-slate-900">
                  Jawa Tengah
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
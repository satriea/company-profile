import {
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

import Container from "../common/Container";

import { company } from "../../data/company";
import { navigation } from "../../data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const phone = company.contact?.phone;
  const email = company.contact?.email;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-3xl" />
      </div>

      {/* ================================================= */}
      {/* MAIN FOOTER */}
      {/* ================================================= */}

      <Container className="relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          {/* ================================================= */}
          {/* COMPANY */}
          {/* ================================================= */}

          <div className="max-w-md">
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
              aria-label="Sinar Mas Selluler"
            >
              {/* Logo */}
              <div
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-xl bg-white
                  text-sm font-bold text-slate-950
                  shadow-lg shadow-black/10
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                "
              >
                SM
              </div>

              {/* Brand */}
              <div>
                <p className="text-sm font-bold leading-none">
                  SINAR MAS
                </p>

                <p className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-blue-400">
                  SELLULER
                </p>
              </div>
            </a>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              {company.shortDescription || company.description}
            </p>

            {/* Social Media */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl border border-white/10
                  bg-white/5 text-slate-400
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue-600
                  hover:bg-blue-600
                  hover:text-white
                "
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl border border-white/10
                  bg-white/5 text-slate-400
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue-600
                  hover:bg-blue-600
                  hover:text-white
                "
              >
                <FaFacebookF size={15} />
              </a>

              {email && (
                <a
                  href={`mailto:${email}`}
                  aria-label="Email"
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-xl border border-white/10
                    bg-white/5 text-slate-400
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-blue-600
                    hover:bg-blue-600
                    hover:text-white
                  "
                >
                  <FiMail size={17} />
                </a>
              )}
            </div>
          </div>

          {/* ================================================= */}
          {/* NAVIGATION */}
          {/* ================================================= */}

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
              Navigation
            </p>

            <ul className="mt-6 space-y-3">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="
                      group inline-flex items-center gap-2
                      text-sm text-slate-400
                      transition-colors duration-300
                      hover:text-white
                    "
                  >
                    <span>{item.label}</span>

                    <FiArrowUpRight
                      size={14}
                      className="
                        opacity-0
                        transition-all duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:opacity-100
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================================================= */}
          {/* CONTACT */}
          {/* ================================================= */}

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
              Contact
            </p>

            <div className="mt-6 space-y-5">
              {/* Phone */}
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="group flex items-start gap-3"
                >
                  <div
                    className="
                      flex h-9 w-9 shrink-0 items-center justify-center
                      rounded-xl bg-white/5 text-blue-400
                      transition-all duration-300
                      group-hover:bg-blue-600
                      group-hover:text-white
                    "
                  >
                    <FaPhoneAlt size={14} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Phone
                    </p>

                    <p
                      className="
                        mt-1 text-sm text-slate-300
                        transition-colors duration-300
                        group-hover:text-white
                      "
                    >
                      {phone}
                    </p>
                  </div>
                </a>
              )}

              {/* Email */}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="group flex items-start gap-3"
                >
                  <div
                    className="
                      flex h-9 w-9 shrink-0 items-center justify-center
                      rounded-xl bg-white/5 text-blue-400
                      transition-all duration-300
                      group-hover:bg-blue-600
                      group-hover:text-white
                    "
                  >
                    <FiMail size={16} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">
                      Email
                    </p>

                    <p
                      className="
                        mt-1 break-all text-sm text-slate-300
                        transition-colors duration-300
                        group-hover:text-white
                      "
                    >
                      {email}
                    </p>
                  </div>
                </a>
              )}

              {/* Store Network */}
              <a
                href="#stores"
                className="group flex items-start gap-3"
              >
                <div
                  className="
                    flex h-9 w-9 shrink-0 items-center justify-center
                    rounded-xl bg-white/5 text-blue-400
                    transition-all duration-300
                    group-hover:bg-blue-600
                    group-hover:text-white
                  "
                >
                  <FaMapMarkerAlt size={15} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Store Network
                  </p>

                  <p
                    className="
                      mt-1 text-sm text-slate-300
                      transition-colors duration-300
                      group-hover:text-white
                    "
                  >
                    Lihat jaringan toko kami
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* ================================================= */}
      {/* BOTTOM */}
      {/* ================================================= */}

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {currentYear} {company.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <span className="text-xs text-slate-600">
              {company.legalName || "CV Surya Sakti Persada"}
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

            <span className="text-xs text-slate-600">
              Est. {company.founded}
            </span>
          </div>
        </Container>
      </div>

      {/* ================================================= */}
      {/* BACK TO TOP */}
      {/* ================================================= */}

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Kembali ke atas"
        className="
          absolute bottom-5 right-6
          flex h-10 w-10 items-center justify-center
          rounded-xl border border-white/10
          bg-white/5 text-slate-400
          transition-all duration-300
          hover:-translate-y-1
          hover:border-blue-600
          hover:bg-blue-600
          hover:text-white
          lg:right-8
        "
      >
        <FaArrowUp size={14} />
      </button>
    </footer>
  );
}
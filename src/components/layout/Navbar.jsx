import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

import Container from "../common/Container";

import { navigation } from "../../data/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setIsMobileOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-300
        ${
          isScrolled
            ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* ================================================= */}
          {/* LOGO */}
          {/* ================================================= */}

          <a
            href="#home"
            onClick={handleNavClick}
            aria-label="Sinar Mas Selluler"
            className="group flex items-center gap-3"
          >
            {/* Logo */}
            <div
              className={`
                flex h-11 w-11 items-center justify-center
                rounded-xl text-sm font-bold
                transition-all duration-300
                group-hover:-translate-y-0.5
                ${
                  isScrolled
                    ? "bg-slate-950 text-white shadow-lg shadow-slate-900/10"
                    : "bg-white text-slate-950 shadow-lg shadow-black/10"
                }
              `}
            >
              SM
            </div>

            {/* Brand */}
            <div className="hidden sm:block">
              <p
                className={`
                  text-sm font-bold leading-none
                  transition-colors duration-300
                  ${
                    isScrolled
                      ? "text-slate-950"
                      : "text-white"
                  }
                `}
              >
                SINAR MAS
              </p>

              <p
                className={`
                  mt-1 text-[10px] font-semibold
                  tracking-[0.2em]
                  transition-colors duration-300
                  ${
                    isScrolled
                      ? "text-blue-600"
                      : "text-blue-200"
                  }
                `}
              >
                SELLULER
              </p>
            </div>
          </a>

          {/* ================================================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ================================================= */}

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const hasChildren =
                Array.isArray(item.children) &&
                item.children.length > 0;

              return (
                <div
                  key={item.id}
                  className="group relative"
                >
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className={`
                      flex items-center gap-1.5
                      rounded-full px-4 py-2.5
                      text-sm font-medium
                      transition-all duration-300
                      ${
                        isScrolled
                          ? "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                          : "text-white/90 hover:bg-white/10 hover:text-white"
                      }
                    `}
                  >
                    <span>{item.label}</span>

                    {hasChildren && (
                      <FiChevronDown
                        size={15}
                        className="
                          transition-transform duration-300
                          group-hover:rotate-180
                        "
                      />
                    )}
                  </a>

                  {/* Dropdown */}
                  {hasChildren && (
                    <div
                      className="
                        invisible absolute left-1/2 top-full
                        w-56 -translate-x-1/2
                        pt-3 opacity-0
                        transition-all duration-200
                        group-hover:visible
                        group-hover:opacity-100
                      "
                    >
                      <div
                        className="
                          overflow-hidden rounded-2xl
                          border border-slate-200
                          bg-white p-2
                          shadow-xl shadow-slate-900/10
                        "
                      >
                        {item.children.map((child) => (
                          <a
                            key={child.id}
                            href={child.href}
                            onClick={handleNavClick}
                            className="
                              flex items-center justify-between
                              rounded-xl px-4 py-3
                              text-sm text-slate-600
                              transition-all duration-200
                              hover:bg-blue-50
                              hover:text-blue-600
                            "
                          >
                            <span>{child.label}</span>

                            <span
                              className="
                                h-1.5 w-1.5 rounded-full
                                bg-slate-200
                                transition-colors
                                group-hover:bg-blue-400
                              "
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* ================================================= */}
          {/* DESKTOP CTA */}
          {/* ================================================= */}

          <div className="hidden lg:block">
            <a
              href="#contact"
              className={`
                inline-flex items-center justify-center
                rounded-full px-5 py-2.5
                text-sm font-semibold
                transition-all duration-300
                ${
                  isScrolled
                    ? "bg-slate-950 text-white shadow-sm hover:bg-blue-600"
                    : "bg-white text-slate-950 shadow-lg shadow-black/10 hover:bg-blue-50"
                }
              `}
            >
              Hubungi Kami
            </a>
          </div>

          {/* ================================================= */}
          {/* MOBILE BUTTON */}
          {/* ================================================= */}

          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={
              isMobileOpen
                ? "Tutup menu"
                : "Buka menu"
            }
            aria-expanded={isMobileOpen}
            className={`
              flex h-11 w-11 items-center
              justify-center rounded-xl
              transition-all duration-300
              lg:hidden
              ${
                isScrolled
                  ? "bg-slate-100 text-slate-950 hover:bg-slate-200"
                  : "bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
              }
            `}
          >
            {isMobileOpen ? (
              <FiX size={22} />
            ) : (
              <FiMenu size={22} />
            )}
          </button>
        </div>
      </Container>

      {/* ================================================= */}
      {/* MOBILE MENU */}
      {/* ================================================= */}

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              overflow-hidden
              border-t border-slate-200
              bg-white shadow-xl shadow-slate-900/5
              lg:hidden
            "
          >
            <Container className="py-5">
              <nav>
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <div key={item.id}>
                      <a
                        href={item.href}
                        onClick={handleNavClick}
                        className="
                          flex items-center justify-between
                          rounded-xl px-4 py-3.5
                          text-sm font-medium
                          text-slate-700
                          transition-colors duration-200
                          hover:bg-blue-50
                          hover:text-blue-600
                        "
                      >
                        <span>{item.label}</span>

                        {item.children?.length > 0 && (
                          <FiChevronDown
                            size={16}
                            className="text-slate-400"
                          />
                        )}
                      </a>
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <a
                    href="#contact"
                    onClick={handleNavClick}
                    className="
                      flex items-center
                      justify-center rounded-xl
                      bg-slate-950 px-5 py-3.5
                      text-sm font-semibold text-white
                      transition-colors duration-300
                      hover:bg-blue-600
                    "
                  >
                    Hubungi Kami
                  </a>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
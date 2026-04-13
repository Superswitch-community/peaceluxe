import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Products", "Contact"];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* BRAND */}
        <h1 className="text-white tracking-[6px] font-light text-lg">
          PEACELUXE
        </h1>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-10 text-sm text-white/80">
          {links.map((label) => (
            <NavLink key={label} label={label} />
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/70 backdrop-blur-md border-t border-white/10"
          >
            <div className="flex flex-col items-center gap-6 py-6 text-white/80">
              {links.map((label, i) => (
                <motion.a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group text-lg"
                >
                  <span className="group-hover:text-white transition">
                    {label}
                  </span>

                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;

/* DESKTOP LINK COMPONENT */
function NavLink({ label }) {
  return (
    <a href={`#${label.toLowerCase()}`} className="relative group">
      <span className="group-hover:text-white transition">{label}</span>
      <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}
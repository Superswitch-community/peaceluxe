import React from "react";
import { motion } from "framer-motion";
import Stats from "./stats";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";


function Home() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section
        className="h-screen flex items-center justify-center relative text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <motion.div
          className="relative z-10 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl tracking-[8px] font-light">
            PEACELUXE
          </h1>

          <p className="mt-6 text-white/80 leading-relaxed text-sm md:text-base">
            Luxury fragrances crafted for elegance, confidence, and timeless presence.
            Every scent tells a story — yours begins here.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-[#d4af37] transition"
          >
            Explore Collection
          </motion.button>
        </motion.div>
      </section>

      {/* ABOUT */}

    <section id="about" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TOP INTRO */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light tracking-wide">
            About PEACELUXE
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            A modern luxury lifestyle brand blending elegance, simplicity, and
            timeless design for a refined experience.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE (BIG FEATURE) */}
          <div className="relative group">
            <img
              src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
              className="rounded-xl w-full h-[420px] object-cover group-hover:scale-[1.02] transition duration-500"
              alt="Luxury"
            />

            <div className="absolute inset-0 bg-black/30 rounded-xl"></div>

            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-light">Crafted Elegance</h3>
              <p className="text-white/70 text-sm">
                Designed with precision and detail
              </p>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h3 className="text-2xl font-light mb-4">
              We build modern luxury experiences
            </h3>

            <p className="text-white/60 leading-relaxed mb-6">
              PEACELUXE focuses on delivering premium quality designs inspired
              by modern aesthetics and timeless beauty. Every detail is crafted
              to reflect sophistication and simplicity.
            </p>

            <p className="text-white/60 leading-relaxed">
              From visuals to experience, everything is designed to feel smooth,
              elegant, and unforgettable.
            </p>

            {/* MINI STATS */}
            <Stats />
          </div>
        </div>

        {/* BOTTOM FEATURE CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="group relative rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg"
              className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-4 left-4">
              <h4 className="text-white">Minimal Design</h4>
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg"
              className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-4 left-4">
              <h4 className="text-white">Luxury Feel</h4>
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
              className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-4 left-4">
              <h4 className="text-white">Modern Aesthetic</h4>
            </div>
          </div>

        </div>
      </div>
    </section>



      {/* CONTACT */}

    <section id="contact" className="py-24 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light tracking-wide">
            Connect With Us
          </h2>

          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Let’s build something elegant together — reach us through any of the
            platforms below.
          </p>
        </motion.div>

        {/* LINKS (NO ARRAY) */}
        <div className="mt-14 flex flex-col gap-6 items-center">

          {/* WHATSAPP */}
          <a
            href="https://wa.me/"
            target="_blank"
            className="flex items-center gap-4 text-white/70 hover:text-[#d4af37] transition"
          >
            <FaWhatsapp className="text-2xl" />
            <span className="text-lg font-light">WhatsApp</span>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com"
            target="_blank"
            className="flex items-center gap-4 text-white/70 hover:text-[#d4af37] transition"
          >
            <FaInstagram className="text-2xl" />
            <span className="text-lg font-light">Instagram</span>
          </a>

          {/* FACEBOOK */}
          <a
            href="https://facebook.com"
            target="_blank"
            className="flex items-center gap-4 text-white/70 hover:text-[#d4af37] transition"
          >
            <FaFacebook className="text-2xl" />
            <span className="text-lg font-light">Facebook</span>
          </a>

          {/* TWITTER */}
          <a
            href="https://twitter.com"
            target="_blank"
            className="flex items-center gap-4 text-white/70 hover:text-[#d4af37] transition"
          >
            <FaTwitter className="text-2xl" />
            <span className="text-lg font-light">Twitter</span>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:hello@peaceluxe.com"
            className="flex items-center gap-4 text-white/70 hover:text-[#d4af37] transition"
          >
            <FaEnvelope className="text-2xl" />
            <span className="text-lg font-light">Email Us</span>
          </a>

        </div>

        {/* FOOTER TEXT */}
        <p className="mt-16 text-white/50 text-sm">
          We usually respond within 24 hours.
        </p>

      </div>
    </section>


    </div>
  );
}

export default Home;
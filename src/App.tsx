/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Productions from "./pages/Productions";
import Studio from "./pages/Studio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import LastDragon from "./pages/LastDragon";
import WesternMonteCristo from "./pages/WesternMonteCristo";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-brand-midnight selection:bg-brand-ember selection:text-white">
        <div className="film-grain" />
        <Navigation />
        
        <main className="relative z-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/productions" element={<PageWrapper><Productions /></PageWrapper>} />
              <Route path="/productions/last-dragon" element={<PageWrapper><LastDragon /></PageWrapper>} />
              <Route path="/productions/western-monte-cristo" element={<PageWrapper><WesternMonteCristo /></PageWrapper>} />
              <Route path="/studio" element={<PageWrapper><Studio /></PageWrapper>} />
              <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
              <Route path="/blog/:id" element={<PageWrapper><BlogPost /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { signInWithGoogle } from "@/services/supabase";
import supabase from "@/services/supabase";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userName, setUserName] = useState(null); // State to store the user's name

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Demos", id: "demos" },
    { name: "Inner Pages", id: "innerPage" },
    { name: "Utilities", id: "utilities" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close mobile menu after click
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Listen for authentication state changes
  useEffect(() => {
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN" && session?.user) {
          setUserName(session.user.user_metadata.full_name || "User");
          // window.location.href = "https://nexus-ai-mu.vercel.app/";
        } else if (event === "SIGNED_OUT") {
          setUserName(null);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 py-5 transition-colors duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-sm py-5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-8 w-auto mr-2" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="text-gray-100 links cursor-pointer transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* Login/User Button - Desktop */}
          <div className="hidden md:flex items-center">
            {userName ? (
              <span className="text-white px-6 py-2 rounded-lg text-sm font-medium">
                {userName}
              </span>
            ) : (
              <button
                className="main-background text-white px-6 py-2 rounded-lg transition-colors text-sm font-medium cursor-pointer"
                onClick={() => signInWithGoogle()}
              >
                Login
              </button>
            )}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer "
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  className="links transition-colors text-sm font-medium cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
              {userName ? (
                <span className="text-white px-6 py-2 rounded-lg text-sm font-medium">
                  {userName}
                </span>
              ) : (
                <button
                  className="main-background text-white px-6 py-2 rounded-lg transition-colors text-sm font-medium w-full cursor-pointer"
                  onClick={() => signInWithGoogle()}
                >
                  Login
                </button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;

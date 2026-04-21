"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import TalenixLogo from "@/components/ui/TalenixLogo";

interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#" },
  { label: "What We Do", href: "#", hasDropdown: true },
  { label: "Jobs", href: "#" },
  { label: "Projects", href: "#" },
  { label: "TG Academy", href: "#" },
  { label: "Strategic Partnership", href: "#" },
  { label: "Blog", href: "#" },
];

const ChevronDown = () => (
  <svg
    className="mt-0.5 h-3.5 w-3.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeMenu]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
            aria-label="Talenix Group — go to homepage"
          >
            <TalenixLogo />
            <span className="text-brand-maroon font-bold text-base leading-tight">
              Talenix
              <br />
              <span className="text-xs font-normal uppercase tracking-widest text-gray-500">
                Group
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex xl:gap-2" role="list">
            {NAV_LINKS.map(({ label, href, hasDropdown }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="flex items-center gap-0.5 rounded px-2 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-brand-maroon xl:px-3"
                >
                  {label}
                  {hasDropdown && <ChevronDown />}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center lg:flex">
            <Link
              href="#contact"
              className="rounded-full bg-brand-purple px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-purple-hover"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            className="rounded p-2 text-gray-600 transition-colors hover:bg-gray-50 hover:text-brand-maroon lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div id="mobile-menu" className="border-t border-gray-100 py-3 lg:hidden">
            <ul className="flex flex-col gap-0.5" role="list">
              {NAV_LINKS.map(({ label, href, hasDropdown }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center justify-between rounded px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand-maroon"
                    onClick={closeMenu}
                  >
                    {label}
                    {hasDropdown && <ChevronDown />}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 px-4 pb-2">
              <Link
                href="#contact"
                className="block w-full rounded-full bg-brand-purple px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-purple-hover"
                onClick={closeMenu}
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

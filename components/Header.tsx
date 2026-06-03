"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "@/components/Image";
import { usePathname } from "next/navigation";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const navItems: NavItem[] = [
  {
    label: "企業情報",
    href: "/company",
    children: [
      { label: "会社概要", href: "/company/overview" },
      { label: "事業所一覧", href: "/company/offices" },
      { label: "会社沿革", href: "/company/history" },
      { label: "品質方針", href: "/company/quality" },
      { label: "環境理念・環境方針", href: "/company/environment" },
    ],
  },
  {
    label: "事業紹介",
    href: "/business",
    children: [
      { label: "国内事業", href: "/business/domestic" },
      { label: "海外事業", href: "/business/overseas" },
      { label: "潤滑油の役割", href: "/business/lubricants" },
      { label: "取扱製品", href: "/business/products" },
    ],
  },
  { label: "サステナビリティ", href: "/sustainability" },
  { label: "IR情報", href: "/ir" },
  { label: "採用情報", href: "/recruit" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const closeMenu = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3 shrink-0"
          >
            <Image
              src="/images/herologo.png"
              alt="日興産業株式会社ロゴ"
              width={44}
              height={44}
              className="h-10 w-auto object-contain"
              priority
            />
            <span className="font-serif text-navy font-bold text-base lg:text-lg leading-tight hidden sm:block">
              日興産業株式会社
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center"
            aria-label="メインナビゲーション"
          >
            {navItems.map((item, index) => (
              <div key={item.label} className="flex items-center">
                {index > 0 && (
                  <span
                    className="w-px h-3.5 bg-gray-300 mx-0.5 shrink-0 pointer-events-none"
                    aria-hidden="true"
                  />
                )}
                <div
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-150 whitespace-nowrap rounded-sm ${
                      pathname.startsWith(item.href)
                        ? "text-gold"
                        : "text-gray-700 hover:text-gold"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-1 w-52 z-20">
                      <div className="bg-white shadow-lg border-t-2 border-gold rounded-b-sm py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gold-pale hover:text-navy transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-gold hover:bg-gold-dark transition-colors duration-200 rounded-sm"
            >
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              お問い合わせ
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-navy rounded-sm"
              aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-gray-100 bg-white"
        >
          <nav
            className="max-w-7xl mx-auto px-4 py-4 space-y-0.5"
            aria-label="モバイルナビゲーション"
          >
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between border-b border-gray-100">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="flex-1 py-3 text-sm font-medium text-gray-700"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      className="px-3 py-3 text-gray-400"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        )
                      }
                      aria-label={`${item.label}のサブメニュー`}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {item.children && openDropdown === item.label && (
                  <div className="pl-4 py-1 bg-surface">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={closeMenu}
                        className="block py-2.5 text-sm text-gray-500 hover:text-gold"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block w-full py-3 text-center text-sm font-medium text-white bg-gold hover:bg-gold-dark transition-colors rounded-sm"
              >
                お問い合わせ
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

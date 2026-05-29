import Link from "next/link";
import Image from "next/image";

const companyLinks = [
  { label: "会社概要", href: "/company/overview" },
  { label: "事業所一覧", href: "/company/offices" },
  { label: "会社沿革", href: "/company/history" },
  { label: "品質方針", href: "/company/quality" },
  { label: "環境理念・環境方針", href: "/company/environment" },
];

const businessLinks = [
  { label: "国内事業", href: "/business/domestic" },
  { label: "海外事業", href: "/business/overseas" },
  { label: "潤滑油の役割", href: "/business/lubricants" },
  { label: "取扱製品", href: "/business/products" },
];

const relatedCompanies = [
  { label: "NIKKO OIL PRODUCTS", href: "/related-companies#nikko-oil-products" },
  { label: "エヌ・エス ルブリカンツ", href: "/related-companies#ns-lubricants" },
  { label: "NIKKO OIL PRODUCTS (THAILAND)", href: "/related-companies#nikko-thailand" },
  { label: "浩歩速（上海）商貿", href: "/related-companies#kosoku-shanghai" },
];

const otherLinks = [
  { label: "採用情報", href: "/recruit" },
  { label: "ニュース", href: "/news" },
  { label: "サステナビリティ", href: "/sustainability" },
  { label: "IR情報", href: "/ir" },
  { label: "関連リンク", href: "/links" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/herologo.png"
                alt="日興産業株式会社"
                width={40}
                height={40}
                className="h-10 w-auto brightness-0 invert opacity-90"
              />
              <span className="font-serif text-base font-bold leading-snug">
                日興産業株式会社
              </span>
            </div>
            <address className="not-italic text-sm text-metal-light space-y-1 leading-relaxed">
              <p>NIKKO SANGYO CO., LTD.</p>
            </address>
            <Link
              href="/contact"
              className="inline-block mt-6 px-5 py-2.5 text-sm font-medium text-navy bg-gold hover:bg-gold-light transition-colors duration-200 rounded-sm"
            >
              お問い合わせ
            </Link>
          </div>

          {/* Company & Business Links */}
          <div>
            <h2 className="text-xs font-medium text-gold mb-4 uppercase tracking-[0.15em]">
              企業情報
            </h2>
            <ul className="space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-metal-light hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="text-xs font-medium text-gold mb-4 mt-7 uppercase tracking-[0.15em]">
              事業紹介
            </h2>
            <ul className="space-y-2.5">
              {businessLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-metal-light hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Companies */}
          <div>
            <h2 className="text-xs font-medium text-gold mb-4 uppercase tracking-[0.15em]">
              関連会社
            </h2>
            <ul className="space-y-2.5">
              {relatedCompanies.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-metal-light hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h2 className="text-xs font-medium text-gold mb-4 uppercase tracking-[0.15em]">
              その他
            </h2>
            <ul className="space-y-2.5">
              {otherLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-metal-light hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-metal order-2 sm:order-1">
            &copy; {new Date().getFullYear()} 日興産業株式会社. All Rights Reserved.
          </p>
          <nav
            className="flex gap-5 order-1 sm:order-2"
            aria-label="法的情報ナビゲーション"
          >
            <Link
              href="/privacy"
              className="text-xs text-metal hover:text-gold transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/terms"
              className="text-xs text-metal hover:text-gold transition-colors"
            >
              サイトのご利用について
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

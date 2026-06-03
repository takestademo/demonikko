import type { Metadata } from "next";
import Image from "@/components/Image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { newsItems } from "@/lib/news";

export const metadata: Metadata = {
  title: "日興産業株式会社 | 潤滑油・金属加工油のトータルソリューション",
  description:
    "日興産業株式会社は、金属加工油・工業用潤滑油・自動車用潤滑油の企画・製造・販売を行っています。ODM・OEM対応、小ロットから大ロットまで柔軟に対応いたします。",
};

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section aria-label="メインビジュアル" className="relative overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[calc(100svh-80px)]">
          {/* Left – text */}
          <div
            className="relative flex-1 flex flex-col justify-center px-8 py-20 lg:px-16 lg:py-24"
            style={{
              background:
                "linear-gradient(135deg, #0D1B3E 0%, #162B4A 60%, #1E3A5F 100%)",
            }}
          >
            {/* Diagonal separator (desktop only) */}
            <div
              className="hidden lg:block absolute right-0 top-0 bottom-0 w-16 z-10"
              style={{
                background:
                  "linear-gradient(to bottom right, #0D1B3E 0%, #0D1B3E 50%, transparent 50%)",
              }}
            />

            <div className="max-w-lg relative z-20">
              {/* Gold accent line */}
              <div className="w-10 h-0.5 bg-gold mb-8" />

              {/* Hero logo mark */}
              <div className="mb-8">
                <Image
                  src="/images/herologo.png"
                  alt="日興産業株式会社"
                  width={96}
                  height={64}
                  className="h-16 w-auto object-contain brightness-0 invert opacity-85"
                />
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.2] mb-6">
                技術と信頼で、
                <br />
                未来を支える。
              </h1>

              <p className="text-metal-light text-base lg:text-lg leading-relaxed mb-10">
                価値ある製品とサービスを通じて、
                <br className="hidden sm:block" />
                社会の発展に貢献します。
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/business"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-navy bg-gold hover:bg-gold-light transition-colors duration-200 rounded-sm"
                >
                  事業紹介を見る
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
                <Link
                  href="/company"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-white border border-white/30 hover:border-gold hover:text-gold transition-colors duration-200 rounded-sm"
                >
                  企業情報
                </Link>
              </div>
            </div>
          </div>

          {/* Right – image collage */}
          <div className="relative flex-1 min-h-[55vw] lg:min-h-0 overflow-hidden">
            {/* Main background image */}
            <Image
              src="/images/hero-1.jpg"
              alt="潤滑油のクローズアップ"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(13,27,62,0.4) 0%, transparent 60%)",
              }}
            />

            {/* Overlay card 1 – metalworking */}
            <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-36 h-28 sm:w-44 sm:h-32 border-2 border-gold shadow-2xl overflow-hidden rounded-sm">
              <Image
                src="/images/service_01.jpg"
                alt="金属加工の現場"
                fill
                className="object-cover"
                sizes="176px"
              />
            </div>

            {/* Overlay card 2 – lathe/oil */}
            <div className="absolute bottom-28 right-24 sm:bottom-36 sm:right-40 w-32 h-24 sm:w-40 sm:h-28 border-2 border-white/60 shadow-2xl overflow-hidden rounded-sm">
              <Image
                src="/images/service_02.jpg"
                alt="旋盤加工とエンジンオイル"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>

            {/* Gold frame accent */}
            <div className="absolute top-6 left-6 w-16 h-16 border border-gold/50" />
            <div className="absolute top-8 left-8 w-16 h-16 border border-gold/30" />
          </div>
        </div>
      </section>

      {/* ===== NEWS BAR ===== */}
      <section aria-label="最新ニュース" className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold">
              NEWS
            </span>
            <span className="hidden sm:block w-px h-4 bg-gray-200" />
            <span className="text-xs text-gray-400 hidden sm:block">最新情報</span>
          </div>
          <ul className="flex-1 space-y-1.5 sm:space-y-0">
            {newsItems.slice(0, 2).map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm"
              >
                <time
                  dateTime={item.date}
                  className="text-xs text-metal shrink-0"
                >
                  {item.date}
                </time>
                <span className="text-xs px-2 py-0.5 bg-gold-pale text-gold border border-gold/30 rounded-sm shrink-0">
                  {item.category}
                </span>
                <span className="text-gray-700 line-clamp-1">{item.title}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/news"
            className="shrink-0 text-xs text-gold hover:text-gold-dark font-medium inline-flex items-center gap-1 transition-colors"
          >
            一覧を見る
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* ===== OUR BUSINESS ===== */}
      <section
        aria-labelledby="business-heading"
        className="py-20 lg:py-28 bg-surface"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16">
            <SectionHeading en="OUR BUSINESS" ja="事業紹介" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                href: "/business/domestic",
                image: "/images/service_01.jpg",
                en: "DOMESTIC",
                title: "国内事業",
                desc: "企画・設計・製造・品質管理まで一貫した体制で、高品質な製品をお届けします。",
              },
              {
                href: "/business/overseas",
                image: "/images/service_02.jpg",
                en: "OVERSEAS",
                title: "海外事業",
                desc: "タイ・中国をはじめ、グローバルなネットワークで海外市場に対応しています。",
              },
              {
                href: "/business/lubricants",
                image: "/images/service_bg.jpg",
                en: "LUBRICANTS",
                title: "潤滑油の役割",
                desc: "機械の性能を最大限に引き出す潤滑油の特性と活用方法をご紹介します。",
              },
              {
                href: "/business/products",
                image: "/images/category-products-versus-header.png",
                en: "PRODUCTS",
                title: "取扱製品",
                desc: "金属加工油・工業用潤滑油・自動車用潤滑油など、幅広い製品ラインアップ。",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                </div>
                <div className="p-5 flex-1 flex flex-col border-t-2 border-transparent group-hover:border-gold transition-colors duration-300">
                  <p className="text-xs tracking-[0.15em] text-gold uppercase mb-2">
                    {card.en}
                  </p>
                  <h3 className="font-serif text-lg font-bold text-navy mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    {card.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center text-xs text-gold font-medium gap-1">
                    詳しく見る
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STRENGTHS ===== */}
      <section
        aria-labelledby="strengths-heading"
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0D1B3E 0%, #162B4A 50%, #1E3A5F 100%)",
        }}
      >
        {/* Decorative background image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/service_bg.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16">
            <SectionHeading en="OUR STRENGTHS" ja="日興産業の強み" light />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                num: "01",
                title: "企画",
                desc: "市場のニーズを的確に捉え、お客様の課題解決につながる製品を企画・提案します。",
              },
              {
                num: "02",
                title: "研究開発",
                desc: "専門的な知識と設備を活かし、性能・安全性に優れた配合の研究開発を行います。",
              },
              {
                num: "03",
                title: "製造設備",
                desc: "充実した製造設備により、小ロットから大ロットまで柔軟に対応可能です。",
              },
              {
                num: "04",
                title: "充填設備",
                desc: "さまざまな容器・サイズへの充填に対応し、多様な納品形態をご用意しています。",
              },
              {
                num: "05",
                title: "品質管理",
                desc: "専門検査員による厳格な品質管理体制で、安定した品質をお届けします。",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white/5 border border-white/10 rounded-sm p-6 hover:bg-white/10 hover:border-gold/40 transition-colors duration-300"
              >
                <p className="font-serif text-3xl font-bold text-gold/60 mb-3 leading-none">
                  {item.num}
                </p>
                <h3 className="font-serif text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-metal-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-10 border-t border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { label: "ODM・OEM対応", desc: "お客様のブランドで製品をご提供" },
                { label: "小ロット〜大ロット", desc: "多様なニーズに柔軟に対応" },
                { label: "専門検査員による品質管理", desc: "安定した品質を保証" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="w-8 h-px bg-gold mb-4" />
                  <p className="text-sm font-medium text-white mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-metal-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section
        aria-labelledby="products-heading"
        className="py-20 lg:py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16">
            <SectionHeading en="PRODUCTS" ja="取扱製品" />
          </div>

          {/* Products header banner */}
          <div className="relative h-32 sm:h-40 rounded-sm overflow-hidden mb-10">
            <Image
              src="/images/category-products-versus-header.png"
              alt="取扱製品カテゴリ"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-serif text-xl sm:text-2xl font-bold text-white">
                幅広い用途に対応した製品ラインアップ
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                href: "/business/products#metalworking",
                title: "金属加工油",
                en: "Metalworking Oil",
                desc: "切削・研削・プレス・鍛造など各種金属加工工程に適した油剤を取り揃えています。加工精度の向上と工具寿命の延長に貢献します。",
                icon: "⚙",
              },
              {
                href: "/business/products#industrial",
                title: "工業用潤滑油",
                en: "Industrial Lubricants",
                desc: "各種産業機械・設備の潤滑に対応した工業用潤滑油です。設備の安定稼働と長寿命化をサポートします。",
                icon: "🔧",
              },
              {
                href: "/business/products#automotive",
                title: "自動車用潤滑油",
                en: "Automotive Lubricants",
                desc: "エンジンオイルをはじめとした自動車用潤滑油を取り扱っています。車両性能の維持と保護に貢献します。",
                icon: "🚗",
              },
            ].map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="group border border-gray-200 hover:border-gold rounded-sm p-6 transition-colors duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs text-metal tracking-wide mb-1">
                      {product.en}
                    </p>
                    <h3 className="font-serif text-xl font-bold text-navy">
                      {product.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center bg-gold-pale rounded-sm text-xl shrink-0">
                    {product.icon}
                  </div>
                </div>
                <div className="w-8 h-px bg-gold mb-4" />
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {product.desc}
                </p>
                <span className="mt-5 inline-flex items-center text-xs text-gold font-medium gap-1">
                  製品一覧
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPANY / RECRUIT / RELATED ===== */}
      <section
        aria-label="企業情報・採用・関連会社"
        className="py-20 lg:py-28 bg-surface"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Company */}
            <Link
              href="/company"
              className="group relative h-64 overflow-hidden rounded-sm"
            >
              <Image
                src="/images/company_bg.jpg"
                alt="企業情報"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <p className="text-xs tracking-[0.15em] uppercase text-gold mb-1">
                  COMPANY
                </p>
                <h3 className="font-serif text-2xl font-bold text-white">
                  企業情報
                </h3>
                <p className="text-sm text-metal-light mt-1.5">
                  会社概要・沿革・品質方針
                </p>
              </div>
            </Link>

            {/* Recruit */}
            <Link
              href="/recruit"
              className="group relative h-64 overflow-hidden rounded-sm bg-navy-mid"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #162B4A 0%, #0D1B3E 100%)",
                }}
              />
              {/* Geometric decoration */}
              <div className="absolute right-4 bottom-4 w-32 h-32 border border-gold/20 rounded-full" />
              <div className="absolute right-8 bottom-8 w-20 h-20 border border-gold/30 rounded-full" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <p className="text-xs tracking-[0.15em] uppercase text-gold mb-1">
                  RECRUIT
                </p>
                <h3 className="font-serif text-2xl font-bold text-white">
                  採用情報
                </h3>
                <p className="text-sm text-metal-light mt-1.5">
                  募集要項・選考方法
                </p>
              </div>
            </Link>

            {/* Related Companies */}
            <Link
              href="/related-companies"
              className="group relative h-64 overflow-hidden rounded-sm bg-navy-light"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #1E3A5F 0%, #162B4A 100%)",
                }}
              />
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-gold/40" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <p className="text-xs tracking-[0.15em] uppercase text-gold mb-1">
                  GROUP
                </p>
                <h3 className="font-serif text-2xl font-bold text-white">
                  関連会社
                </h3>
                <ul className="mt-2 space-y-0.5">
                  {[
                    "NIKKO OIL PRODUCTS",
                    "エヌ・エス ルブリカンツ",
                    "NIKKO OIL PRODUCTS (THAILAND)",
                    "浩歩速（上海）商貿",
                  ].map((name) => (
                    <li key={name} className="text-xs text-metal-light">
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section
        aria-label="お問い合わせ"
        className="py-16 lg:py-20 bg-white border-t border-gray-100"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-8 h-px bg-gold mx-auto mb-6" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-4">
            お問い合わせ
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            製品・サービスに関するご質問、ODM・OEMのご相談など、
            <br className="hidden sm:block" />
            お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-gold hover:bg-gold-dark transition-colors duration-200 rounded-sm"
          >
            お問い合わせフォームへ
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

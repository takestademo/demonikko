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
      <section aria-label="メインビジュアル" className="relative overflow-hidden bg-white">
        <div className="flex flex-col lg:flex-row min-h-[calc(100svh-80px)]">

          {/* Left – text */}
          <div className="relative flex-none lg:w-[44%] flex flex-col justify-center px-8 py-20 lg:px-16 lg:py-24">
            <h1
              className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-navy leading-[1.5] mb-6"
              style={{ letterSpacing: "0.12em" }}
            >
              技術と信頼で、
              <br />
              未来を支える
            </h1>

            <p className="text-gray-500 text-sm lg:text-base leading-relaxed mb-10">
              日興産業は、価値ある製品とサービスを通じて、
              <br />
              社会の発展に貢献します。
            </p>

            <div>
              <Link
                href="/business"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-gold hover:bg-gold-dark transition-colors duration-200 rounded-full"
              >
                日興産業の強み
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

            {/* 3D Gold Mascot – bottom left */}
            <div
              className="absolute bottom-0 left-6 lg:left-10 pointer-events-none select-none"
              aria-hidden="true"
            >
              <Image
                src="/images/herologo.png"
                alt=""
                width={220}
                height={180}
                className="h-40 lg:h-52 w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right – image mosaic */}
          <div className="relative flex-1 min-h-[70vw] lg:min-h-0 overflow-hidden">
            {/* Warm oval backdrop */}
            <div
              className="absolute"
              style={{
                inset: "-30% -10% -30% -20%",
                background: "radial-gradient(ellipse at center, #F0E6D0 0%, #F7F0E4 50%, transparent 75%)",
                borderRadius: "50%",
              }}
            />

            {/* Image grid */}
            <div className="absolute inset-4 lg:inset-8 flex gap-1.5">
              {/* Large left image with diagonal right edge */}
              <div
                className="relative overflow-hidden"
                style={{
                  flex: "5 0 0",
                  clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
                  borderRadius: "12px 0 0 12px",
                }}
              >
                <Image
                  src="/images/hero-1.jpg"
                  alt="金属加工の現場"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 60vw, 35vw"
                />
              </div>

              {/* Right – two stacked images */}
              <div className="flex flex-col gap-1.5" style={{ flex: "3 0 0" }}>
                <div
                  className="relative flex-1 overflow-hidden"
                  style={{ borderRadius: "0 12px 0 0" }}
                >
                  <Image
                    src="/images/service_01.jpg"
                    alt="エンジン部品と潤滑油"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 40vw, 25vw"
                  />
                </div>
                <div
                  className="relative flex-1 overflow-hidden"
                  style={{ borderRadius: "0 0 12px 0" }}
                >
                  <Image
                    src="/images/service_02.jpg"
                    alt="歯車と潤滑油"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 40vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWS BAR ===== */}
      <section aria-label="最新ニュース" className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              NEWS
            </span>
            <span className="w-px h-4 bg-gray-200" />
          </div>
          <ul className="flex-1 space-y-1.5 sm:space-y-0">
            {newsItems.slice(0, 1).map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm"
              >
                <time dateTime={item.date} className="text-xs text-metal shrink-0">
                  {item.date}
                </time>
                <span className="text-xs px-2 py-0.5 border border-gold text-gold rounded-sm shrink-0">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ===== OUR BUSINESS ===== */}
      <section
        aria-labelledby="business-heading"
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #FDFAF5 0%, #F7F3EA 100%)",
        }}
      >
        {/* Decorative line accent bottom-left */}
        <div
          className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none opacity-20"
          aria-hidden="true"
          style={{
            background:
              "repeating-linear-gradient(-45deg, transparent, transparent 8px, #B8975A 8px, #B8975A 9px)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16 text-center">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-3">
              OUR BUSINESS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
              事業紹介
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              日興産業は、専門性の高い技術と豊富な経験を強みに、
              <br className="hidden sm:block" />
              多様な事業領域で社会に貢献しています。
            </p>
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
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col border-t-2 border-transparent group-hover:border-gold transition-colors duration-300">
                  <p className="text-xs tracking-[0.15em] text-gold uppercase mb-2">
                    {card.en}
                  </p>
                  <h3 className="font-serif text-lg font-bold text-navy mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {card.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center text-xs text-gold font-medium gap-1">
                    詳しく見る
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
        className="py-20 lg:py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16 text-center">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-3">
              OUR STRENGTHS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
              日興産業の強み
            </h2>
            <div className="w-10 h-px bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
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
                className="border border-gray-100 rounded-xl p-6 hover:border-gold/50 hover:shadow-md transition-all duration-300 bg-white"
              >
                <p className="font-serif text-3xl font-bold text-gold/40 mb-3 leading-none">
                  {item.num}
                </p>
                <h3 className="font-serif text-lg font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { label: "ODM・OEM対応", desc: "お客様のブランドで製品をご提供" },
                { label: "小ロット〜大ロット", desc: "多様なニーズに柔軟に対応" },
                { label: "専門検査員による品質管理", desc: "安定した品質を保証" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="w-8 h-px bg-gold mb-4" />
                  <p className="text-sm font-semibold text-navy mb-1">{item.label}</p>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section
        aria-labelledby="products-heading"
        className="py-20 lg:py-28"
        style={{ background: "linear-gradient(180deg, #FDFAF5 0%, #F7F3EA 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16 text-center">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-3">
              PRODUCTS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
              取扱製品
            </h2>
            <div className="w-10 h-px bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                href: "/business/products#metalworking",
                title: "金属加工油",
                en: "Metalworking Oil",
                desc: "切削・研削・プレス・鍛造など各種金属加工工程に適した油剤を取り揃えています。加工精度の向上と工具寿命の延長に貢献します。",
              },
              {
                href: "/business/products#industrial",
                title: "工業用潤滑油",
                en: "Industrial Lubricants",
                desc: "各種産業機械・設備の潤滑に対応した工業用潤滑油です。設備の安定稼働と長寿命化をサポートします。",
              },
              {
                href: "/business/products#automotive",
                title: "自動車用潤滑油",
                en: "Automotive Lubricants",
                desc: "エンジンオイルをはじめとした自動車用潤滑油を取り扱っています。車両性能の維持と保護に貢献します。",
              },
            ].map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="group bg-white border border-gray-100 hover:border-gold rounded-xl p-7 transition-all duration-300 flex flex-col hover:shadow-md"
              >
                <p className="text-xs text-metal tracking-wide mb-1">{product.en}</p>
                <h3 className="font-serif text-xl font-bold text-navy mb-4">
                  {product.title}
                </h3>
                <div className="w-8 h-px bg-gold mb-4" />
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {product.desc}
                </p>
                <span className="mt-5 inline-flex items-center text-xs text-gold font-medium gap-1">
                  製品一覧
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPANY / RECRUIT / RELATED ===== */}
      <section aria-label="企業情報・採用・関連会社" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Company */}
            <Link href="/company" className="group relative h-64 overflow-hidden rounded-xl">
              <Image
                src="/images/company_bg.jpg"
                alt="企業情報"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/30 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <p className="text-xs tracking-[0.15em] uppercase text-gold mb-1">COMPANY</p>
                <h3 className="font-serif text-2xl font-bold text-white">企業情報</h3>
                <p className="text-sm text-white/70 mt-1">会社概要・沿革・品質方針</p>
              </div>
            </Link>

            {/* Recruit */}
            <Link
              href="/recruit"
              className="group relative h-64 overflow-hidden rounded-xl"
              style={{ background: "linear-gradient(135deg, #F0E6D0 0%, #E8D9B8 100%)" }}
            >
              <div className="absolute right-6 bottom-6 w-32 h-32 border border-gold/30 rounded-full" />
              <div className="absolute right-10 bottom-10 w-20 h-20 border border-gold/40 rounded-full" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <p className="text-xs tracking-[0.15em] uppercase text-gold mb-1">RECRUIT</p>
                <h3 className="font-serif text-2xl font-bold text-navy">採用情報</h3>
                <p className="text-sm text-gray-600 mt-1">募集要項・選考方法</p>
              </div>
            </Link>

            {/* Related Companies */}
            <Link
              href="/related-companies"
              className="group relative h-64 overflow-hidden rounded-xl border border-gray-100 hover:border-gold transition-colors duration-300"
              style={{ background: "linear-gradient(135deg, #FDFAF5 0%, #F7F0E4 100%)" }}
            >
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <p className="text-xs tracking-[0.15em] uppercase text-gold mb-1">GROUP</p>
                <h3 className="font-serif text-2xl font-bold text-navy">関連会社</h3>
                <ul className="mt-2 space-y-0.5">
                  {[
                    "NIKKO OIL PRODUCTS",
                    "エヌ・エス ルブリカンツ",
                    "NIKKO OIL PRODUCTS (THAILAND)",
                    "浩歩速（上海）商貿",
                  ].map((name) => (
                    <li key={name} className="text-xs text-gray-500">{name}</li>
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
        className="py-16 lg:py-20"
        style={{ background: "linear-gradient(135deg, #F0E6D0 0%, #E8D9B8 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-8 h-px bg-gold mx-auto mb-6" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-4">
            お問い合わせ
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-sm">
            製品・サービスに関するご質問、ODM・OEMのご相談など、
            <br className="hidden sm:block" />
            お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-gold hover:bg-gold-dark transition-colors duration-200 rounded-full"
          >
            お問い合わせフォームへ
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

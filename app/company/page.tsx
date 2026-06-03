import type { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "企業情報",
  description:
    "日興産業株式会社の企業情報をご紹介します。会社概要、事業所一覧、会社沿革、品質方針、環境理念・環境方針。",
};

const companyPages = [
  {
    href: "/company/overview",
    title: "会社概要",
    en: "OVERVIEW",
    desc: "社名、所在地、事業内容など基本情報をご確認いただけます。",
  },
  {
    href: "/company/offices",
    title: "事業所一覧",
    en: "OFFICES",
    desc: "国内外の事業所・拠点のご案内です。",
  },
  {
    href: "/company/history",
    title: "会社沿革",
    en: "HISTORY",
    desc: "創業から現在に至るまでの歩みをご紹介します。",
  },
  {
    href: "/company/quality",
    title: "品質方針",
    en: "QUALITY",
    desc: "製品品質に対する考え方と取り組みをご紹介します。",
  },
  {
    href: "/company/environment",
    title: "環境理念・環境方針",
    en: "ENVIRONMENT",
    desc: "環境への配慮と持続可能な事業活動に向けた方針です。",
  },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        title="企業情報"
        enTitle="COMPANY"
        image="/images/company_bg.jpg"
        breadcrumbs={[{ label: "企業情報" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeading en="COMPANY" ja="企業情報" />
          </div>

          {/* Company intro */}
          <div className="flex flex-col lg:flex-row gap-10 mb-16">
            <div className="flex-1">
              <p className="text-gray-600 leading-loose text-sm sm:text-base">
                日興産業株式会社は、金属加工油・工業用潤滑油・自動車用潤滑油の企画・製造・販売を行っている潤滑油専門メーカーです。
                長年にわたる技術と経験を基盤に、ODM・OEM製造にも対応し、国内外のお客様の多様なニーズにお応えしています。
              </p>
            </div>
            <div className="relative lg:w-96 h-56 lg:h-auto rounded-sm overflow-hidden">
              <Image
                src="/images/company_bg.jpg"
                alt="日興産業株式会社"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 384px"
              />
            </div>
          </div>

          {/* Page links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {companyPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group border border-gray-200 hover:border-gold rounded-sm p-6 transition-colors duration-300 flex flex-col"
              >
                <p className="text-xs tracking-[0.15em] uppercase text-gold mb-2">
                  {page.en}
                </p>
                <h2 className="font-serif text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                  {page.title}
                </h2>
                <div className="w-6 h-px bg-gold mb-3" />
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {page.desc}
                </p>
                <span className="mt-4 inline-flex items-center text-xs text-gold font-medium gap-1">
                  詳しく見る
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "事業紹介",
  description: "日興産業株式会社の事業紹介。国内事業、海外事業、潤滑油の役割、取扱製品についてご案内します。",
};

export default function BusinessPage() {
  return (
    <>
      <PageHero
        title="事業紹介"
        enTitle="OUR BUSINESS"
        image="/images/service_bg.jpg"
        breadcrumbs={[{ label: "事業紹介" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeading en="OUR BUSINESS" ja="事業紹介" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                href: "/business/domestic",
                image: "/images/service_01.jpg",
                en: "DOMESTIC BUSINESS",
                title: "国内事業",
                desc: "企画・設計・製造・品質管理まで一貫した体制で、高品質な潤滑油・金属加工油をお届けします。ODM・OEM対応も積極的に承っています。",
              },
              {
                href: "/business/overseas",
                image: "/images/service_02.jpg",
                en: "OVERSEAS BUSINESS",
                title: "海外事業",
                desc: "タイ・中国を中心とした海外関連会社・パートナーとのネットワークを通じて、グローバルな事業展開を行っています。",
              },
              {
                href: "/business/lubricants",
                image: "/images/service_bg.jpg",
                en: "ROLE OF LUBRICANTS",
                title: "潤滑油の役割",
                desc: "潤滑油は機械の性能維持・保護・冷却など多くの役割を担います。自動車用・金属加工用など、用途別の特性をご紹介します。",
              },
              {
                href: "/business/products",
                image: "/images/category-products-versus-header.png",
                en: "PRODUCTS",
                title: "取扱製品",
                desc: "金属加工油・工業用潤滑油・自動車用潤滑油など、幅広い製品ラインアップをご用意しています。安全データシートもご確認いただけます。",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col sm:flex-row border border-gray-200 hover:border-gold rounded-sm overflow-hidden transition-colors duration-300"
              >
                <div className="relative w-full sm:w-48 h-44 sm:h-auto shrink-0 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 192px"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col">
                  <p className="text-xs tracking-[0.15em] uppercase text-gold mb-2">
                    {card.en}
                  </p>
                  <h2 className="font-serif text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                    {card.title}
                  </h2>
                  <div className="w-6 h-px bg-gold mb-3" />
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
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
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "海外事業",
  description: "日興産業株式会社の海外事業。タイ・中国を中心とした関連会社・パートナーを通じてグローバルに事業展開しています。",
};

export default function OverseasPage() {
  return (
    <>
      <PageHero
        title="海外事業"
        enTitle="OVERSEAS BUSINESS"
        image="/images/service_02.jpg"
        breadcrumbs={[{ label: "事業紹介", href: "/business" }, { label: "海外事業" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeading en="OVERSEAS BUSINESS" ja="海外事業" />
          </div>

          <p className="text-gray-600 leading-loose mb-14 max-w-3xl">
            日興産業株式会社は、タイおよび中国に関連会社を持ち、海外市場での事業展開を推進しています。
            グローバルなネットワークを通じて、ODM・OEMサービスを海外のお客様にもご提供しています。
          </p>

          {/* Overseas companies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {[
              {
                name: "NIKKO OIL PRODUCTS (THAILAND)",
                region: "タイ",
                desc: "タイ現地法人として、東南アジア市場における製品供給・販売を担います。",
                href: "/related-companies#nikko-thailand",
              },
              {
                name: "浩歩速（上海）商貿",
                region: "中国・上海",
                desc: "中国・上海を拠点とし、中国市場における販売・展開を行っています。",
                href: "/related-companies#kosoku-shanghai",
              },
            ].map((company) => (
              <div
                key={company.name}
                className="border border-gray-200 rounded-sm overflow-hidden"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src="/images/service_bg.jpg"
                    alt={company.name}
                    fill
                    className="object-cover opacity-60"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(13,27,62,0.8) 0%, rgba(30,58,95,0.6) 100%)",
                    }}
                  />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <span className="text-xs px-2.5 py-0.5 bg-gold text-navy font-medium rounded-sm w-fit mb-2">
                      {company.region}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white">
                      {company.name}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {company.desc}
                  </p>
                  <Link
                    href={company.href}
                    className="text-xs text-gold hover:text-gold-dark font-medium inline-flex items-center gap-1 transition-colors"
                  >
                    詳細を見る
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ODM/OEM for overseas */}
          <div className="bg-surface rounded-sm p-8 border-l-4 border-gold">
            <h3 className="font-serif text-xl font-bold text-navy mb-4">
              海外向けODM・OEMサービス
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              海外のお客様に対しても、ODM・OEM製造サービスを提供しています。
              製品仕様・配合・容器・パッケージなど、現地市場のニーズに合わせた対応が可能です。
              詳細についてはお問い合わせください。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

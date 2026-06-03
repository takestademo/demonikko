import type { Metadata } from "next";
import Image from "@/components/Image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "関連会社",
  description: "日興産業株式会社の関連会社。NIKKO OIL PRODUCTS、エヌ・エス ルブリカンツ、NIKKO OIL PRODUCTS (THAILAND)、浩歩速（上海）商貿。",
};

const companies = [
  {
    id: "nikko-oil-products",
    name: "NIKKO OIL PRODUCTS",
    nameJa: "ニッコー オイル プロダクツ",
    region: "国内",
    desc: "潤滑油・金属加工油の販売・製造に関連する事業を展開しています。",
    image: "/images/service_01.jpg",
  },
  {
    id: "ns-lubricants",
    name: "エヌ・エス ルブリカンツ",
    nameJa: "N·S Lubricants",
    region: "国内",
    desc: "潤滑油分野における関連事業を展開しています。",
    image: "/images/service_02.jpg",
  },
  {
    id: "nikko-thailand",
    name: "NIKKO OIL PRODUCTS (THAILAND)",
    nameJa: "ニッコー オイル プロダクツ タイランド",
    region: "タイ",
    desc: "タイを拠点に東南アジア市場における製品供給・販売を担っています。",
    image: "/images/service_bg.jpg",
  },
  {
    id: "kosoku-shanghai",
    name: "浩歩速（上海）商貿",
    nameJa: "Kosoku (Shanghai) Trading",
    region: "中国・上海",
    desc: "中国・上海を拠点に中国市場における販売・事業展開を行っています。",
    image: "/images/company_bg.jpg",
  },
];

export default function RelatedCompaniesPage() {
  return (
    <>
      <PageHero
        title="関連会社"
        enTitle="GROUP COMPANIES"
        image="/images/service_bg.jpg"
        breadcrumbs={[{ label: "関連会社" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeading en="GROUP COMPANIES" ja="関連会社" />
          </div>

          <p className="text-gray-600 leading-loose mb-14 max-w-3xl">
            日興産業株式会社は、国内外の関連会社と連携し、幅広い市場に対応した製品・サービスを提供しています。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companies.map((company) => (
              <div
                key={company.id}
                id={company.id}
                className="border border-gray-200 rounded-sm overflow-hidden"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(13,27,62,0.85) 0%, transparent 60%)",
                    }}
                  />
                  <div className="absolute bottom-4 left-5 right-5">
                    <span className="text-xs px-2.5 py-1 bg-gold text-navy font-medium rounded-sm">
                      {company.region}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-metal tracking-wide mb-1">{company.nameJa}</p>
                  <h2 className="font-serif text-lg font-bold text-navy mb-1">
                    {company.name}
                  </h2>
                  <div className="w-8 h-px bg-gold my-3" />
                  <p className="text-sm text-gray-600 leading-relaxed">{company.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "事業所一覧",
  description: "日興産業株式会社の国内外の事業所・拠点一覧です。",
};

export default function OfficesPage() {
  return (
    <>
      <PageHero
        title="事業所一覧"
        enTitle="OFFICES"
        image="/images/company_bg.jpg"
        breadcrumbs={[{ label: "企業情報", href: "/company" }, { label: "事業所一覧" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="border border-gray-200 rounded-sm overflow-hidden">
              <div className="px-6 py-4 bg-navy text-white">
                <h2 className="font-serif text-lg font-bold">国内事業所</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { name: "本社", note: "詳細はお問い合わせください" },
                  { name: "工場・倉庫", note: "詳細はお問い合わせください" },
                ].map((office) => (
                  <div key={office.name} className="px-6 py-5">
                    <h3 className="font-medium text-navy mb-1">{office.name}</h3>
                    <p className="text-sm text-gray-500">{office.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-sm overflow-hidden">
              <div className="px-6 py-4 bg-navy-light text-white">
                <h2 className="font-serif text-lg font-bold">海外関連拠点</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { name: "NIKKO OIL PRODUCTS (THAILAND)", country: "タイ" },
                  { name: "浩歩速（上海）商貿", country: "中国・上海" },
                ].map((office) => (
                  <div key={office.name} className="px-6 py-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-medium text-navy mb-0.5">{office.name}</h3>
                    </div>
                    <span className="text-xs px-2.5 py-1 bg-gold-pale text-gold border border-gold/30 rounded-sm shrink-0">
                      {office.country}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

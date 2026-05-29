import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "会社沿革",
  description: "日興産業株式会社の創業から現在に至るまでの会社沿革です。",
};

export default function HistoryPage() {
  return (
    <>
      <PageHero
        title="会社沿革"
        enTitle="HISTORY"
        image="/images/company_bg.jpg"
        breadcrumbs={[{ label: "企業情報", href: "/company" }, { label: "会社沿革" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-10 text-center">
            ※ 沿革の詳細については現行サイト（
            <a
              href="https://www.nks-ris.co.jp"
              className="text-gold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.nks-ris.co.jp
            </a>
            ）をご参照ください。
          </p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-24 sm:left-32 top-0 bottom-0 w-px bg-metal-pale" />

            <ol className="space-y-0">
              {[
                { period: "創業", event: "日興産業株式会社設立" },
                { period: "事業拡大", event: "製造設備・充填設備の拡充" },
                { period: "海外展開", event: "タイおよび中国への事業展開" },
                { period: "現在", event: "国内外の幅広いニーズに対応し、事業を継続発展" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-0 pl-0">
                  <div className="w-24 sm:w-32 shrink-0 pt-1 pr-6 text-right">
                    <span className="text-sm font-medium text-gold">{item.period}</span>
                  </div>
                  <div className="relative pl-8 pb-10">
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-gold border-2 border-white shadow-sm -translate-x-1.5" />
                    <p className="text-sm text-gray-700 leading-relaxed">{item.event}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

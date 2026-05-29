import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "サステナビリティ",
  description: "日興産業株式会社のサステナビリティへの取り組みをご紹介します。",
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        title="サステナビリティ"
        enTitle="SUSTAINABILITY"
        image="/images/service_bg.jpg"
        breadcrumbs={[{ label: "サステナビリティ" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeading en="SUSTAINABILITY" ja="サステナビリティ" />
          </div>

          <p className="text-gray-600 leading-loose mb-14 max-w-3xl">
            日興産業株式会社は、持続可能な社会の実現に向け、環境・社会・ガバナンス（ESG）への取り組みを推進しています。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                label: "Environment",
                title: "環境",
                desc: "製造工程における廃棄物削減・エネルギー効率改善に継続して取り組んでいます。",
                href: "/company/environment",
              },
              {
                label: "Social",
                title: "社会",
                desc: "従業員が安心して働ける環境づくりと、地域社会との共存を大切にしています。",
                href: null,
              },
              {
                label: "Governance",
                title: "ガバナンス",
                desc: "透明性の高い経営と法令遵守を基本として、健全な事業運営に努めています。",
                href: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-gray-200 rounded-sm p-6 border-t-4 border-t-gold"
              >
                <p className="text-xs tracking-widest uppercase text-gold mb-2">
                  {item.label}
                </p>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <div className="w-6 h-px bg-gold mb-4" />
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

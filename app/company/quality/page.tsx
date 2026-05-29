import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "品質方針",
  description: "日興産業株式会社の品質方針をご紹介します。専門検査員による厳格な品質管理体制で安定した製品品質をお届けします。",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        title="品質方針"
        enTitle="QUALITY POLICY"
        image="/images/service_bg.jpg"
        breadcrumbs={[{ label: "企業情報", href: "/company" }, { label: "品質方針" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Policy statement */}
          <div className="border-l-4 border-gold pl-6 mb-14">
            <p className="font-serif text-lg sm:text-xl text-navy leading-relaxed">
              私たちは、お客様に信頼される製品を提供することを最優先とし、
              品質の維持・向上に継続的に取り組みます。
            </p>
          </div>

          {/* Quality points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "専門検査員による品質管理",
                desc: "専門知識を持つ検査員が製造の各工程で厳格なチェックを行い、製品品質の安定を確保します。",
              },
              {
                title: "ODM・OEM製造における品質保証",
                desc: "お客様のブランドで提供するODM・OEM製品においても、自社製品と同等の品質基準を適用します。",
              },
              {
                title: "原材料の選定と管理",
                desc: "品質の根幹となる原材料の選定・調達・管理を徹底し、安定した製品品質を実現します。",
              },
              {
                title: "継続的な改善活動",
                desc: "品質に関するフィードバックを真摯に受け止め、製品・工程の継続的な改善に努めます。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface rounded-sm p-6 border-t-2 border-gold"
              >
                <h3 className="font-serif text-base font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

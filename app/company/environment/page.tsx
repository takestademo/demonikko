import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "環境理念・環境方針",
  description: "日興産業株式会社の環境理念と環境方針をご紹介します。持続可能な事業活動に向けた取り組みを推進しています。",
};

export default function EnvironmentPage() {
  return (
    <>
      <PageHero
        title="環境理念・環境方針"
        enTitle="ENVIRONMENT"
        image="/images/service_bg.jpg"
        breadcrumbs={[{ label: "企業情報", href: "/company" }, { label: "環境理念・環境方針" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Philosophy */}
          <div>
            <h2 className="font-serif text-xl font-bold text-navy mb-6 flex items-center gap-3">
              <span className="w-1 h-6 bg-gold inline-block rounded-full" />
              環境理念
            </h2>
            <div className="border-l-4 border-gold-pale pl-6">
              <p className="text-gray-700 leading-loose">
                私たちは、事業活動が環境に与える影響を認識し、環境保全に積極的に取り組むことで、
                持続可能な社会の実現に貢献することを基本理念とします。
              </p>
            </div>
          </div>

          {/* Policy */}
          <div>
            <h2 className="font-serif text-xl font-bold text-navy mb-6 flex items-center gap-3">
              <span className="w-1 h-6 bg-gold inline-block rounded-full" />
              環境方針
            </h2>
            <ol className="space-y-4">
              {[
                "法令・規制その他の要求事項を遵守します。",
                "製造工程における廃棄物の削減および適正処理に努めます。",
                "エネルギー・資源の有効活用を推進します。",
                "環境に配慮した製品開発・原材料選定に取り組みます。",
                "環境管理の継続的な改善に努めます。",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-gold-pale border border-gold/40 flex items-center justify-center text-xs font-bold text-gold">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base pt-1">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

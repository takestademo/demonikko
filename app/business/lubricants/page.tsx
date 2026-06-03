import type { Metadata } from "next";
import Image from "@/components/Image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "潤滑油の役割",
  description: "潤滑油の役割と種類についてご紹介します。自動車用潤滑油、金属加工油、安全データシートへの導線もご案内します。",
};

export default function LubricantsPage() {
  return (
    <>
      <PageHero
        title="潤滑油の役割"
        enTitle="ROLE OF LUBRICANTS"
        image="/images/hero-1.jpg"
        breadcrumbs={[{ label: "事業紹介", href: "/business" }, { label: "潤滑油の役割" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeading en="ROLE OF LUBRICANTS" ja="潤滑油の役割" />
          </div>

          <p className="text-gray-600 leading-loose mb-14 max-w-3xl">
            潤滑油は、機械・設備のさまざまな場面で重要な役割を担っています。
            適切な潤滑油の選択と使用が、機械の性能維持・長寿命化につながります。
          </p>

          {/* Main roles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              { title: "潤滑", desc: "摩擦・摩耗を低減し、機械部品の滑らかな動作を実現します。" },
              { title: "冷却", desc: "摩擦によって発生する熱を吸収・放散し、過熱を防ぎます。" },
              { title: "防錆・防食", desc: "金属表面を保護し、錆や腐食の発生を抑制します。" },
              { title: "清浄・分散", desc: "汚れ・スラッジを分散させ、機械内部を清潔に保ちます。" },
            ].map((role) => (
              <div
                key={role.title}
                className="text-center p-6 bg-surface rounded-sm border border-gray-100"
              >
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gold" />
                </div>
                <h3 className="font-serif text-base font-bold text-navy mb-2">
                  {role.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>

          {/* Product categories */}
          <h2 className="font-serif text-2xl font-bold text-navy mb-8">
            主要製品カテゴリ
          </h2>
          <div className="space-y-5 mb-14">
            {[
              {
                href: "/business/products#automotive",
                image: "/images/service_02.jpg",
                title: "自動車用潤滑油",
                desc: "エンジンオイルをはじめとした自動車用潤滑油を取り扱っています。エンジン保護・省燃費性能の維持に貢献します。",
              },
              {
                href: "/business/products#metalworking",
                image: "/images/service_01.jpg",
                title: "金属加工油",
                desc: "切削・研削・プレスなど各種金属加工に対応した油剤です。加工精度の向上と工具寿命の延長に貢献します。",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col sm:flex-row gap-5 border border-gray-200 hover:border-gold rounded-sm overflow-hidden transition-colors duration-300"
              >
                <div className="relative w-full sm:w-40 h-36 sm:h-auto shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 160px"
                  />
                </div>
                <div className="flex-1 p-5 flex flex-col justify-center">
                  <h3 className="font-serif text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  <span className="mt-3 inline-flex items-center text-xs text-gold font-medium gap-1">
                    製品一覧
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* SDS link */}
          <div className="bg-navy text-white rounded-sm p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div>
              <p className="text-xs text-gold tracking-wider uppercase mb-1">SDS</p>
              <h3 className="font-serif text-lg font-bold">安全データシート</h3>
              <p className="text-sm text-metal-light mt-1">
                各製品の安全データシート（SDS）はお問い合わせにてご提供いたします。
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center px-5 py-2.5 text-sm font-medium text-navy bg-gold hover:bg-gold-light transition-colors rounded-sm"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

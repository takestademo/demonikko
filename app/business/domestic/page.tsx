import type { Metadata } from "next";
import Image from "@/components/Image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "国内事業",
  description: "日興産業株式会社の国内事業。企画・設計・製造・品質管理の一貫した体制でODM・OEM製造に対応しています。",
};

const steps = [
  {
    num: "01",
    title: "企画",
    desc: "市場ニーズや顧客の課題を把握し、最適な製品配合・仕様を企画します。ODM・OEMご依頼の場合もお客様のニーズに応じたご提案が可能です。",
    image: "/images/service_bg.jpg",
  },
  {
    num: "02",
    title: "設計・研究開発",
    desc: "専門スタッフによる配合設計・試験評価を行い、性能と安全性を兼ね備えた製品を開発します。",
    image: "/images/service_01.jpg",
  },
  {
    num: "03",
    title: "製造・充填",
    desc: "充実した製造設備・充填設備を活かし、小ロットから大ロットまで柔軟に対応します。様々な容器・サイズへの充填にも対応しています。",
    image: "/images/service_02.jpg",
  },
  {
    num: "04",
    title: "品質管理",
    desc: "専門検査員が各工程で厳格な品質チェックを実施。安定した品質の製品をお届けします。",
    image: "/images/service_bg.jpg",
  },
];

export default function DomesticPage() {
  return (
    <>
      <PageHero
        title="国内事業"
        enTitle="DOMESTIC BUSINESS"
        image="/images/service_01.jpg"
        breadcrumbs={[{ label: "事業紹介", href: "/business" }, { label: "国内事業" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeading en="DOMESTIC BUSINESS" ja="国内事業" />
          </div>

          <p className="text-gray-600 leading-loose mb-14 max-w-3xl">
            日興産業株式会社の国内事業では、製品の企画から設計・製造・品質管理まで一貫した体制を構築しています。
            ODM・OEM製造にも対応し、お客様のブランドや仕様に合わせた製品をご提供します。
          </p>

          {/* Process flow */}
          <div className="space-y-10">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="relative w-full lg:w-80 h-52 shrink-0 rounded-sm overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 320px"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-serif text-4xl font-bold text-gold/30 leading-none mb-2">
                    {step.num}
                  </p>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-4">
                    {step.title}
                  </h2>
                  <div className="w-8 h-px bg-gold mb-4" />
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ODM/OEM highlight */}
          <div
            className="mt-16 rounded-sm p-8 text-white"
            style={{
              background: "linear-gradient(135deg, #0D1B3E 0%, #1E3A5F 100%)",
            }}
          >
            <p className="text-xs tracking-[0.15em] uppercase text-gold mb-3">
              ODM / OEM
            </p>
            <h3 className="font-serif text-xl font-bold mb-4">
              ODM・OEM製造に対応しています
            </h3>
            <p className="text-metal-light text-sm leading-relaxed">
              お客様のブランドで製品を提供するODM・OEM製造を積極的に承っています。
              小ロットから大ロットまで柔軟に対応しており、製品仕様・容器・パッケージなど、
              お客様のご要望に合わせてご提案いたします。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

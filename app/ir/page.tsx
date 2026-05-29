import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "IR情報",
  description: "日興産業株式会社のIR（投資家向け）情報をご案内します。",
};

export default function IrPage() {
  return (
    <>
      <PageHero
        title="IR情報"
        enTitle="INVESTOR RELATIONS"
        image="/images/company_bg.jpg"
        breadcrumbs={[{ label: "IR情報" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeading en="INVESTOR RELATIONS" ja="IR情報" />
          </div>

          <p className="text-gray-600 leading-loose">
            IR情報に関するお問い合わせは、下記よりご連絡ください。
          </p>
        </div>
      </section>
    </>
  );
}

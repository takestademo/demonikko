import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "採用情報",
  description: "日興産業株式会社の採用情報です。募集職種、応募資格、選考方法、勤務条件などをご確認いただけます。",
};

const recruitData = [
  { label: "募集状況", value: "現行サイト（www.nks-ris.co.jp/recruit）をご参照ください" },
  { label: "職種", value: "営業職、技術職、製造職、管理部門など" },
  { label: "応募資格", value: "各募集職種の要件をご確認ください" },
  { label: "選考方法", value: "書類選考 → 面接（複数回）" },
  { label: "勤務地", value: "本社および各事業所" },
  { label: "勤務時間", value: "詳細は求人票をご確認ください" },
  { label: "休日休暇", value: "詳細は求人票をご確認ください" },
  { label: "応募方法", value: "お問い合わせフォームまたはメールにてご連絡ください" },
];

export default function RecruitPage() {
  return (
    <>
      <PageHero
        title="採用情報"
        enTitle="RECRUIT"
        image="/images/company_bg.jpg"
        breadcrumbs={[{ label: "採用情報" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeading en="RECRUIT" ja="採用情報" />
          </div>

          <div
            className="rounded-sm p-8 mb-12 text-white"
            style={{
              background: "linear-gradient(135deg, #0D1B3E 0%, #1E3A5F 100%)",
            }}
          >
            <p className="font-serif text-lg sm:text-xl leading-relaxed">
              技術と信頼で社会を支える日興産業で、
              <br className="hidden sm:block" />
              ともに成長しませんか。
            </p>
            <p className="text-sm text-metal-light mt-3">
              潤滑油・金属加工油の専門メーカーとして、製品づくりに情熱を持つ方を歓迎します。
            </p>
          </div>

          <div className="overflow-hidden border border-gray-200 rounded-sm mb-10">
            <table className="w-full text-sm">
              <tbody>
                {recruitData.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <th className="w-36 sm:w-44 px-5 py-4 text-left text-navy font-medium align-top border-r border-gray-100 whitespace-nowrap">
                      {row.label}
                    </th>
                    <td className="px-5 py-4 text-gray-700 leading-relaxed">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-6">
              採用に関するお問い合わせは、下記フォームよりお気軽にご連絡ください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-gold hover:bg-gold-dark transition-colors rounded-sm"
            >
              採用に関するお問い合わせ
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

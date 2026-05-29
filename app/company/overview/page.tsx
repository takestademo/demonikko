import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "会社概要",
  description: "日興産業株式会社の会社概要です。社名、所在地、事業内容など基本情報をご確認いただけます。",
};

const overviewData = [
  { label: "社名", value: "日興産業株式会社" },
  { label: "英文社名", value: "NIKKO SANGYO CO., LTD." },
  { label: "事業内容", value: "潤滑油・金属加工油の企画・製造・販売、ODM・OEM製造" },
  { label: "Webサイト", value: "https://www.nks-ris.co.jp" },
];

export default function OverviewPage() {
  return (
    <>
      <PageHero
        title="会社概要"
        enTitle="OVERVIEW"
        image="/images/company_bg.jpg"
        breadcrumbs={[{ label: "企業情報", href: "/company" }, { label: "会社概要" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden border border-gray-200 rounded-sm">
            <table className="w-full text-sm">
              <tbody>
                {overviewData.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-surface"}
                  >
                    <th className="w-36 sm:w-48 px-5 py-4 text-left text-navy font-medium align-top border-r border-gray-100 whitespace-nowrap">
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
        </div>
      </section>
    </>
  );
}

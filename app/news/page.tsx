import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { newsItems } from "@/lib/news";

export const metadata: Metadata = {
  title: "ニュース",
  description: "日興産業株式会社からの最新のお知らせ・ニュース一覧です。",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="ニュース"
        enTitle="NEWS"
        image="/images/company_bg.jpg"
        breadcrumbs={[{ label: "ニュース" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeading en="NEWS" ja="最新情報" />
          </div>

          <div className="divide-y divide-gray-100">
            {newsItems.map((item) => (
              <article key={item.id} className="py-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
                <time
                  dateTime={item.date}
                  className="text-sm text-metal shrink-0 w-24"
                >
                  {item.date}
                </time>
                <span className="text-xs px-2.5 py-1 bg-gold-pale text-gold border border-gold/30 rounded-sm shrink-0 w-fit">
                  {item.category}
                </span>
                <p className="text-sm sm:text-base text-gray-700">{item.title}</p>
              </article>
            ))}
          </div>

          {newsItems.length === 0 && (
            <p className="text-center text-gray-400 py-16">
              現在、お知らせはありません。
            </p>
          )}
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "サイトのご利用について",
  description: "日興産業株式会社Webサイトのご利用に関する注意事項です。",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="サイトのご利用について"
        enTitle="TERMS OF USE"
        breadcrumbs={[{ label: "サイトのご利用について" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-gray-700 leading-relaxed text-sm">
            {[
              {
                title: "著作権について",
                content:
                  "本サイトに掲載されているすべてのコンテンツ（文章、画像、データ等）の著作権は日興産業株式会社に帰属します。無断転載・複製・改変等はお断りします。",
              },
              {
                title: "免責事項",
                content:
                  "本サイトの情報は可能な限り正確を期しておりますが、内容の完全性・正確性・最新性を保証するものではありません。本サイトのご利用により生じた損害について、当社は責任を負いかねます。",
              },
              {
                title: "リンクについて",
                content:
                  "本サイトへのリンクは原則として自由ですが、内容・性質によりお断りする場合があります。外部リンク先のサイトについて当社は責任を負いません。",
              },
              {
                title: "サイトの変更・停止",
                content:
                  "当社はサイトの内容を予告なく変更・停止する場合があります。あらかじめご了承ください。",
              },
              {
                title: "推奨環境",
                content:
                  "本サイトは最新バージョンの主要ブラウザでのご利用を推奨します。環境によっては一部表示が異なる場合があります。",
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="font-serif text-lg font-bold text-navy mb-3 flex items-center gap-3">
                  <span className="w-1 h-5 bg-gold rounded-full inline-block shrink-0" />
                  {section.title}
                </h2>
                <p className="pl-4">{section.content}</p>
              </div>
            ))}

            <p className="text-right text-xs text-gray-400 pt-4">日興産業株式会社</p>
          </div>
        </div>
      </section>
    </>
  );
}

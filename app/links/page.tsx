import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "関連リンク",
  description: "日興産業株式会社の関連リンク集です。",
};

export default function LinksPage() {
  return (
    <>
      <PageHero
        title="関連リンク"
        enTitle="RELATED LINKS"
        breadcrumbs={[{ label: "関連リンク" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeading en="RELATED LINKS" ja="関連リンク" />
          </div>

          <div className="space-y-4">
            {[
              {
                category: "関連会社",
                links: [
                  { label: "NIKKO OIL PRODUCTS", href: "/related-companies#nikko-oil-products" },
                  { label: "エヌ・エス ルブリカンツ", href: "/related-companies#ns-lubricants" },
                  { label: "NIKKO OIL PRODUCTS (THAILAND)", href: "/related-companies#nikko-thailand" },
                  { label: "浩歩速（上海）商貿", href: "/related-companies#kosoku-shanghai" },
                ],
              },
            ].map((group) => (
              <div key={group.category} className="border border-gray-200 rounded-sm overflow-hidden">
                <div className="px-5 py-3 bg-surface border-b border-gray-200">
                  <h2 className="text-sm font-medium text-navy">{group.category}</h2>
                </div>
                <ul className="divide-y divide-gray-100">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="flex items-center justify-between px-5 py-3.5 text-sm text-gray-700 hover:bg-gold-pale hover:text-navy transition-colors group"
                      >
                        {link.label}
                        <svg
                          className="w-3.5 h-3.5 text-gold opacity-0 group-hover:opacity-100 transition-opacity"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

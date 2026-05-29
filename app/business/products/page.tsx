import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "取扱製品",
  description: "日興産業株式会社の取扱製品一覧。金属加工油、工業用潤滑油、自動車用潤滑油を中心に幅広い製品ラインアップ。",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="取扱製品"
        enTitle="PRODUCTS"
        image="/images/category-products-versus-header.png"
        breadcrumbs={[{ label: "事業紹介", href: "/business" }, { label: "取扱製品" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeading en="PRODUCTS" ja="取扱製品" />
          </div>

          {/* Products header image */}
          <div className="relative h-36 sm:h-44 rounded-sm overflow-hidden mb-14">
            <Image
              src="/images/category-products-versus-header.png"
              alt="取扱製品カテゴリ"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy/30" />
          </div>

          {/* Category sections */}
          <div className="space-y-14">
            {/* 金属加工油 */}
            <div id="metalworking">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1.5 h-10 bg-gold rounded-full" />
                <div>
                  <p className="text-xs text-gold tracking-widest uppercase">Metalworking Oil</p>
                  <h2 className="font-serif text-2xl font-bold text-navy">金属加工油</h2>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="relative w-full lg:w-64 h-48 shrink-0 rounded-sm overflow-hidden">
                  <Image
                    src="/images/service_01.jpg"
                    alt="金属加工油"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 256px"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 leading-relaxed mb-5">
                    切削・研削・プレス・鍛造など、各種金属加工工程に適した油剤を取り揃えています。
                    加工精度の向上、工具寿命の延長、仕上げ面の品質維持に貢献します。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["切削油", "研削油", "プレス油", "鍛造油", "引抜油"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 bg-surface border border-gray-200 text-gray-600 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* 工業用潤滑油 */}
            <div id="industrial">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1.5 h-10 bg-gold rounded-full" />
                <div>
                  <p className="text-xs text-gold tracking-widest uppercase">Industrial Lubricants</p>
                  <h2 className="font-serif text-2xl font-bold text-navy">工業用潤滑油</h2>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="relative w-full lg:w-64 h-48 shrink-0 rounded-sm overflow-hidden">
                  <Image
                    src="/images/service_bg.jpg"
                    alt="工業用潤滑油"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 256px"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 leading-relaxed mb-5">
                    各種産業機械・設備の潤滑に対応した工業用潤滑油です。
                    機械の安定稼働・長寿命化・メンテナンスコストの低減をサポートします。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["機械油", "ギヤ油", "油圧油", "コンプレッサー油", "グリース"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 bg-surface border border-gray-200 text-gray-600 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* 自動車用潤滑油 */}
            <div id="automotive">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1.5 h-10 bg-gold rounded-full" />
                <div>
                  <p className="text-xs text-gold tracking-widest uppercase">Automotive Lubricants</p>
                  <h2 className="font-serif text-2xl font-bold text-navy">自動車用潤滑油</h2>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="relative w-full lg:w-64 h-48 shrink-0 rounded-sm overflow-hidden">
                  <Image
                    src="/images/service_02.jpg"
                    alt="自動車用潤滑油"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 256px"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 leading-relaxed mb-5">
                    エンジンオイルをはじめとした自動車用潤滑油を取り扱っています。
                    エンジン保護・省燃費性能の維持・快適な走行をサポートします。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["エンジンオイル", "ミッションオイル", "デフオイル", "ATF", "ブレーキフルード"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 bg-surface border border-gray-200 text-gray-600 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SDS notice */}
          <div className="mt-14 bg-surface border border-gray-200 rounded-sm p-6 text-sm text-gray-600 leading-relaxed">
            <p className="font-medium text-navy mb-1">安全データシート（SDS）について</p>
            <p>各製品の安全データシートはお問い合わせにてご提供いたします。</p>
          </div>
        </div>
      </section>
    </>
  );
}

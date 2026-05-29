import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "日興産業株式会社へのお問い合わせ。製品・サービスに関するご質問、ODM・OEMのご相談などお気軽にどうぞ。",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="お問い合わせ"
        enTitle="CONTACT"
        image="/images/company_bg.jpg"
        breadcrumbs={[{ label: "お問い合わせ" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeading en="CONTACT" ja="お問い合わせ" />
          </div>

          <p className="text-gray-600 leading-relaxed mb-10">
            製品・サービスに関するご質問、ODM・OEMのご相談、採用に関するお問い合わせなど、
            下記フォームよりお気軽にお送りください。
            担当者よりご連絡いたします。
          </p>

          <form
            className="space-y-6"
            action="mailto:info@nks-ris.co.jp"
            method="post"
            encType="text/plain"
          >
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-navy mb-1.5"
              >
                会社名
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-gold transition-colors"
                placeholder="株式会社〇〇"
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-navy mb-1.5"
              >
                お名前 <span className="text-red-500 text-xs ml-1">必須</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-gold transition-colors"
                placeholder="山田 太郎"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-navy mb-1.5"
              >
                メールアドレス <span className="text-red-500 text-xs ml-1">必須</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-gold transition-colors"
                placeholder="example@company.co.jp"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-navy mb-1.5"
              >
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-gold transition-colors"
                placeholder="06-0000-0000"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-navy mb-1.5"
              >
                お問い合わせ種別
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-gold transition-colors bg-white"
              >
                <option value="">選択してください</option>
                <option value="product">製品・サービスについて</option>
                <option value="odm">ODM・OEM製造について</option>
                <option value="recruit">採用について</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-navy mb-1.5"
              >
                お問い合わせ内容 <span className="text-red-500 text-xs ml-1">必須</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-gold transition-colors resize-y"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3.5 text-sm font-medium text-white bg-gold hover:bg-gold-dark transition-colors duration-200 rounded-sm"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

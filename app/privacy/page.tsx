import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "日興産業株式会社のプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="プライバシーポリシー"
        enTitle="PRIVACY POLICY"
        breadcrumbs={[{ label: "プライバシーポリシー" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm max-w-none">
          <div className="space-y-8 text-gray-700 leading-relaxed text-sm">
            <p>
              日興産業株式会社（以下「当社」）は、お客様の個人情報の保護を重要な社会的責任と捉え、
              以下のプライバシーポリシーに基づき個人情報の適切な取り扱いに努めます。
            </p>

            {[
              {
                title: "個人情報の収集",
                content:
                  "当社は、サービスの提供やお問い合わせへの対応に必要な範囲で個人情報を収集します。収集に際しては、その目的を明示した上で適法かつ公正な方法によって行います。",
              },
              {
                title: "個人情報の利用目的",
                content:
                  "収集した個人情報は、お問い合わせへの対応、製品・サービスに関するご案内、採用活動、その他業務遂行に必要な範囲内で利用します。",
              },
              {
                title: "個人情報の第三者提供",
                content:
                  "当社は、法令に定める場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。",
              },
              {
                title: "個人情報の管理",
                content:
                  "当社は、個人情報への不正アクセス・紛失・破壊・改ざんおよび漏えいを防止するため、適切な安全管理措置を講じます。",
              },
              {
                title: "個人情報の開示・訂正・削除",
                content:
                  "ご本人から個人情報の開示・訂正・削除の請求があった場合には、ご本人であることを確認の上、速やかに対応します。",
              },
              {
                title: "お問い合わせ",
                content:
                  "プライバシーポリシーに関するお問い合わせは、お問い合わせフォームよりご連絡ください。",
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

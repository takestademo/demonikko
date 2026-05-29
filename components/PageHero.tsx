import Image from "next/image";
import Link from "next/link";

type Breadcrumb = { label: string; href?: string };

type Props = {
  title: string;
  enTitle: string;
  image?: string;
  breadcrumbs?: Breadcrumb[];
};

export default function PageHero({ title, enTitle, image, breadcrumbs }: Props) {
  return (
    <section className="relative h-48 sm:h-64 lg:h-72 bg-navy-mid overflow-hidden">
      {image && (
        <Image
          src={image}
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,27,62,0.85) 0%, rgba(30,58,95,0.7) 100%)",
        }}
      />

      {/* Gold diagonal accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gold"
        style={{ opacity: 0.6 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-8">
        {breadcrumbs && (
          <nav aria-label="パンくずリスト" className="mb-3">
            <ol className="flex items-center gap-2 text-xs text-metal-light">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  HOME
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-gold transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="text-xs tracking-[0.2em] uppercase text-gold mb-1">
          {enTitle}
        </p>
        <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}

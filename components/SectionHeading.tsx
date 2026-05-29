type Props = {
  en: string;
  ja: string;
  center?: boolean;
  light?: boolean;
};

export default function SectionHeading({ en, ja, center = false, light = false }: Props) {
  return (
    <div className={center ? "text-center" : ""}>
      <p
        className={`text-xs font-medium tracking-[0.2em] uppercase mb-2 ${
          light ? "text-gold-light" : "text-gold"
        }`}
      >
        {en}
      </p>
      <h2
        className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {ja}
      </h2>
      <div
        className={`mt-4 h-px w-12 ${center ? "mx-auto" : ""} ${
          light ? "bg-gold-light" : "bg-gold"
        }`}
      />
    </div>
  );
}

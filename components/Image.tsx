import NextImage, { ImageProps } from "next/image";

const BASE_PATH = "/demonikko";

export default function Image({ src, ...props }: ImageProps) {
  const resolvedSrc =
    typeof src === "string" && src.startsWith("/")
      ? `${BASE_PATH}${src}`
      : src;
  return <NextImage src={resolvedSrc} {...props} />;
}

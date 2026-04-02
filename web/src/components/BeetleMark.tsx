import Image from "next/image";
import { site } from "@/lib/site";

/** User beetle mark at `#2dd4bf` (see `public/beetle-icon.png`). */
export function BeetleMark({ className }: { className?: string }) {
  return (
    <Image
      src={site.brandIconSrc}
      alt=""
      width={128}
      height={128}
      className={className}
      aria-hidden
    />
  );
}

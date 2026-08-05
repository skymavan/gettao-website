import Image from "next/image";

import { withBasePath } from "@/lib/base-path";

type LogoProps = {
  priority?: boolean;
  className?: string;
};

export function Logo({
  priority = false,
  className = "h-[7.5rem] w-auto",
}: LogoProps) {
  return (
    <Image
      src={withBasePath("/logo.png")}
      alt="Gettao"
      width={1536}
      height={1024}
      priority={priority}
      className={className}
    />
  );
}

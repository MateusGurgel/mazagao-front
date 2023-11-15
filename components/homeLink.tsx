import Image from "next/image";
import Link from "next/link";

export default function HomeLink() {
  return (
    <Link href="/" aria-label="Vai para página Home">
      <Image src="/icon.png" width={65} height={51} alt="" />
    </Link>
  );
}

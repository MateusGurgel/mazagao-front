import CustomLink from "./customLink";
import Image from "next/image";
import Link from "next/link";

export default function HomeLink() {
  return (
    <Link href="/">
      <Image src="/icon.png" width={65} height={51} alt="" />
    </Link>
  );
}

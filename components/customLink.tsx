import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function CustomLink(props: ButtonProps) {
  return (
    <Link
      href={props.href}
      className="bg-brand text-white rounded-sm px-8 py-2"
    >
      {props.children}
    </Link>
  );
}

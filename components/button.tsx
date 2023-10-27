import { HTMLAttributes } from "react";

export default function Button(props: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={props.className + " bg-brand text-white rounded-sm px-8 py-2"}
    >
      {props.children}
    </button>
  );
}

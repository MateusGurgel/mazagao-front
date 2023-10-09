import { HTMLAttributes } from "react";

export default function Button(props: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={props.className + " bg-brand p-3 text-white"}>
      {props.children}
    </button>
  );
}

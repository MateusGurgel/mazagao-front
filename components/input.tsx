import { HTMLInputTypeAttribute } from "react";

interface InputProps {
  type?: HTMLInputTypeAttribute;
  placeHolder?: string;
}

export default function Input(props: InputProps) {
  return (
    <input
      className="bg-painel p-3 text-center outline-none border-b border-transparent focus:border-brand transition-border duration-300"
      onFocus={(e) => (e.target.placeholder = "")}
      onBlur={(e) => {
        if (props.placeHolder) {
          e.target.placeholder = props.placeHolder;
        }
      }}
      placeholder={props.placeHolder}
      type={props.type}
    />
  );
}

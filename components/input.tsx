import { error } from "console";
import { HTMLInputTypeAttribute, LegacyRef, useRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  type?: HTMLInputTypeAttribute;
  placeHolder?: string;
  register?: UseFormRegisterReturn<any>;
  erroMessage?: string;
}

export default function Input(props: InputProps) {
  function getStyle() {
    let base =
      "bg-painel p-3 text-center outline-none border-b border-transparent transition-border duration-300";

    base += props.erroMessage ? " border-warning  " : " focus:border-brand ";

    return base;
  }

  return (
    <div className="float-left text-white">
      <input
        className={getStyle()}
        {...props.register}
        placeholder={props.placeHolder}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => {
          if (props.placeHolder) {
            e.target.placeholder = props.placeHolder;
          }
        }}
        type={props.type}
      />
      {props.erroMessage && (
        <p className="text-warning text-sm">{props.erroMessage}</p>
      )}
    </div>
  );
}

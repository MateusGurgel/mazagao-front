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
  return (
    <div className="float-left">
      <input
        className={
          " bg-painel p-3 text-center outline-none border-b border-transparent transition-border duration-300 " +
          (props.erroMessage ? " border-error" : " focus:border-brand")
        }
        {...props.register}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => {
          if (props.placeHolder) {
            e.target.placeholder = props.placeHolder;
          }
        }}
        placeholder={props.placeHolder}
        type={props.type}
      />
      {props.erroMessage && (
        <p className="text-error text-sm">{props.erroMessage}</p>
      )}
    </div>
  );
}

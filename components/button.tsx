interface ButtonProps {
  children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <button className="bg-brand text-white rounded-sm px-8 py-1">
      {props.children}
    </button>
  );
}

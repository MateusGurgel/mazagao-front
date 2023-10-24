interface PanelProps {
  title: string;
  children: React.ReactNode;
}

export default function Panel(props: PanelProps) {
  return (
    <div className="flex flex-col gap-1 bg-painel text-center py-4 px-8 pb-8">
      <h1>{props.title}</h1>
      <h1 className="font-bold">{props.children}</h1>
    </div>
  );
}

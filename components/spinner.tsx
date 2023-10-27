export default function Spinner() {
  return (
    <div
      className={
        "flex justify-center items-center min-h-min-content bg-background"
      }
    >
      <div className="animate-spin rounded-full h-16 w-16 border-t-8  bg-white border-brand" />
    </div>
  );
}

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-min-content bg-background">
      <div className="flex flex-col gap-6 bg-menu w-80 text-center text-white py-16 px-10">
        <input className="bg-painel p-3 text-center" placeholder="Email" />
        <input
          className="bg-painel p-3 text-center"
          placeholder="Senha"
          type="password"
        />
        <button className="bg-brand p-3 mt-8">Login</button>
      </div>
    </div>
  );
}

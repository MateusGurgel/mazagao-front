export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-min-content bg-background">
      <div className="flex flex-col gap-3 bg-menu w-80 text-center text-white py-8 px-10">
        <input className="bg-painel p-3 text-center" placeholder="Email" />
        <input className="bg-painel p-3 text-center" placeholder="Username" />
        <input
          className="bg-painel p-3 text-center"
          placeholder="Senha"
          type="password"
        />
        <input
          className="bg-painel p-3 text-center"
          placeholder="Confirme Senha"
          type="password"
        />

        <button className="bg-brand p-3 mt-4">Register</button>
      </div>
    </div>
  );
}

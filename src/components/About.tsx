export function About() {
  return (
    <div
      className="flex m-auto w-full xl:min-w-[1250px] overflow-hidden h-[300px] md:h-[700px] mt-2 mb-12 bg-cover bg-center rounded-md"
      style={{
        backgroundImage: `url(${"https://img.freepik.com/free-photo/multi-colored-abstract-pattern-fashionable-t-shirt-generated-by-ai_188544-42214.jpg?t=st=1715280322~exp=1715283922~hmac=8ef10645dfdb0fb510620cc6323eef7e26416931fa102a4433e64e70cc22265c&w=996"})`,
      }}
    >
      <div className="grid grid-cols-2 text-center items-center p-4">
        <span>
          <h1 className="text-3xl font-bold bg-gradient-to-tr from-sky-100 to-sky-500 bg-clip-text text-transparent">Blessed Personalizados</h1>
          <p className="text-sky-100 font-mono">Personalize seus momentos</p>
        </span>
      </div>
    </div>
  );
}

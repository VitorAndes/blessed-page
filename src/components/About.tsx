export function About() {
  return (
    <div
      className="flex m-auto max-w-[1250px] h-[600px] mt-2 bg-cover bg-center rounded-md"
      style={{
        backgroundImage: `url(${"https://img.freepik.com/free-photo/multi-colored-abstract-pattern-fashionable-t-shirt-generated-by-ai_188544-42214.jpg?t=st=1715280322~exp=1715283922~hmac=8ef10645dfdb0fb510620cc6323eef7e26416931fa102a4433e64e70cc22265c&w=996"})`,
      }}
    >
      <div className="grid grid-cols-2 items-center p-4">
        <h1 className="text-sky-200 text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          autem a aperiam, voluptate corporis assumenda enim error mollitia
          tempore eligendi deserunt quidem ut dolorem perspiciatis tempora saepe
          nesciunt possimus ab!
        </h1>
      </div>
    </div>
  );
}

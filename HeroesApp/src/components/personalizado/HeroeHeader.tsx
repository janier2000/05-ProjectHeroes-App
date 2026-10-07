interface Props {
  titulo: string;
  descripcion?: string;
}

export function HeroeHeader({ titulo, descripcion }: Props) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
        {titulo}
      </h1>
      {descripcion && <p className="text-gray-600 text-lg">{descripcion}</p>}
    </div>
  );
}

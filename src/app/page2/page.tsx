import Rectangle from '../components/Rectangle';

export default function GridPage() {
  // Cantidad total de cuadrados (5 filas × 5 columnas)
  const totalSquares = 5 * 5;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: totalSquares }).map((_, i) => {
          // Alterna entre verde y azul en cada cuadrado
          const color = i % 2 === 0 ? 'green' : 'blue';
          return <Rectangle key={i} color={color} />;
        })}
      </div>
    </div>
  );
}
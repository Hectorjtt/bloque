import Link from 'next/link';
import Rectangle from './components/Rectangle';  // Ajusta el nombre según tu componente real


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="w-64 h-32 bg-green-500"></div>
      <Rectangle color="red" />

      <Link href="/page2">Ir a página 2</Link>
    </div>
  );
}
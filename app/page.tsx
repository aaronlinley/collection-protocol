import CollectionProtocol from './_components/CollectionProtocol';
import { ModelType } from './_types/model';

export default async function Home() {
  const charactersResponse = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/characters`);
  const terrainResponse = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/terrain`);

  const characters: ModelType[] = await charactersResponse.json();
  const terrain: ModelType[] = await terrainResponse.json();
  return (
    <main className="flex min-h-screen p-24">
      <div className="container mx-auto">
        <h1 className="text-3xl text-center font-bold text-slate-700 mb-2">Collection Protocol</h1>
        <p className="text-center font-semibold text-slate-700 mb-12">Keep track of your collected Marvel: Crisis Protocol models and their various completion states.</p>

        <CollectionProtocol characters={characters} terrain={terrain} />
      </div>
    </main>
  )
}

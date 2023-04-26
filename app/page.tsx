import CollectionProtocol from './_components/CollectionProtocol';
import { ModelType } from './_types/model';
import { getAllJsonFromDataDirectory } from './_helpers/json';

export default async function Home() {
  const characters: ModelType[] = getAllJsonFromDataDirectory('characters');
  const terrain: ModelType[] = getAllJsonFromDataDirectory('terrain');
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

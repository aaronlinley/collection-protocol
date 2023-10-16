import CollectionProtocol from './_components/CollectionProtocol';
import { ModelType } from './_types/model';
import { getAllJsonFromDataDirectory } from './_helpers/json';
import KoFiButton from './_components/KoFiButton';
import Image from 'next/image';

export default async function Home() {
  const characters: ModelType[] = getAllJsonFromDataDirectory('characters');
  const terrain: ModelType[] = getAllJsonFromDataDirectory('terrain');
  return (
    <>
      <KoFiButton />

      <main className="flex flex-col items-center min-h-screen pt-24 px-4 pb-12 md:py-12 md:px-12 xl:px-24">
        <div className="container">
          <Image src="/logo.svg" width="150" height="139" alt="Collection Protocol" className="block mx-auto mb-12" />

          <CollectionProtocol characters={characters} terrain={terrain} />
        </div>
      </main>
    </>
  )
}

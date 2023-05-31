import CollectionProtocol from './_components/CollectionProtocol';
import { ModelType } from './_types/model';
import { getAllJsonFromDataDirectory } from './_helpers/json';
import { Roboto_Condensed } from 'next/font/google'
import KoFiButton from './_components/KoFiButton';
import Image from 'next/image';

const roboto = Roboto_Condensed({ weight: ['700'], subsets: ['latin'] })

export default async function Home() {
  const characters: ModelType[] = getAllJsonFromDataDirectory('characters');
  const terrain: ModelType[] = getAllJsonFromDataDirectory('terrain');
  return (
    <>
      <KoFiButton />

      <main className="flex flex-col items-center min-h-screen py-12 px-12 xl:px-24">
        <div className="container mx-auto">
          <Image src="/main-logo.png" width="150" height="167" alt="Collection Protocol" className="block mx-auto mb-12" />

          <CollectionProtocol characters={characters} terrain={terrain} />
        </div>
      </main>
    </>
  )
}

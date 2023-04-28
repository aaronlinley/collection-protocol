import CollectionProtocol from './_components/CollectionProtocol';
import { ModelType } from './_types/model';
import { getAllJsonFromDataDirectory } from './_helpers/json';
import { Roboto_Condensed } from 'next/font/google'

const roboto = Roboto_Condensed({ weight: ['700'], subsets: ['latin'] })

export default async function Home() {
  const characters: ModelType[] = getAllJsonFromDataDirectory('characters');
  const terrain: ModelType[] = getAllJsonFromDataDirectory('terrain');
  return (
    <main className="flex flex-col items-center min-h-screen py-24 px-12 xl:px-24">
      <div className="container mx-auto">
        <h1 className={`${roboto.className} text-4xl text-center font-bold text-slate-700 mb-2`}>Collection Protocol</h1>
        <p className="text-center text-slate-700 mb-12">Keep track of your collected <span className="italic">Marvel: Crisis Protocol</span> models and their various completion states.</p>

        <CollectionProtocol characters={characters} terrain={terrain} />
      </div>
    </main>
  )
}

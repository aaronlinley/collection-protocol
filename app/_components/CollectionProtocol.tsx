'use client';

import { Tab } from '@headlessui/react';
import ModelsGrid from './ModelsGrid';
import ModelsList from './ModelsList';
import ViewToggle from './ViewToggle';
import Search from './Search';
import { ModelType } from '../_types/model';
import { useEffect, useState } from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function CollectionProtocol({
  characters,
  terrain
}: {
  characters: ModelType[],
  terrain: ModelType[]
}) {
  const tabs = [
    "Characters",
    "Terrain"
  ];

  const [searchTerm, setSearchTerm] = useState<string>("");

  const [filteredCharacters, setFilteredCharacters] = useState<ModelType[]>(characters);
  const [filteredTerrain, setFilteredTerrain] = useState<ModelType[]>(terrain);

  const [view, setView] = useState<string>("grid");

  useEffect(() => {
    setFilteredCharacters(characters.filter(
      (model) => model.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    ));
    setFilteredTerrain(terrain.filter(
      (model) => model.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    ));
  }, [searchTerm, characters, terrain])

  return <>
    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
      <div className="w-full md:w-2/3 order-2 md:order-1">
        <Search onSearch={setSearchTerm} />
      </div>
      <div className='order-1 md:order-2'>
        <ViewToggle onViewChange={setView} />
      </div>
    </div>
    <Tab.Group>
      <Tab.List className="flex">
        {tabs.map((tab) => (
          <Tab
            key={tab}
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm font-bold uppercase tracking-widest text-primary',
                'focus:outline-none focus:ring-0',
                selected
                  ? 'bg-white border-x-2 border-t-2 border-primary border-b-white'
                  : 'text-slate-600 hover:bg-white/[0.12] border-b-2 border-b-primary'
              )
            }
          >
            {tab}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className={`bg-white border-x-2 border-b-2 border-primary ${view === 'grid' ? "p-3" : ""}`}>
        <Tab.Panel key={`characters-tab-panel`}>
          {view === 'grid' && <ModelsGrid models={filteredCharacters} />}
          {view === 'list' && <ModelsList models={filteredCharacters} />}
        </Tab.Panel>
        <Tab.Panel key={`terrain-tab-panel`}>
          {view === 'grid' && <ModelsGrid models={filteredTerrain} />}
          {view === 'list' && <ModelsList models={filteredTerrain} />}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  </>
}

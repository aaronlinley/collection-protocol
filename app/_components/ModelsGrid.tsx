'use client';

import { Tab } from '@headlessui/react'
import Model from './Model';
import { ModelType } from '../_types/model';
import { useCallback, useContext, useEffect, useState } from 'react';
import { UserModelsContext } from '../_context/UserModelsContext';
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useDebounce } from "usehooks-ts";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ModelsGrid({
  characters,
  terrain
}: {
  characters: ModelType[],
  terrain: ModelType[]
}) {
  const userModels = useContext(UserModelsContext);

  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

  const [filteredCharacters, setFilteredCharacters] = useState<ModelType[]>(characters);
  const [filteredTerrain, setFilteredTerrain] = useState<ModelType[]>(terrain);

  const [tabs, setTabs] = useState({
    "Characters": filteredCharacters,
    "Terrain": filteredTerrain
  });

  const filterModels = useCallback((models: ModelType[]) => {
    return models.filter((model) => {
      return model.name.toLocaleLowerCase().includes(debouncedValue.toLocaleLowerCase());
    });
  }, [debouncedValue]);

  useEffect(() => {
    setFilteredCharacters(filterModels(characters));
    setFilteredTerrain(filterModels(terrain));
    setTabs({
      "Characters": filteredCharacters,
      "Terrain": filteredTerrain
    })
  }, [debouncedValue, setFilteredCharacters, setFilteredTerrain, filterModels, setTabs]);

  return <div className="flex flex-col gap-4">
    <div
        className={`mb-6 px-4 flex gap-4 items-center rounded-md border bg-white dark:bg-zinc-800 border-neutral-300 dark:border-zinc-600 shadow-sm md:mb-0`}
      >
      <MagnifyingGlassIcon className="w-6 h-6 text-neutral-400 dark:text-zinc-400" />
      <input
        type="text"
        className={`w-full text-neutral-600 placeholder:text-neutral-400 dark:text-zinc-300 dark:placeholder:text-zinc-400 py-3 bg-transparent focus-visible:outline-none`}
        placeholder="Search..."
        onChange={(event) => {setValue(event.target.value)}}
      />
    </div>
    <Tab.Group>
        <Tab.List className="flex space-x-1 rounded">
          {Object.keys(tabs).map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-bold uppercase tracking-widest text-slate-700',
                  'focus:outline-none focus:ring-0',
                  selected
                    ? 'bg-white shadow'
                    : 'text-slate-600 hover:bg-white/[0.12]'
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(tabs).map((models, idx) => (
            <Tab.Panel key={idx}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {models?.map((model) => (
                  <Model
                    key={`model${model.id}`}
                    model={model}
                    owned={userModels.owned?.includes(model.id) || false}
                    assembled={userModels.assembled?.includes(model.id) || false}
                    primed={userModels.primed?.includes(model.id) || false}
                    inProgress={userModels.inProgress?.includes(model.id) || false}
                    painted={userModels.painted?.includes(model.id) || false}
                  />
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
  </div>
}

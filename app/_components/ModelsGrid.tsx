'use client';

import { Tab } from '@headlessui/react'
import Model from './Model';
import { ModelType } from '../_types/model';
import { useContext } from 'react';
import { UserModelsContext } from '../_context/UserModelsContext';

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
  const tabs = {
    "Characters": characters,
    "Terrain": terrain
  }

  const userModels = useContext(UserModelsContext);

  return <div className="flex flex-col gap-4">
    <Tab.Group>
        <Tab.List className="flex space-x-1 rounded">
          {Object.keys(tabs).map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium leading-5 text-slate-700',
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

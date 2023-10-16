'use client';

import ModelCard from './ModelCard';
import { ModelType } from '../_types/model';
import { useContext } from 'react';
import { UserModelsContext } from '../_context/UserModelsContext';

export default function ModelsGrid({
  models
}: {
  models: ModelType[]
}) {
  const userModels = useContext(UserModelsContext);

  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
    {models?.map((model) => (
      <ModelCard
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
}

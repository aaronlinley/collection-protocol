'use client';

import { ModelType } from '../_types/model';
import { useContext } from 'react';
import { UserModelsContext } from '../_context/UserModelsContext';
import ModelListItem from './ModelListItem';

export default function ModelsList({
  models
}: {
  models: ModelType[]
}) {
  const userModels = useContext(UserModelsContext);

  return <div className="flex flex-col">
    {models?.map((model, idx) => (
      <ModelListItem
        key={`model${model.id}`}
        model={model}
        owned={userModels.owned?.includes(model.id) || false}
        assembled={userModels.assembled?.includes(model.id) || false}
        primed={userModels.primed?.includes(model.id) || false}
        inProgress={userModels.inProgress?.includes(model.id) || false}
        painted={userModels.painted?.includes(model.id) || false}
        last={idx === (models.length - 1)}
      />
    ))}
  </div>
}

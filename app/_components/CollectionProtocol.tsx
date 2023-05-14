'use client';

import ModelsGrid from './ModelsGrid';
import { ModelType } from '../_types/model';

export default function CollectionProtocol({
  characters,
  terrain
}: {
  characters: ModelType[],
  terrain: ModelType[]
}) {
  return <ModelsGrid characters={characters} terrain={terrain} />
}

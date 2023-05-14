'use client';

import ModelsGrid from './ModelsGrid';
import { ModelType } from '../_types/model';
import Script from 'next/script';

export default function CollectionProtocol({
  characters,
  terrain
}: {
  characters: ModelType[],
  terrain: ModelType[]
}) {
  return <>
    <Script strategy="lazyOnload" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1280989896075709" />
    <ModelsGrid characters={characters} terrain={terrain} />
  </>
}

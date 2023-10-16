import { useCallback, useEffect, useState } from 'react';
import { Bars4Icon, Squares2X2Icon } from '@heroicons/react/24/solid';
import { useWindowSize } from 'usehooks-ts';

function GridView() {
  return <div className='flex items-center justify-between'>
    <span className='sm:sr-only text-xs'>Change to List View</span>
    <Bars4Icon className="w-4 h-4 sm:w-6 sm:h-6" />
  </div>
}

function ListView() {
  return <div className='flex items-center justify-between'>
    <span className='sm:sr-only text-xs'>Change to Grid View</span>
    <Squares2X2Icon className="w-4 h-4 sm:w-6 sm:h-6" />
  </div>
}

export default function ViewToggle({
  onViewChange
}: {
  onViewChange: (view: string) => void
}) {
  const [view, setView] = useState<string>("grid");

  const handleViewChange = useCallback(() => {
    if (view === "grid") {
      setView('list');
    } else {
      setView("grid");
    }
  }, [view, setView]);

  useEffect(() => {
    onViewChange(view);
  }, [view]);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 640 && view !== "grid") {
      setView("grid");
    }
  }, [width]);

  return (
    <button className="bg-white border-2 border-primary p-2 text-primary w-full sm:w-auto" onClick={handleViewChange}>
      {view === 'grid' && <GridView />}
      {view === 'list' && <ListView />}
    </button>
  )
}

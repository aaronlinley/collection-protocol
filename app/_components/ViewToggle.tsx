import { useCallback, useEffect, useState } from 'react';
import { Bars4Icon, Squares2X2Icon } from '@heroicons/react/24/solid';

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

  return (
    <button className="bg-white border-2 border-slate-700 p-2 text-slate-700" onClick={handleViewChange}>
      {view === 'grid' && <Bars4Icon className="w-6 h-6" />}
      {view === 'list' && <Squares2X2Icon className="w-6 h-6" />}
    </button>
  )
}

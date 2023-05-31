import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Search({
  onSearch
}: {
  onSearch: (searchTerm: string) => void;
}) {
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <div
        className={`w-full mb-6 px-4 flex gap-4 items-center border-2 border-primary bg-white shadow-sm md:mb-0`}
      >
      <MagnifyingGlassIcon className="w-6 h-6 text-neutral-400" />
      <input
        type="text"
        className={`w-full text-neutral-600 placeholder:text-neutral-400 py-3 bg-transparent focus-visible:outline-none`}
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
}

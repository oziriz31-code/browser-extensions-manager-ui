import {useState} from 'react';
import type {FilterType} from "../types.ts";

interface FiltersProps {
  value?: FilterType;
  onChange?: (value: FilterType) => void;
}

function Filters({value, onChange}: FiltersProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>(value ?? 'All');

  const filters = ['All', 'Active', 'Inactive'];

  const handleClick = (value: FilterType) => {
    setActiveFilter(value);
    onChange?.(value); // emit event if onChange is provided
  };

  return (
    <div
      className="flex flex-col md:flex-row justify-center md:justify-between md:items-center gap-4 text-center md:text-left">
      <h1 className="font-bold text-4xl">
        Extensions List
      </h1>
      <div role="group" className="gap-2 flex justify-center md:justify-end">
        {filters.map((filter) => (
          <button
            key={filter}
            role="button"
            className={`btn-outline-select ${
              activeFilter === filter ? 'btn-active' : ''
            }`}
            onClick={() => handleClick(filter as FilterType)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filters;

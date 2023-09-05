import { useState, useEffect } from 'react';
import Select from 'react-select';
import { CustomFilterProps, Option } from '../types';
import { useSearchParams } from 'react-router-dom';

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState<Option | null>(options[0]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (selected?.value) {
      searchParams.set(title, selected.value.toLocaleLowerCase());

      setSearchParams(searchParams);
    }
  }, [selected]);

  return (
    <div className="w-fit">
      <Select
        value={selected}
        onChange={(e: Option | null) => setSelected(e)}
        placeholder={title}
        options={options}
      />
    </div>
  );
};

export default CustomFilter;

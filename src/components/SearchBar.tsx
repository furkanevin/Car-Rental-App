import Select from 'react-select';
import { manufacturers } from '../constants';
import React, { useState, useMemo } from 'react';
import { Option } from '../types';
import { useSearchParams } from 'react-router-dom';

const SearchButton = ({ styling }: { styling: string }) => {
  return (
    <button className={`ml-3 z-10 ${styling}`}>
      <img src="/magnifying-glass.svg" width={40} height={40} />
    </button>
  );
};

const SearchBar = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');

  const [params, setParams] = useSearchParams();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (make === '' && model === '') {
      return alert('Lütfen marka ve model seçiniz');
    }

    setParams({
      make: make.toLowerCase(),
      model: model.toLocaleLowerCase(),
    });
  };

  const options: readonly Option[] = useMemo(
    () =>
      manufacturers.map((item) => ({
        label: item,
        value: item,
      })),
    []
  );

  return (
    <form className="searchbar gap-3" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <Select
          className="w-full"
          isSearchable={true}
          options={options}
          placeholder="Volkswagen"
          onChange={(e: Option | null) => {
            if (e) {
              setMake(e.value);
            }
          }}
        />
        <SearchButton styling="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <img
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute ml-4"
        />
        <input
          type="text"
          placeholder="Tiguan"
          className="searchbar__input"
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton styling="sm:hidden" />
      </div>
      <SearchButton styling="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;

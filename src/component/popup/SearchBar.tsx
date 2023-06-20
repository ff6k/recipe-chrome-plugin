// external dependencies
import React, {
  useState,
  useRef,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react';
import { Combobox } from '@headlessui/react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { debounce } from 'lodash';
// type
import { RECIPE_DATA } from '../../type';

type props = {
  data: RECIPE_DATA[];
  onSelectItem: Dispatch<SetStateAction<number | undefined>>;
};

const PopupSearchBar = ({ onSelectItem, data }: props) => {
  const [setSelected] = useState();
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const filteredRecipes = useMemo(
    () =>
      query === ''
        ? data
        : data.filter((recipe: RECIPE_DATA) =>
            recipe.title.toLowerCase().includes(query.toLowerCase())
          ),
    [data, query]
  );

  return (
    <div className="z-10 w-full">
      <Combobox onChange={setSelected}>
        <div className="relative h-full">
          <div className="relative h-full w-full cursor-default rounded-md bg-neutral-60 text-left backdrop-blur-xl shadow-custom">
            <MagnifyingGlassIcon className="pointer-events-none absolute mt-3 ml-3 h-4 w-4 text-white" />
            <Combobox.Input
              onBlur={() => {
                setTimeout(() => {
                  setExpanded(false);
                  setQuery('');
                  if (searchInputRef.current) searchInputRef.current.value = '';
                }, 250);
              }}
              className="w-full rounded-md focus:outline-none bg-transparent text-base leading-5 text-neutral-20 py-2.5 pr-2 pl-10"
              ref={searchInputRef}
              displayValue={() => query}
              onChange={debounce(
                (event: any) => setQuery(event.target.value),
                300
              )}
              autoComplete="off"
              placeholder="Search cousine"
              onFocus={() => setExpanded(true)}
            />
            {/* close button */}
            {expanded && (
              <button
                className="absolute inset-y-0 right-0 top-0 bottom-0 mr-1 flex items-center pr-2 sm:mr-0.5"
                onClick={() => {
                  setExpanded(false);
                  setQuery('');
                  if (searchInputRef.current) searchInputRef.current.value = '';
                }}
              >
                <XMarkIcon className="h-5 w-5 text-white" />
              </button>
            )}
          </div>
          {/* search results */}
          {expanded && (
            <Combobox.Options
              className="scrollbar absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-neutral-60/60 py-1 text-base text-white shadow-lg backdrop-blur-xl"
              static={expanded}
            >
              {filteredRecipes.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4">
                  Nothing found.
                </div>
              ) : (
                filteredRecipes.map((recipe) => (
                  <div
                    className={`relative cursor-pointer select-none p-2 text-gray-400 hover:text-white`}
                    key={recipe.id + recipe.title}
                    onClick={() => onSelectItem(recipe.id)}
                  >
                    <span className={`flex justify-between truncate`}>
                      <span>{recipe.id}</span>
                      <div className="float-right">{recipe.title}</div>
                    </span>
                  </div>
                ))
              )}
            </Combobox.Options>
          )}
        </div>
      </Combobox>
    </div>
  );
};

export default PopupSearchBar;

import { useState, useContext, useEffect } from "react";
import { contextApi } from "../utils/contextapi";

const SearchMovies = () => {
  let [query, setQuery] = useState<string>("");
  let { setMovieName, movieName }: any = useContext(contextApi);
  let filterTimeout;

  clearTimeout(filterTimeout);

  if (query != "") {
    filterTimeout = setTimeout(() => {
      setMovieName(query);
    }, 1000);
  }

  return (
    <>
        <div className="relative pl-12 pr-12 pt-5 pb-10">
          <div className="absolute top-10 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            id="default-search"
            className="w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-100 focus:border-blue-100 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-800 dark:gray-900"
            placeholder="جستجوی فیلم ..."
            required

          />
        </div>
      <div>
      </div>
    </>
  );
};

export default SearchMovies;

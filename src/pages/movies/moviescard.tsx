import { useState, useEffect, useContext } from "react";

import Link from "next/link";
import Image from "next/image";

import { contextApi } from "@/components/contextapi";
import { FilteredMoviesSrv } from "@/components/services";

const MoviesCard = () => {
  const [AllMovies, setAllMovies] = useState([]);
  const { movieName }: any = useContext(contextApi);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const allMovies = await FilteredMoviesSrv(movieName);
        setAllMovies(allMovies);
      } catch (err) {}
    };
    fetchData();
  }, [movieName]);

  return (
    <div className="inline-block pl-20">
      {AllMovies.map((m: any) => (
        <div key="m.title" className="content-center float-left w-96 mr-5 mb-5">
          <Link
            href={`/movies/movie?id=${m.id}&gid=${
              m.genres != undefined ? m.genres[0] :`Drama`
            }`}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={m.poster}
              alt={m.title}
              width={500}
              height={300}
              priority
            />
            <div className="flex flex-col justify-between pl-4 leading-normal">
              <h6 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">
                {m.title}
              </h6>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 pr-3">
              {m.year}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {m.country}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 pr-3 tracking-tight">
              {m.genres+''}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MoviesCard;

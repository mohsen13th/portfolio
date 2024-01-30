import { useEffect, useState } from "react";
import { GenresSrv, MoviesGenSrv } from "@/utils/api/services";
import Image from "next/image";
import Link from "next/link";

const MovWithSpGen = ({ gid, id }: any) => {
  const [allMovies, setAllMovies]: any = useState([]);
  const [allGenres, setAllGenres]: any = useState([]);
  console.log(id);
  console.log(gid);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const genres = await GenresSrv();
        setAllGenres(genres);
      } catch (err) {}
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filterData = allGenres.filter(
          (item: { name: string | any[] }) => item.name == gid
        );
        if (filterData.length === 1) {
          const AllGenMov = await MoviesGenSrv(filterData[0].id);
          const FilteredGenMovies = AllGenMov.filter(
            (item: { id: any }) => item.id != id
          );
          setAllMovies(FilteredGenMovies);
        }
      } catch (err) {}
    };
    fetchData();
  }, [gid, allGenres, id]);

  return (
    <div className="overflow-x-auto h-full w-[30em] p-0 float-right pt-8 pl-3">
      <table className="table table-xs table-pin-rows table-pin-cols border-l border-white">
        <thead>
          <tr>
            <th className="text-red-200">Similar Movies</th>
          </tr>
        </thead>
        <tbody>
          {allMovies.map((m: any) => (
            <tr key={m.id}>
              <td className="text-white text-xs pl-3">
                <Link className="block" href={`/movies/movie?id=${m.id}&gid=${m.genres[0]}`}>
                  {m.title}
                </Link>
              </td>
              <td className="pl-5">
                <Link className="block" href={`/movies/movie?id=${m.id}&gid=${m.genres[0]}`}>
                  <Image src={m.poster} width={27} height={27} alt={m.title} quality={10} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovWithSpGen;

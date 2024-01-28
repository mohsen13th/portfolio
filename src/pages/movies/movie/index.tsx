import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";
import MovWithSpGen from "../movWithSpGen";
import { MovieSrv } from "@/components/services";
import Layout from "@/components/layout";

const MovieDetail = () => {
  const [Movie, setMovie]: any = useState({});
  const [genName, setGenName]: any = useState();
  const router = useRouter();
  const { id, gid }: any = router.query;

  useEffect(() => {
    setGenName(gid);
    // console.log(movieId);
    const fetchData = async () => {
      try {
        if (id !== undefined) {
          let idQuery: number = parseInt(id);
          const movie = await MovieSrv(idQuery);
          setMovie(movie);
        }
      } catch (err) {}
    };
    fetchData();
  },[id, gid, genName]);

  return (
    <Layout>
      <div className="bg-black" style={{ minHeight: `calc(100vh - 160px)` }}>
        <section className="h-full w-[25em] pl-10 pr-1 float-left">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-bg-13/50 backdrop-blur-[16px] relative">
            <div className="flex h-full flex-col items-center justify-center gap-6 pt-8">
              <Image
                className="block inset-0 h-full rounded-2xl object-cover shadow-2xl shadow-slate-600"
                src={Movie.poster}
                alt={Movie.title}
                width={310}
                height={200}
              />
            </div>
          </div>
        </section>
        <section className="h-full w-[30em] p-0 float-left">
          <div className="flex h-full w-full flex-col items-left justify-center rounded-xl bg-bg-13/50 backdrop-blur-[16px] relative">
            <div className="flex h-full flex-col items-left justify-center gap-6 pt-8">
              <p className="line-clamp-3 shrink-0 break-all text-xl font-semibold text-fonts-50 text-yellow-400">
                {Movie.title}
              </p>
              <ul className="flex flex-row flex-wrap gap-5 text-fonts-100">
                <li className="local-numbers text-white">{Movie.runtime}</li>
              </ul>
              <ul className="flex flex-row flex-wrap gap-4 text-fonts-100">
                <li className="local-numbers text-white">{Movie.released}</li>
              </ul>
              <ul className="flex flex-row flex-wrap gap-4 text-fonts-100">
                <li className="local-numbers text-white">
                  {Movie.genres + ""}
                </li>
              </ul>
              <ul className="flex flex-row flex-wrap gap-3 text-fonts-100">
                <li className="local-numbers text-blue-200">
                  <span className="text-white">Directed By </span>
                  {Movie.director}
                </li>
              </ul>
              <ul className="flex flex-row flex-wrap gap-5 text-fonts-100 text-sm">
                <li className="local-numbers text-red-200">
                  <span className="text-white">Stars: </span>
                  {Movie.actors}
                </li>
              </ul>
              <ul className="flex flex-row flex-wrap gap-5 text-fonts-100 text-sm">
                <li className="local-numbers text-white">{Movie.plot}</li>
              </ul>
              <ul className="flex flex-row flex-wrap gap-2 text-xs">
                <li className="local-numbers text-white">
                  <Link
                    href={`https://www.imdb.com/title/${Movie.imdb_id}`}
                    className="flex flex-row flex-nowrap items-center rounded-full font-bold bg-bg-9"
                    dir="ltr"
                  >
                    <div className="flex h-[2.2em] w-[2.2em]">
                      <span className="flex h-[2.2em] w-[2.2em] shrink-0 overflow-hidden rounded-full">
                        <Image
                          src="/imdb.png"
                          alt="imdb"
                          width={50}
                          height={50}
                        />
                      </span>
                    </div>
                    <div className="flex flex-row flex-nowrap items-center gap-2 px-2">
                      <span>9.6</span>
                      <span className="text-fonts-200 text-xs">
                        {" "}
                        ( {Movie.imdb_votes} )
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <MovWithSpGen gid={genName} id={id} />
      </div>
    </Layout>
  );
};

export default MovieDetail;

import Image from "next/image";
import Swiper13 from "@/components/swiper13";
import SwiperTest from "@/components/swipertest";
import { contextApi } from "@/components/contextapi";
import { useState, createContext } from "react";
import TestContext2 from "../components/testcontext2";
import TestContext1 from "../components/testcontext1";
import Layout from "@/components/layout";
import MoviesCard from "./movies/moviescard";
import SearchMovies from "@/components/searchmovies";
export default function Home() {
  let [cont1, setCont1] = useState(0);
  let [cont2, setCont2] = useState();
  let [movieName, setMovieName] = useState<string>('');
  
  return (
    <>
      <contextApi.Provider
        value={{
          cont1,
          cont2,
          setCont1,
          setCont2,
          movieName,
          setMovieName,
        }}
      >
        <Layout>
        <div className="bg-cover bg-gray-300" >
        <Swiper13 />
        <SearchMovies/>
        <MoviesCard/>
        </div>
        
        {/* <TestContext1/> */}
        {/* <TestContext2/> */}
        </Layout>
      </contextApi.Provider>
    </>
  );
}

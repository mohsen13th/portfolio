import { contextApi } from "@/utils/contextapi";
import {QueryClient, QueryClientProvider}from '@tanstack/react-query';
import { Children, useState} from "react";
import Layout from "@/components/layout";
import MoviesCard from "./movies/moviescard";
import SearchMovies from "@/components/searchmovies";
import SwiperSlider from '../components/swiperSlider';
export default function Home() {
  let [movieName, setMovieName] = useState<string>('');
  const myClient = new QueryClient();
  
  return (
    <>
    <QueryClientProvider client={myClient}>
      <contextApi.Provider
        value={{
          movieName,
          setMovieName,
        }}
      >
        <Layout>
        <div className="bg-cover bg-gray-300" >
        <SwiperSlider />
        <SearchMovies/>
        <MoviesCard/>
        </div>
        
        {/* <TestContext1/> */}
        {/* <TestContext2/> */}
        </Layout>
      </contextApi.Provider>
      </QueryClientProvider>
    </>
  );
}

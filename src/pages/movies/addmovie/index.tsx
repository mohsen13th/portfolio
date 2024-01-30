import { useState, useEffect, useCallback, useContext, useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";
import { addMovie } from "@/utils/api/services";
import { useRouter } from "next/router";

const AddMovie = () => {
  console.log(13);
  // const [title, setTitle] = useState<string>("");
  // const [country, setCountry] = useState<string>("");
  // const [imdbid, setImdbid] = useState<string>("");
  // const [year, setYear] = useState<number>(11);
  // const [director, setDirector] = useState<string>("");
  // const [imdbrating, setImdbrating] = useState<string>("");
  // const [imdbvotes, setImdbvotes] = useState<string>("");
  // const [poster, setPoster] = useState<string>("");
  const [insertmovie, setInsertmovie] = useState<any>();
  const [chooseImage, setChooseImage] = useState<any>();
  const [imgsrc, setImgsrc] = useState<any>("/picture.svg");
  const router = useRouter();

  const handleChange = (event: any) => {
    // console.log(event.target.files[0]);
    // switch (setter) {
    //   case "title":
    //     setInsertmovie({ ...insertmovie, title: event });
    //   case "country":
    //     setInsertmovie({ ...insertmovie, country: event });
    //   case "imdbid":
    //     setInsertmovie({ ...insertmovie, imdb_id: event });
    //   case "year":
    //     setInsertmovie({ ...insertmovie, year: parseInt(event) });
    //   case "director":
    //     setInsertmovie({ ...insertmovie, director: event });
    //   case "imdbrating":
    //     setInsertmovie({ ...insertmovie, imdb_rating: event });
    //   case "imdbvotes":
    //     setInsertmovie({ ...insertmovie, imdb_votes: event });
    //   case "poster":
    //     setInsertmovie({ ...insertmovie, poster: event });
    // }
    if (event.target.name === "year") {
      setInsertmovie({
        ...insertmovie,
        [event.target.name]: parseInt(event.target.value),
      });
    } else if (event.target.name === "poster") {
      // console.log(11);
      setChooseImage(event.target.files[0]);
    } else {
      setInsertmovie({
        ...insertmovie,
        [event.target.name]: event.target.value,
      });
    }
  };

  const addMovieForm = async (event: any) => {
    event.preventDefault();
    console.log(insertmovie);

    try {
      console.log(insertmovie);
      if (insertmovie != undefined) {
        const { status, data } = await addMovie(insertmovie);
        setInsertmovie({});
        console.log(insertmovie);
      }
      router.push("/");
      console.log("nice");
    } catch (err) {
      console.log(err);
    }
  };

  // const imgRef = useRef();

  useEffect(() => {
    if (window.FileReader) {
      // console.log(11);
      let file = chooseImage;
      let reader = new FileReader();
      // console.log(file);
      if (file && file.type.match("image.*")) {
        // console.log(22);
            let url = reader.readAsDataURL(file);
            reader.onload = () => {
              // Make a fileInfo Object
              let fileInfo = {
                name: file.name,
                type: file.type,
                size: Math.round(file.size / 1000) + ' kB',
                base64: reader.result,
                file: file,
              }
            console.log(fileInfo);
            setImgsrc(reader.result);
            setInsertmovie({
              ...insertmovie,
              poster: reader.result,
            });
        }
      }
    }
    // console.log(55);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[chooseImage])

  return (
    <Layout>
      <form className="max-w-sm mx-auto" onSubmit={addMovieForm}>
        <p className="font-medium mt-5">Insert Movie To Server</p>
        <div className="mb-5 mt-5">
          <input
            type="text"
            name="title"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Movie Title"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            name="imdb_id"
            id="imdbid"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Imdb ID"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            name="country"
            id="country"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Movie Contry"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            name="year"
            id="year"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Movie year"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            name="director"
            id="director"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Movie Director"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            name="imdb_rating"
            id="imdbRating"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Movie IMDB Rating"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            name="imdb_votes"
            id="imdbvotes"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Movie IMDB Votes"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-5">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            aria-describedby="MOVIE PICTURE"
            name="poster"
            id="poster"
            type="file"
            accept="image/*"
            onChange={(e) => handleChange(e)}
          />
          <Image src={imgsrc} alt="" width={200} height={300} className="mb-5 mt-5 rounded-md"/>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5"
        >
          Send
        </button>
      </form>
    </Layout>
  );
};

export default AddMovie;

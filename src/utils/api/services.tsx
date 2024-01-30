import axios from "axios";

const SERVER_URL: string = "https://moviesapi.ir";

export const Movies = async () => {
  const url: string = `${SERVER_URL}/api/v1/movies`;
  console.log(url);
  const { data } = await axios.get(url);
  return data.data;
};

export const FilteredMovies = async (name: string) => {
  const url: string = `${SERVER_URL}/api/v1/movies${
    name != "" ? `/?q=${name}` : ``
  }`;
  console.log(url);
  const { data } = await axios.get(url);
  return data.data;
};

export const aMovie = async (id: any) => {
  // console.log(`id = ${id}`)
  const url: string = `${SERVER_URL}/api/v1/movies/${id}`;
  const { data } = await axios.get(url);
  // console.log(data)
  return data;
};

export const Genres = async () => {
  const url: string = `${SERVER_URL}/api/v1/genres`;
  const { data } = await axios.get(url);
  //console.log(data)
  return data;
};

export const MoviesSpecialGenre = async (gid: number) => {
  const url: string = `${SERVER_URL}/api/v1/genres/${gid}/movies`;
  const { data } = await axios.get(url);
  // console.log(data.data)
  return data.data;
};

export const addMovie = (data:{}) => {
  console.log(data);
  console.log(14);
  const url = `${SERVER_URL}/api/v1/movies`;
  return axios.post(url, data);
};

export const register = (data:{}) => {
  console.log(data);
  console.log(15);
  const url = `${SERVER_URL}/api/v1/register`;
  return axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const login = (formdata:any) => {
  console.log(formdata);
  console.log(16);
  const url = `${SERVER_URL}/oauth/token`;
  return axios.post(url, formdata, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};

export const userInfo = (token:any) => {
  const url = `${SERVER_URL}/api/user`;
  console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return axios.get(url,config);
};
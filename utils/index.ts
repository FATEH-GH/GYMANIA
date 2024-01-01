import { NextResponse } from "next/server";

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.X_RapidAPI_Key1,
  },
  mode: "cors",
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.X_RapidAPI_Key2,
  },
};

export const fetchData = async (url: any, options: any) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

const handleclick = async (id: String) => {
  const idd = 3293;
  const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "039b563af0msh8e8609917c3fd32p1a9711jsna842dd427d45",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export const fetchdata = async (id: string) => {
  const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "039b563af0msh8e8609917c3fd32p1a9711jsna842dd427d45",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  });

  const data = await response.json();
  console.info(data);

  return NextResponse.json({ data });
};

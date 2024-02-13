import { NextRequest, NextResponse } from "next/server";

export const GET = async (_: NextRequest) => {
  const url = `https://exercisedb.p.rapidapi.com/exercises`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY!,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  });

  const data = await response.json();

  return NextResponse.json({ data });
};

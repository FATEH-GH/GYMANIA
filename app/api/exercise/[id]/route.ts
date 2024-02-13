import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _: NextRequest,
  { params }: { params: { id: string } }
) => {
  const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${params.id}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY!,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  });
  console.log("the url", url);

  const data = await response.json();

  return NextResponse.json({ data });
};

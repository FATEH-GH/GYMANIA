import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _: NextRequest,
  { params }: { params: { id: string } }
) => {
  const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${params.id}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "52635b0f5amsh83c00fe99239c65p1948aejsnf56f02274bbd",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  });

  const data = await response.json();

  return NextResponse.json({ data });
};

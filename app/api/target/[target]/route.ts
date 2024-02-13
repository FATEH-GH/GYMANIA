import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _: NextRequest,
  { params }: { params: { target: string } }
) => {
  const url = `https://exercisedb.p.rapidapi.com/exercises/target/${params?.target}?limit=10`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY!,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  });
  const data = await response.json();

  return NextResponse.json({ data });
};

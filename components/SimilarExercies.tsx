import { ExerciseListProps, SimilarExercisesProps } from "@/types";
import ExerciseCard from "./ExerciseCard";
import { notFound } from "next/navigation";

async function getExerciseByTarget(
  target: string
): Promise<ExerciseListProps[]> {
  const exercise = await fetch(
    `https://exercisedb.p.rapidapi.com/exercises/target/${target}?limit=10`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY!,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    }
  ).then((res) => res.json());
  if (!exercise) {
    return notFound();
  }
  return exercise;
}

export async function SimilarExercises({ target }: SimilarExercisesProps) {
  const listexercices = await getExerciseByTarget(target);
  return (
    <div className="grid place-content-center grid-col-1 sm:grid-cols-2 gap-4 md:grid-cols-3  ">
      {listexercices &&
        listexercices.map((exer, index) => (
          <div key={index}>
            <ExerciseCard exercise={exer} target={true} />
          </div>
        ))}
    </div>
  );
}

export default SimilarExercises;

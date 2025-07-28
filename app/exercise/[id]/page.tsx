import Image from "next/image";
// import SimilarExercises from "@/components/SimilarExercies";
import { notFound } from "next/navigation";
import type { ExerciseListProps, PageProps } from "@/types";
import SimilarExercises from "@/components/SimilarExercies";

const url = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export async function generateStaticParams() {
  const exercises = await fetch(`${url}/api/exercise`).then((res) =>
    res.json()
  );

  return exercises.data.map((exercise: any) => ({
    id: exercise.id,
  }));
}

async function getExercise(id: string): Promise<ExerciseListProps> {
  const exercise = await fetch(
    `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
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

export default async function ExercisePage({ params }: PageProps) {
  const { id } = await params;
  const exercise = await getExercise(id);

  return (
    <section className="wrapper">
      <div className="flex flex-col md:flex-row justify-between md:justify-center items-center gap-10 my-24 mx-6">
        <Image
          src={exercise?.gifUrl}
          alt="gifUrl"
          height={500}
          width={500}
          className="md:w-[40%] rounded-md"
          unoptimized
        />
        <div className="p-2 md:w-1/2 flex flex-col gap-4">
          <h2 className="font-bold text-2xl text-red-500 capitalize my-4 mx-2 ">
            {exercise.name}
          </h2>
          <h3 className="font-bold text-xl mb-2">Instructions</h3>
          <p className="font-semibold"> {exercise.instructions}</p>
          <h2 className="font-bold text-xl">Targeted Muscle:</h2>
          <p className="bg-red-500 rounded-full p-2   max-w-[200px] text-center capitalize font-semibold">
            {exercise.target}
          </p>
          <h2 className="font-bold text-xl">Secondary Muscle:</h2>

          <div className="flex gap-2 flex-wrap">
            {exercise.secondaryMuscles.map((muscle, index) => (
              <p
                key={index}
                className="bg-red-500 rounded-full p-2 min-w-[75px] text-center capitalize font-semibold"
              >
                {muscle}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-bold capitalize  my-8 md:my-12 mx-2 text-2xl md:text-5xl md:text-center ">
          Similar <span className="  text-red-500 ">Target Muscle </span>
          exercises
        </h3>
        <SimilarExercises target={exercise.target} />
      </div>
    </section>
  );
}

import { ExerciseListProps, SimilarExercisesProps } from "@/types";
import ExerciseCard from "./ExerciseCard";
import { notFound } from "next/navigation";

export async function SimilarExercises({ target }: SimilarExercisesProps) {
  async function getExerciseByTarget(
    target: string
  ): Promise<ExerciseListProps[]> {
    const exercise = await fetch(
      `http://localhost:3000/api/target/${target}`
    ).then((res) => res.json());
    console.log(exercise);
    if (!exercise) {
      return notFound();
    }

    return exercise.data;
  }

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

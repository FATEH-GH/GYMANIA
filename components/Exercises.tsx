"use client";

import { ExerciseListProps, exercisesProps } from "@/types";
import { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ BodyPart }: exercisesProps) => {
  const [exercises, setExercises] = useState<ExerciseListProps[]>();

  useEffect(() => {
    const fetchExercise = async () => {
      if (BodyPart !== "all") {
        const { data }: { data: ExerciseListProps[] } = await fetch(
          `/api/BodyParts/${BodyPart.toLowerCase()}`
        )
          .then((res) => res.json())
          .catch((err) => console.info(err));

        setExercises(data);
      } else {
        const { data }: { data: ExerciseListProps[] } = await fetch(
          "/api/exercise"
        )
          .then((res) => res.json())
          .catch((err) => console.info(err));

        setExercises(data);
      }
    };
    fetchExercise();
  }, [BodyPart]);

  // swr

  return (
    <section id="exercises">
      <h2 className="font-bold my-8 text-2xl md:text-4xl">Showing Results</h2>
      <div className="grid place-content-center grid-col-1 sm:grid-cols-2 gap-4 md:grid-cols-3  ">
        {exercises &&
          exercises.map((exer, index) => (
            <div key={index}>
              <ExerciseCard exercise={exer} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Exercises;

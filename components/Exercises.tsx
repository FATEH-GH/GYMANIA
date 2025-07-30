"use client";

import { ExerciseListProps, exercisesProps } from "@/types";
import { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import SkeletonLoader from "./Skeleton";

const Exercises = ({ BodyPart }: exercisesProps) => {
  const [exercises, setExercises] = useState<ExerciseListProps[]>();
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const response = await fetch(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${BodyPart.toLowerCase()}?limit=10`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY!,
              "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
            },
          }
        );
        const data: ExerciseListProps[] = await response.json();
        setExercises(data);
      } catch (error) {
        console.error("Failed to fetch exercises:", error);
      }
    };

    fetchExercise();
  }, [BodyPart]);

  // swr

  return (
    <>
      {!isloading ? (
        <section id="exercises">
          <h2 className="font-anton my-8 text-3xl md:text-6xl">
            Showing Results
          </h2>
          <div className="grid place-content-center grid-col-1 sm:grid-cols-2 gap-4 md:grid-cols-3  ">
            {exercises &&
              exercises.map((exer, index) => (
                <div key={index}>
                  <ExerciseCard exercise={exer} />
                </div>
              ))}
          </div>
        </section>
      ) : (
        <SkeletonLoader />
      )}
    </>
  );
};

export default Exercises;

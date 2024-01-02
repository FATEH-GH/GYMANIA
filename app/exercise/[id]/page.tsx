"use client";
import { ExerciseListProps } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import SkeletonLoader from "@/components/Skeleton";
import SimilarExercises from "@/components/SimilarExercies";

const Exercise = ({ params }: { params: { id: number } }) => {
  const [exercicesId, setExercicesId] = useState<ExerciseListProps>();
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchExercise = async () => {
      setIsLoading(true);
      const { data }: { data: ExerciseListProps } = await fetch(
        `/api/exercise/${params.id}`
      )
        .then((res) => res.json())
        .catch((err) => console.info(err));
      setExercicesId(data);
      console.log("the first useeffect(1)");
      setIsLoading(false);
    };
    fetchExercise();
  }, [params.id]);

  console.log("here is the list: s", exercicesId?.target);
  return (
    <>
      {exercicesId && !isloading ? (
        <section className="wrapper">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <Image
              src={exercicesId?.gifUrl}
              alt="gifUrl"
              height={1000}
              width={1000}
              className="md:w-1/2"
            />
            <div className="p-2 md:w-1/2 flex flex-col gap-4">
              <h2 className="font-bold text-2xl text-red-500 capitalize my-4 mx-2 ">
                {exercicesId.name}
              </h2>
              <h3 className="font-bold text-xl mb-2">Instructions</h3>
              <p className="font-semibold"> {exercicesId.instructions}</p>
              <h2 className="font-bold text-xl">Targeted Muscle:</h2>
              <p className="bg-red-500 rounded-full p-2   max-w-[200px] text-center capitalize font-semibold">
                {exercicesId.target}
              </p>
              <h2 className="font-bold text-xl">Secondary Muscle:</h2>

              <div className="flex gap-2 flex-wrap">
                {exercicesId.secondaryMuscles.map((muscle, index) => (
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
            <SimilarExercises target={exercicesId.target} />
          </div>
        </section>
      ) : (
        <SkeletonLoader />
      )}
    </>
  );
};

export default Exercise;

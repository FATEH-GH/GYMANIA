import { ExerciseListProps, SimilarExercisesProps } from "@/types";
import { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";

const SimilarExercises = ({ target }: SimilarExercisesProps) => {
  const [listexercices, setListExercices] = useState<ExerciseListProps[]>();

  useEffect(() => {
    const fetExercieseTarget = async () => {
      const { data }: { data: ExerciseListProps[] } = await fetch(
        `/api/target/${target}`
      )
        .then((res) => res.json())
        .catch((err) => console.info(err));
      setListExercices(data);
      console.log("the second useeffect(2)");
    };
    fetExercieseTarget();
  }, [target]);
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
};

export default SimilarExercises;

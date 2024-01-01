import { ExerciseListProps } from "@/types";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Link from "next/link";

interface ExerciseCardProps {
  exercise: ExerciseListProps;
}

const exercisesCard = ({ exercise }: ExerciseCardProps) => {
  // console.log(
  //   exercise.secondaryMuscles.map((value, index) => {
  //     return value;
  //   })
  // );

  return (
    <section className="wrapper">
      <Card className="m-4 group hover:scale-110  transition duration-300 py-0 overflow-hidden h-[500px]">
        <div className=" h-2 w-full translate-x-[-100%] group-hover:translate-x-0 transition duration-300 rounded-full bg-red-500" />

        <Link href={`exercise/${exercise.id}`} className="">
          <CardContent className="flex items-start justify-center flex-col gap-6">
            <Image
              src={exercise.gifUrl}
              alt="imageUrl"
              width={300}
              height={300}
            />
            <div className="flex gap-4 flex-wrap font-semibold">
              {exercise.secondaryMuscles.map((exer, index) => (
                <p
                  key={index}
                  className=" bg-red-500 rounded-full p-2 min-w-[75px] text-center capitalize  "
                >
                  {exer}
                </p>
              ))}
            </div>
            <p className="font-bold text-xl md:text-2xl  capitalize">
              {exercise.name}
            </p>
          </CardContent>
        </Link>
      </Card>
    </section>
  );
};

export default exercisesCard;
//<Image src={exercise.gifUrl} alt="gifUrl" width={500} height={500} />
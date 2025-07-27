import { ExerciseCardProps } from "@/types";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

const exercisesCard = ({ exercise, target }: ExerciseCardProps) => {
  return (
    <section className="wrapper">
      <Card className="m-4 group hover:scale-110  transition duration-300 py-0 overflow-hidden md:h-[500px]">
        <div className=" h-2 w-full -translate-x-full group-hover:translate-x-0 transition duration-300 rounded-full bg-red-500" />

        <Link
          href={`${target ? `./${exercise.id}` : `exercise/${exercise.id}`}  `}
        >
          <CardContent className="flex items-center justify-center flex-col gap-6">
            <Image
              src={exercise.gifUrl}
              alt="imageUrl"
              width={300}
              height={300}
              className="bg-white rounded-md"
              unoptimized
            />
            <div className="flex gap-4 flex-wrap font-roboto font-semibold">
              {exercise.secondaryMuscles.map((exer, index) => (
                <p
                  key={index}
                  className=" bg-red-500 rounded-full p-2 min-w-[75px] text-center capitalize  "
                >
                  {exer}
                </p>
              ))}
            </div>
            <p className="font-semibold text-xl md:text-2xl  capitalize">
              {exercise.name}
            </p>
          </CardContent>
        </Link>
      </Card>
    </section>
  );
};

export default exercisesCard;

import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

const SkeletonLoader = () => {
  return (
    <section className="wrapper">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mx-8">
        <Skeleton className="md:w-1/2 h-[400px] w-[350px]" />
        <div className="p-2 md:w-1/2 flex flex-col gap-4">
          <Skeleton className="font-bold text-2xl text-red-500 capitalize my-4 mx-2 " />
          <Skeleton className="h-6 w-[250px] " />
          <Skeleton className="h-6 w-[100px]" />
          <Skeleton className="h-[100px] w-[200px] md:w-full" />
          <Skeleton className="h-6 w-[100px]" />
          <Skeleton className="h-6 w-[75px]" />
          <Skeleton className="h-6 w-[100px]" />
          <div className="flex gap-2 flex-wrap ">
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} className="h-6 w-[75px]" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 items-center justify-center mx-4 my-10">
        <Skeleton className="h-6 w-full text-center" />

        <Skeleton className="h-48 w-full" />
      </div>
    </section>
  );
};

export default SkeletonLoader;

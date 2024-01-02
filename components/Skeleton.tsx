import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

const SkeletonLoader = () => {
  return (
    <section className="wrapper">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <Skeleton className="md:w-1/2 h-[400px] w-[350px]" />
        <div className="p-2 md:w-1/2 flex flex-col gap-4">
          <Skeleton className="font-bold text-2xl text-red-500 capitalize my-4 mx-2 " />
          <Skeleton className="h-4 w-[100px] " />
          <Skeleton className="h-2 w-5" />
          <Skeleton className="h-2 w-5" />
          <Skeleton className="h-2 w-5" />
          <Skeleton className="h-2 w-5" />

          <div className="flex gap-2 flex-wrap">
            {Array.prototype.map((index) => (
              <p key={index} className="h-2 w-5"></p>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Skeleton className="h-3 w-8 text-center" />

        <Skeleton className="h-3 w-8" />
      </div>
    </section>
  );
};

export default SkeletonLoader;

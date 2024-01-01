"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Body } from "@/constants";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { MotionDiv } from "./FramerMotion";
import Exercices from "./Exercises";

const SearchExercices = () => {
  const [isSelected, setIsSelected] = useState<string>("All");

  return (
    <section className="wrapper mx-8 min-h-screen">
      <h2 className="font-bold text-4xl md:text-6xl  text-center leading-10">
        Awesome Exercices You <br className="hidden lg:block" /> Should Know{" "}
      </h2>
      <Carousel className="my-10 mx-10">
        <CarouselContent>
          {Body.map((exer, index) => (
            <CarouselItem key={index} className=" md:basis-1/3 lg:basis-1/4">
              <MotionDiv whileHover={{ y: -10 }} className="p-1 my-4">
                <Link
                  href="#exercises"
                  onClick={() => setIsSelected(exer.part)}
                >
                  <Card>
                    <div
                      className={` h-2 w-full bg-red-500 ${
                        isSelected === exer.part ? "block" : "hidden"
                      } `}
                    />
                    <CardContent className="flex flex-col gap-4 aspect-square items-center justify-center p-6">
                      <Image
                        src={exer.image}
                        alt="image"
                        height={100}
                        width={100}
                        className="object-contain object-center"
                      />
                      <span className="text-3xl font-semibold">
                        {exer.part}
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </MotionDiv>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Exercices BodyPart={isSelected.toLowerCase()} />
    </section>
  );
};

export default SearchExercices;

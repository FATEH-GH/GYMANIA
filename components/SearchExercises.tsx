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
    <section className="wrapper mx-8 ">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 place-content-center  min-h-screen max-sm:my-24">
        <Image
          src="/images/dumbell.png"
          alt="dumbell image"
          width={500}
          height={500}
          className="bg-red-500 rounded-full p-8"
        />
        <p className="text-xl md:text-2xl max-w-2xl flex font-semibold items-center leading-10">
          Going to the gym for the first time doesn’t need to be daunting. We
          offer some beginner workouts to help you feel confident and get the
          most out of your gym time. Everyone has different reasons for joining
          a gym but for anyone just starting out on their journey, understanding
          how to use equipment effectively can be confusing.
          <br /> These beginner gym workouts are ideal for various goals,
          whether you want to lose weight or burn fat, build muscle and
          strength, or improve your fitness.
        </p>
      </div>
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
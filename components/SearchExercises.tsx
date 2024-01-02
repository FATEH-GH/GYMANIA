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
import { MotionDiv, MotionImage, MotionP } from "./FramerMotion";
import Exercices from "./Exercises";

import { useInView } from "react-intersection-observer";

const SearchExercices = () => {
  const [isSelected, setIsSelected] = useState<string>("All");

  const [onView, setOnView] = useState(false);
  const [ref, inView] = useInView();

  const variant = {
    View: {
      x: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    if (inView) {
      setOnView(true);
    }
  }, [inView]);

  return (
    <section className="wrapper mx-8  my-24 md:my-36">
      <div
        ref={ref}
        className="grid grid-cols-1 gap-8 md:grid-cols-2 place-content-center mb-10 max-sm:my-24"
      >
        <MotionImage
          initial={{ x: 50, opacity: 0 }}
          variants={variant}
          animate={onView ? "View" : ""}
          transition={{ duration: 0.75 }}
          src="/images/dumbell.png"
          alt="dumbell image"
          width={500}
          height={500}
          className="bg-red-500 rounded-full p-8"
        />
        <MotionP
          initial={{ x: -50, opacity: 0 }}
          variants={variant}
          animate={onView ? "View" : ""}
          transition={{ duration: 0.75 }}
          className="text-xl md:text-2xl max-w-2xl flex font-semibold items-center leading-10"
        >
          Going to the gym for the first time doesn’t need to be daunting. We
          offer some beginner workouts to help you feel confident and get the
          most out of your gym time. Everyone has different reasons for joining
          a gym but for anyone just starting out on their journey, understanding
          how to use equipment effectively can be confusing.
          <br />
        </MotionP>
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

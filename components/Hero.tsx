import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { MotionDiv } from "./FramerMotion";

const Hero = () => {
  return (
    <section className=" wrapper mx-8 mb-48 ">
      <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 2xl:gap-0">
        <MotionDiv
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col justify-center gap-8"
        >
          <h1 className="text-red-400 font-semibold text-2xl md:text-3xl">
            Fitness Club
          </h1>
          <h2 className="font-bold text-3xl leading-10 md:text-4xl">
            Sweat, Smile And Repeat
          </h2>
          <p className="text-xl md:text-2xl">
            Check the most effective exercises persolnelized to you.
          </p>
          <Button
            variant="destructive"
            className="max-w-[150px] text-lg md:text-xl"
          >
            <Link href="#exercises">Explore more</Link>
          </Button>
        </MotionDiv>
        <MotionDiv
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/images/hero.png"
            alt="hero image"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl-max-h-[50vh] bg-red-500 rounded-full"
          />
        </MotionDiv>
      </div>
    </section>
  );
};

export default Hero;

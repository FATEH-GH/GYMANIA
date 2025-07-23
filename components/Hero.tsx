import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { MotionDiv } from "./FramerMotion";

const Hero = () => {
  return (
    <section className=" wrapper mx-8 mb-48 mt- ">
      <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 2xl:gap-0">
        <MotionDiv
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col justify-center gap-8"
        >
          <h1 className="font-bold text-4xl md:text-8xl">
            Unleash Your Power.
          </h1>
          <p className="text-xl md:text-2xl">
            Train Like a Pro by Checking the most effective exercises
            persolnelized to you and
          </p>
          <Button className="max-w-[150px] text-lg md:text-xl bg-customColor text-blach dark:text-white font-semibold">
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
            className="  object-contain object-center   bg-customColor rounded-full"
          />
        </MotionDiv>
      </div>
    </section>
  );
};

export default Hero;

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { MotionDiv } from "./FramerMotion";

const Hero = () => {
  return (
    <section className=" wrapper mx-4 border-2 p-4 md:p-8 ">
      <div className="flex flex-col md:flex-row justify-center gap-16 ">
        <MotionDiv
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col justify-center gap-4 md:gap-8"
        >
          <h1 className=" text-4xl md:text-8xl font-anton ">
            Unleash <br /> Your Power.
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl font-roboto">
            Train Like a Pro by Checking the most effective exercises
            persolnelized to you and
          </p>
          <Button className="max-w-[150px] text-lg md:text-xl bg-customColor text-blach dark:text-white font-semibold font-roboto">
            <Link href="#exercises">Explore more</Link>
          </Button>
        </MotionDiv>
        <MotionDiv
          // className="m-5 border-2 pb-5"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/images/hero.png"
            alt="hero image"
            width={600}
            height={600}
            className="   object-center   bg-customColor rounded-full"
          />
        </MotionDiv>
      </div>
    </section>
  );
};

export default Hero;

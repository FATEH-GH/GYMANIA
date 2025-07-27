import CardFlip from "./ui/card-flip";

const FeaturedExercises = () => {
  return (
    <section id="featured">
      <h2 className="font-anton font-light my-8 text-3xl md:text-6xl text-center ">
        Featured Workouts
      </h2>{" "}
      <div className="flex flex-col md:flex-row  justify-evenly  gap-4 items-center  ">
        {/* <CardFlip
          image="/images/Chest.png"
          title="Push Day Routine"
          target={["Chest", "Shoulders", "Triceps"]}
          duration="60 Min"
        />
        <CardFlip
          image="/images/UpperLegs.png"
          title="Leg Day Blast"
          target={["Quads", "Calves"]}
          duration="75 Min"
        />
        <CardFlip
          image="/images/UpperArms.png"
          title="Arm Strength Builder"
          target={["Biceps", "Triceps", "Forearms"]}
          duration="45 Min"
        /> */}
      </div>
    </section>
  );
};

export default FeaturedExercises;

import { PanelsTopLeft, Filter, Flame, Dumbbell } from "lucide-react";

const ChooseUs = () => {
  return (
    <section
      id="chooseUs"
      className="flex flex-col items-center justify-center"
    >
      <h2 className="font-anton font-light my-8 text-3xl md:text-6xl text-center ">
        {" "}
        Why Choose Us
      </h2>
      <div className="flex flex-col md:flex-row   justify-between gap-8 md:gap-20 my-4 ">
        <div className="flex items-center justify-center flex-col gap-2">
          <Filter className="h-16 w-16" />
          <p className="font-roboto text-xl md:text-2xl"> Progress tracker</p>
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <PanelsTopLeft className="h-16 w-16" />
          <p className="font-roboto text-xl md:text-2xl"> Smart filters</p>
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <Flame className="h-16 w-16" />
          <p className="font-roboto text-xl md:text-2xl"> Advanced programs</p>
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <Dumbbell className="h-16 w-16 " />
          <p className="font-roboto text-xl md:text-2xl">
            {" "}
            Personalized routines
          </p>
        </div>
      </div>
    </section>
  );
};
export default ChooseUs;

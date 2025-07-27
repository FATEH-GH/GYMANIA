import { FeaturedProps } from "@/types";

const FeaturedCard = ({ title, duration, target }: FeaturedProps) => {
  console.log("here are the logs:", title, duration, target);
  return (
    <div className="border-2 rounded-md border-customColor flex justify-center items-center flex-col font-roboto">
      <h2 className="">{title}</h2>
      <p>{duration}</p>
      <div className="w-full h-1 " />
      <p>{target}</p>
    </div>
  );
};

export default FeaturedCard;

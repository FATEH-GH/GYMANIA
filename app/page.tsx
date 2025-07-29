import ChooseUs from "@/components/ChooseUs";
import FeaturedExercises from "@/components/FeaturedExercises";
import Hero from "@/components/Hero";
import SearchExercises from "@/components/SearchExercises";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="wrapper">
      <Hero />
      <FeaturedExercises />
      <ChooseUs />
      <SearchExercises />
      <Testimonials />
    </main>
  );
}
